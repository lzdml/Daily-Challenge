## 深浅拷贝

### 浅拷贝

一个新的对象对原始对象的属性值进行精确地拷贝，`如果`拷贝的是`基本数据类型`，拷贝的就是`基本数据类型的值`，如果是`引用数据类型`，拷贝的就是`内存地址`。如果其中一个对象的引用内存地址发生改变，另一个对象也会发生变化。

```javascript {6}
let arr = [12, 2, 3];
let arr2 = arr;
arr[0] = arr[0] + 1;
console.log("arr2 :>> ", arr2);
console.log("arr :>> ", arr);
console.log("arr === arr2 :>> ", arr === arr2); // true
```

- **`Object.assign`**

  可以理解成用于 JS`对象的合并`, 其中一个用途就是`浅拷贝`, 该方法接受多个参数, 第一个参数是目标对象, 其余参数是源对象 `Object.assign(target, source, source2)`

  `注意:`

  - 如果目标对象和源对象有`同名属性`, 或者多个源对象有同名属性, 则`后面的属性会覆盖前面的属性`
  - 如果只有一个参数, 当参数为`对象时`, 直接返回该对象, 当`参数不是对象时`, 会先将`参数转为对象`然后返回
  - 如果第一个参数为`null`或者`undefined`, 将会报错
  - 不会拷贝对象的`继承属性`, 不会拷贝对象的`不可枚举的属性`, 可以拷贝`Symbol`类型的属性

```javascript
let targetObj = {
  name: "lm",
  age: 22,
  sex: 0,
};
let obj = {
  name: "dzl",
};
let obj2 = {
  name: "世界",
};

Object.assign(targetObj, obj, obj2);
console.log("targetObj :>> ", targetObj);
// {name: '世界', age: 22, sex: 0} 可以看到name被覆盖

let targetObj2 = { ...targetObj };
targetObj.job.key = "web前端";
targetObj.age = 18;
console.log("targetObj.age = 18 :>> ");
console.log("targetObj.job.key = 'web前端'");
console.log("targetObj :>> ", targetObj);
// {
//   age: 18,
//   job: { key: 'web前端', key2: '后端'},
//   name: '世界',
//   sex: 0
// }
console.log("targetObj2 :>> ", targetObj2);
// {
//   age: 22,
//   job: { key: 'web前端', key2: '后端'},
//   name: '世界',
//   sex: 0
// }

// 可以看到基本数据类型是深拷贝, 引用类型则是浅拷贝
```

---

- **`Array.prototype.slice`**

  - 该方法会复制出一个副本, 也就是说不会改变原数组
  - 用法: `arr.slice(start, end)`, 参数都不填意味着全复制

```javascript
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.slice();
arr1[0] = 0;
console.log("arr3 :>> ", arr3); // arr3 :>>  (5) [0, 2, 3, 4, 5]
console.log("arr4 :>> ", arr4); // arr4 :>>  (5) [1, 2, 3, 4, 5]
```

- **`Array.prototype.concat`**

  - 该方法会返回一个新的数组, 也就是说不会改变原数组
  - 用法: `arr.concat(array)`, 参数都不填意味着全复制

```javascript
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.concat();
arr1[0] = 0;
console.log("arr3 :>> ", arr3); // arr3 :>>  (5) [0, 2, 3, 4, 5]
console.log("arr4 :>> ", arr4); // arr4 :>>  (5) [1, 2, 3, 4, 5]
console.log("arr4 === arr3 :>> ", arr4); // false
```

### 深拷贝

对于简单数据类型直接拷贝值, 对于引用数据类型, 在堆内存中开辟一块新的内存用于存放复制的对象, 两个对象相互独立, `属于不同的内存地址`

- **`Object.assign`**

`Object.assign` 拷贝的对象的属性值只是`简单类型`(number, boolean, string);
得到的新对象的属性值是`深拷贝`,
如果属性值是对象或者其他`引用类型`,
那么拷贝的这个属性值是`浅拷贝`

