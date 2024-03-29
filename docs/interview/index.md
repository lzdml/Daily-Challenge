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
