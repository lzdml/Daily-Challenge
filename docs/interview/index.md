## typeof

**typeof** 操作符唯一的目的就是检查数据类型

|          | 类型                                             | typeof 结果 |
| -------- | ------------------------------------------------ | ----------- |
| 基本类型 | undefined                                        | `undefined` |
|          | Boolean                                          | `boolean`   |
|          | Number                                           | `number`    |
|          | String                                           | `string`    |
|          | Symbol                                           | `symbol`    |
|          | BigInt                                           | `bigint`    |
|          | null                                             | `object`    |
| 引用类型 | Object(Object, Array, Map, Set, Regexp, Date 等) | `object`    |
|          | Function                                         | `function`  |

你会发现用**typeof**来判断**引用类型**时, 都会返回 **'object'**
. 为此, 引入了 **instanceof**

**instanceof** 运算符用于检测构造函数的 **prototype** 属性是否出现在某个实例对象的原型链上。

```javascript
var arr = [];
arr instanceof Array; // true
typeof arr; // "object"

function A() {}
function B() {}

// Javascript 继承
B.prototype = new A();
var b = new B();

b instanceof A; // true
b instanceof B; // true
```

### instanceof 的内部实现原理

- 思路: 利用 **原型和原型链**, 每一个函数都有一个显式的 **prototype**, 每一个对象都有一个隐式原型 \***\*proto\*\***, 当我们对象的原型链中存在构造函数的显式原型 **prototype**时, 我们就可以确定它们之间存在关系;

```javascript
function myInstanceOf(constructor, instance) {
  let prototype = constructor.prototype;
  let proto = instance.__proto__;
  while (true) {
    // 说明道原型链订单, 还未找到, 返回 false
    if (proto === null) {
      return false;
    }
    if (proto === prototype) {
      return true;
    }
    // 继续向 proto 的原型链上遍历
    proto = Object.getPrototypeOf(proto);
  }
}
```

### Object.prototype.toString()

- toString() 方法返回一个表示该对象的字符串。该方法旨在重写（自定义）派生类对象的类型转换的逻辑。
- valueOf() 方法返回对象的原始值表示

该方法由 **字符串转换**优先调用, 但是 **数字的强制转换**和**原始值的强制转换** 会优先调用 **valueOf**, 因为基本的 **valueOf()** 方法返回一个对象，**toString()** 方法通常在结束时调用

默认情况下(不重写 **toString**方法), 任何一个对象调用 **Object**原生的 **toString**方法, 都会返回一个 `[object type]`, 其中 **type**是对象的类型

```javascript
let a = {};

a; // {}
a.toString(); // "[object Object]"
```

### [[class]]

每个 **实例** 都有一个 [[Class]] 属性，这个属性中就指定了上述字符串中的 type 。 [[Class]] 不能直接地被访问，但通常可以通过 **Object.prototype.toString.call(..)** 方法调用来展示。

```javascript
// Boolean 类型，tag 为 "Boolean"
Object.prototype.toString.call(true); // => "[object Boolean]"

// Number 类型，tag 为 "Number"
Object.prototype.toString.call(1); // => "[object Boolean]"

// String 类型，tag 为 "String"
Object.prototype.toString.call(""); // => "[object String]"

// Array 类型，tag 为 "String"
Object.prototype.toString.call([]); // => "[object Array]"

// Arguments 类型，tag 为 "Arguments"
Object.prototype.toString.call(
  (function () {
    return arguments;
  })()
); // => "[object Arguments]"

// Function 类型， tag 为 "Function"
Object.prototype.toString.call(function () {}); // => "[object Function]"

// Error 类型（包含子类型），tag 为 "Error"
Object.prototype.toString.call(new Error()); // => "[object Error]"

// RegExp 类型，tag 为 "RegExp"
Object.prototype.toString.call(/\d+/); // => "[object RegExp]"

// Date 类型，tag 为 "Date"
Object.prototype.toString.call(new Date()); // => "[object Date]"

// 其他类型，tag 为 "Object"
Object.prototype.toString.call(new (class {})()); // => "[object Object]"
```

所以可以通过这个方法来判断每个对象的类型

```javascript
function generator(type){
  return function(value){
    return Object.prototype.toString.call(value) === "[object "+ type +"]"
  }
}

let isFunction = generator('Function')
let isArray = generator('Array');
let isDate = generator('Date');
let isRegExp = generator('RegExp');

isArray([]);    // true
isDate(new Date()); // true
isRegExp(/\w/); // true
isFunction(function(){}); //true
```

以下是一道简单的面试题

