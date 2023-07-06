### vue3 做了哪些优化

通常使用`vue2`开发的项目, 普遍会存在以下问题

- 代码的可读性随着组件变大而变差
- 每一种代码复用的方式, 都存在缺点
- TypeScript 支持有限

所以`vue3`的`Composition Api`就是为了解决这些问题

::: details vue2/vue3 语法

```javascript
// vue2 options api
export default {
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    double() {
      return this.count * 2;
    },
  },
  methods: {
    handleCount() {
      this.count = ~~this.count + 1;
    },
  },
};

// vue3 hook
function useCount() {
  const count = ref(10);
  const double = computed(() => count.value * 2);
  const handleCount = () => {
    count.value = count.value * 2;
  };
  return {
    count,
    double,
    handleCount,
  };
}
```

:::

---

**速度更快**
`vue3`相比`vue2`

- 重写了虚拟`dom`
- 编译模版的优化
- 更高效的组件初始化
- 性能提高`1.3-2`倍
- `SSR`速度提高了`2-3`倍

---

**体积更小**

- 通过`webpack`的`tree-shaking`功能, 可以将无用模块摇掉, 仅打包需要的, `tree-shaking`是基于`ES6`模版语法(`import`与`exports`), 主要是借助`ES6`模块的静态编译思想, 在编译时就能确定模块的依赖关系, 以及输入和输出的变量

  `tree-shaking`无非就是做了两件事

  - 编译阶段利用 `ES6 Module`判断哪些模块已经加载
  - 判断哪些模型和变量未被引用或使用, 进而删除对应代码

---

**更好的智能提示**

- `vue3`是基于`typescript`编写的, 可以享受到自动的类型定义提示

---

**更易维护, 更接近原生`javascript`**

- `composition api`
- 可与现有的`options api`一起使用
- 灵活的逻辑组件和复用
- `vue3`的单独模块可以和其他框架搭配使用

---

**响应式系统**

- `vue2`中采用`defineProperty`来劫持整个对象, 然后进行深度遍历所有属性, 给每个属性添加`getter`和`setter`, 实现响应式, 不能监听对象属性的添加和删除, 虽然`vue2`提供了`$set`和`$get`

- `vue3`采用`proxy`重写响应式系统, 因为`proxy`可以对整个对象进行监听, 所以不需要深度遍历
  - 可以监听动态属性的添加
  - 可以监听到数组的索引和数组`length`属性
  - 可以监听删除属性