```javascript
const data = {
  name: "dzl",
  age: 20,
  job: {
    job1: "web",
    job2: "back",
    job3: {
      key: "嘻嘻",
    },
  },
};

let newObj = Object.assign({}, data);
newObj.age = 30;
newObj.job.job1 = "哈哈哈哈哈";
console.log("data :>> ", data);
// {
//   age: 20,
//   job: { job1: '哈哈哈哈哈', job2: 'back', job3: {...} },
//   name: 'dzl'
// }
console.log("newObj :>> ", newObj);
// {
//   age: 30,
//   job: { job1: '哈哈哈哈哈', job2: 'back', job3: {...} },
//   name: 'dzl'
// }
```

- **`JSON.parse(JSON.stringify(cloneObj))`**

  通过`JSON`进行序列化反序列化可以实现深拷贝, 但是会存在几个问题

  - 会自动忽略拷贝对象中的函数
  - 对日期的半支持(如传入 GMT+0800 时间), 输出 ISO 8601 时间
  - 会忽略`undefined`类型
  - 会忽略 `key` 为 `symbol`类型的字段
  - 无法保持之前的原型链
  - 拷贝 `RegExp` 引用类型会变成空对象
  - 对象中包含 `NaN`, `Infinity`, 或 `-Infinity`, 结果会变成 `null`

```javascript
const b = {
  name: "dzl",
  age: 20,
  fn: undefined,
  date: new Date(), // Mon Jun 20 2022 11:21:08 GMT+0800 (中国标准时间) {}
};

const b1 = JSON.parse(JSON.stringify(b));
console.log(b1);
// {
//   age: 20,
//   name: "dzl",
//   date: "2022-06-20T03:21:08.213Z", ISO 8601 国际标准化组织的国际标准
// }
```

- 手写深拷贝

```javascript
function cloneDeep(target, map = new map()) {
  if (target === null) return null;
  if (typeof target !== "object") return target;
  // 处理正则, Date类型
  if (target.constructor === Date) return new Date(target);
  if (target.constructor === RegExp) return new RegExp(target);

  // 处理对象内的循环引用1
  if (map.has(target)) return map.get(target);

  // 保持之前的原型链
  const newTarget = new target.constructor();
  // 没有保持原型链判断
  // const newTarget = Array.isArray(target) ? [] : {}

  // 处理对象内的循环引用2
  map.set(target, newTarget);

  // for .. in .. 遍历不到Symbol类型的key, 这里使用 Reflect.ownKeys方法, 它可以遍历当前对象的所有key
  // for(let key in target) {
  //   if (target.hasOwnProperty(key)) {
  //     newTarget[key] = cloneDeep(target[key])
  //   }
  // }

  Reflect.ownKeys(target).forEach((key) => {
    // newTarget[key] = cloneDeep(target[key])
    // 处理对象内的循环引用3
    newTarget[key] = cloneDeep(target[key], map);
  });

  // 处理对象内的循环引用使用Map即可
  return newTarget;
}
```

**`浅拷贝总结:`**

- `Object.assign(target, source, source2)`

  - 如果目标对象和源对象有`同名属性`, 或者多个源对象有同名属性, 则`后面的属性会覆盖前面的属性`
  - 如果只有一个参数, 当参数为`对象时`, 直接返回该对象, 当`参数不是对象时`, 会先将`参数转为对象`然后返回
  - 如果第一个参数为`null`或者`undefined`, 将会报错
  - 不会拷贝对象的`继承属性`, 不会拷贝对象的`不可枚举的属性`, 可以拷贝`Symbol`类型的属性

- `Array.prototype.slice`
- `Array.prototype.concat`

--------------

**`深拷贝总结:`**

- `JSON.parse(JSON.stringify(cloneObj))`

  通过`JSON`进行序列化反序列化可以实现深拷贝, 但是会存在几个问题

  - 会自动忽略拷贝对象中的函数
  - 对日期的半支持(如传入 GMT+0800 时间), 输出 ISO 8601 时间
  - 会忽略`undefined`类型
  - 会忽略 `key` 为 `symbol`类型的字段
  - 无法保持之前的原型链
  - 拷贝 `RegExp` 引用类型会变成空对象
  - 对象中包含 `NaN`, `Infinity`, 或 `-Infinity`, 结果会变成 `null`

- `lodash.deepClone`
- 自己写一遍