```javascript
+[1 + [2] + 3] + [1 + 2 + true - false] + [[3 - false + "1"]];

// 拆分一下
let a = +[1 + [2] + 3];
// [2]会首先进行转换 [2].valueOf, 结果不是基本类型, [2]在调用toString(), 返回'2', 最后 1 + '2' + 3, 1,3进行隐式转换, +'123' ==> 123
let b = [1 + 2 + true - false];
// [3+true-false], true, false会进行转换, true=>1, false=>0, 最后1-0==>[1+3]==>[4]==>[4].valueOf().toString()==>'4'
let c = [[3 - false + "1"]];
// 先转换数组里面的一层, [3-0+'1']==>['31'], 结果: [['31']]==>[['31']].valueOf().toString()==>'31'

// 最后 a+b+c
// 123+'4'+'31'==>123431
```

面试题目, 如何同时让等式成立, a===1&&a===2&&a===3

- 思路:
  重写 a 的 valueOf 方法

```javascript
let a = {
  value: [3, 2, 1],
  valueOf: function () {
    return this.value.pop();
  },
};
```

### 总结:

- 当一侧为 String 类型，被识别为字符串拼接，并会优先将另一侧转换为字符串类型。
- 当一侧为 Number 类型，另一侧为原始类型，则将原始类型转换为 Number 类型。
- 当一侧为 Number 类型，另一侧为引用类型，将引用类型和 Number 类型转换成字符串后拼接。
- 只有 null undefined '' NaN 0 false 这几个是 false，其他的情况都是 true，比如 {} , []。



## 介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？
1. **npm模块安装机制**
 - 发出`npm install`命
 - 查询`node_modules`目录之中是否已经存在指定模块
    - 若存在, 不再重新安装
    - 若不存在
      - npm向`registry`查询模块压缩包的网址
      - 下载压缩包, 存放到根目录下的`.npm`目录
      - 解压压缩包到当前项目的`node_modules`目录

2. **npm实现原理**
输入`npm install`命令回经历如下几个阶段
  2.1 **执行工程自身preinstall**
      - 当前`npm`工程如果定义了`preinstall`钩子此时会被执行
  2.2 **确定首层依赖模块**
      - 首先需要做的是确定工程中的首层依赖, 也就是`dependencies`和`devDependencies`属性中直接指定的模块(假设此时没有添加`npm install`参数)
      - 工程本身是整颗依赖树的根节点, 每个首层依赖模块都是根节点下的一颗子树, `npm`会开启多进程从每个首层依赖模块开始逐步寻找更深层级的节点

3. **获取模块**
获取模块是一个 `递归`的过程, 分为以下几步: 
  - 获取模块信息. 在下载一个模块之前, 首先要确定其版本, 这是因为 `package.json`中往往是 `semantic version`(语义化版本). 此时如果版本描述文件`(npm-shrinkwrap.json)或package-lock.json`中有该模块信息直接拿即可, 如果没有则从仓库获取. 如`package.json`中某个包的版本是`^1.1.0`, npm就会去仓库中获取符合`1.x.x`形式的最新版本
  - 获取模块实体. 上一步会获取到模块的压缩包地址`(resolved)字段`, npm会用此地址检查本地缓存, 缓存中有就直接拿, 没有则从仓库下载
  - 查找该模块依赖, 如果有依赖则回到第一步, 没有就停止


4. **模块扁平化**
上一步获取到的是一颗完整的依赖树, 其中可能包含大量重复模块, 如A模块依赖于`lodash`, B模块也依赖于`lodash`. `在npm3`以前会严格按照依赖树的结构进行安装, 因此会造成模块冗余

从`npm3`开始默认加入了一个`dedupe`的过程. 它会遍历所有的节点, 逐个将模块放在根节点下面, 也就是`node_modules`的第一层, 当发现有`重复`的模块时, 则将其丢弃

重复模块定义: (`模块名相同且semver兼容`).每个`semver都对应一段版本允许范围,如果两个模块的版本允许范围存在交集, 那么就可以得到一个兼容版本`, 而不必版本号完全一致, 这可以使更多冗余模块在`dedupe`过程中被弃掉

假设 version1 和 version2 是兼容版本，则经过 dedupe 会成为下面的形式：  
`node_modules`  
- foo
- bar
  - lodash（保留的版本为兼容版本）

假设 version1 和 version2 为非兼容版本，则后面的版本保留在依赖树中：

`node_modules`  
- foo
  - lodash@version1

- bar
  - lodash@version2

5. **安装模块**
这一步将会更新工程中的`node_modules`, 并执行模块中的`生命周期函数`. (按照`preinstall`, `install`, `postinstall`的顺序)

6. **执行工程自身生命周期**
当前 `npm`工程如果定义了钩子此时会被执行 (按照`install`, `postinstall`, `prepublish`, `prepare`的顺序)
7. 生成或者更新版本描述文件, `npm install`过程完成

8. 参考文献: 
  - [npm-install](https://www.ruanyifeng.com/blog/2016/01/npm-install.html)