[双向绑定的原理](/interview/vue/)

## 理解 ViewModel

主要职责是:

- 数据变化更新视图
- 视图变化更新数据

重要组成部分:

- 监听器(`Observer`): 对所有数据的属性进行监听
- 解析器(`Compiler`): 对每个元素节点的指令进行扫描跟解析, 根据指令模版替换数据, 以及绑定相应的更新函数

## 实现双向绑定

要实现`Vue`的双向绑定, 就要先理解双向绑定的流程是什么?

- `new Vue()`首先执行初始化, 对 `data`执行响应化处理, 这个过程发生`Observe`中

- 同时对模版执行编译, 找到其中动态绑定的数据, 从 `data`中获取并初始化视图, 这个过程发生在`Compiler`中

- 定义一个更新函数和`Watcher`, 将来对应数据变化时`Watcher`会调用更新函数

- 由于 `data`的某个`key`在一个视图中可能出现多次, 所以每个`key`都需要一个管家`Dep`来管理多个`Watcher`

- data 中的数据一旦发生变化, 会首先找到对应的`Dep`, 通知所有`Watcher`执行更新函数

![MVVM](/assets/mvvm.png)

## 实现

```javascript
class Vue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;
  }

  // 对data选项做响应式处理
  observe(this.$data);

  // 代理data到vm上
  proxy(this);
}
```

**对`data`进行响应化操作**

```javascript
function observe(obj) {
  if (typeof obj !== "object" || obj == null) {
    return;
  }
  new Observer(obj);
}

class Observer {
  constructor(value) {
    this.value = value;
    this.walk(value);
  }

  walk(obj) {
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key]);
    });
  }
}
```

**编译 `Compile`**

```javascript
class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);
    if (this.$el) {
      this.compile(this.$el);
    }
  }
  compile(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach((node) => {
      if (this.isElement(node)) {
        // 判断是否为节点
        // ...
      } else if (this.isInterpolation(node)) {
        // 判断是否为插值文本 ({  })
        // ...
      }
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node);
      }
    });
  }

  isElement(node) {
    return node.nodeType === 1;
  }
  isInterpolation(node) {
    return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }
}
```

**依赖收集**
一个页面中可能会有多个地方使用某个变量, 所以每次都需要收集依赖, 用`Watcher`来维护, 所以需要一个`Deps`来进行统一管理

思路:

- `defineReactive`时为每一个`key`创建一个`Dep`实例
- 初始化视图时读取某个变量, 例如: name, 创建一个`Watcher`
- 由于触发 `name`的`getter`方法, 便将`Watcher`添加到`name`对应的`Dep`中
- 当`name`更新, `setter`触发, 便可通过对应`Dep`通知其管理所有`Watcher`更新

```javascript
// 负责更新视图
class Watcher {
  constructor(vm, key, updater) {
    this.vm = vm;
    this.key = key;
    this.updaterFn = updater;

    // 创建实例时，把当前实例指定到Dep.target静态属性上
    Dep.target = this;
    // 读一下key，触发get
    vm[key];
    // 置空
    Dep.target = null;
  }

  // 未来执行dom更新函数，由dep调用的
  update() {
    this.updaterFn.call(this.vm, this.vm[this.key]);
  }
}
```

**声明 Dep**

```javascript
class Dep {
  constructor() {
    this.deps = []; // 依赖管理
  }
  addDep(dep) {
    this.deps.push(dep);
  }
  notify() {
    this.deps.forEach((dep) => dep.update());
  }
}
```

**创建`watcher`时触发`getter`**

```javascript
class Watcher {
  constructor(vm, key, updateFn) {
    Dep.target = this;
    this.vm[this.key];
    Dep.target = null;
  }
}
```

**依赖收集，创建`Dep`实例**

```javascript
function defineReactive(obj, key, val) {
  this.observe(val);
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    get() {
      Dep.target && dep.addDep(Dep.target); // Dep.target也就是Watcher实例
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      dep.notify(); // 通知dep执行更新方法
    },
  });
}
```

[https://www.liaoxuefeng.com/wiki/1022910821149312/1109527162256416](https://www.liaoxuefeng.com/wiki/1022910821149312/1109527162256416)

[https://juejin.cn/post/6844903942254510087#heading-9](https://juejin.cn/post/6844903942254510087#heading-9)
