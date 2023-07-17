## 栈

栈是一种具有特定行为的线性数据结构，遵循 **后进先出（LIFO）** 的原则。也就是说，最后放入栈的元素最先被取出。栈的特点是只能在栈顶进行插入（压栈）和删除（弹栈）操作，其他位置的元素无法直接访问。类比现实生活中的栈，可以将其看作是一摞盘子，最后放入的盘子最先被取出。

### 有效的括号

- 最优解：时间复杂度为 O(n)，其中 n 是字符串的长度。空间复杂度为 O(n)，需要使用栈来存储括号字符。

- 思路：
  - 使用栈来判断括号字符串是否有效。遍历字符串的每个字符，判断如果在 Map 中不存在该字符串, 不存在将开括号压入栈中, 遇到闭括号, 弹出栈顶元素(也就是开括号), 判断是否和 Map 中的元素相同, 不相等返回 false, 最后判断栈的长度是否为空

```javascript
function isValid(s) {
  const stack = [];
  const bracketMap = new Map([
    ["}", "{"],
    ["]", "["],
    [")", "("],
  ]);
  if (s.length % 2 !== 0) {
    return false;
  }

  for (let char of s) {
    if (bracketMap.has(char)) {
      const top = stack.pop();
      if (top !== bracketMap.get(char)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
```

### 删除有序数组中的重复项

- 思路:
  - 使用双指针
  - 创建一个慢指针 i，指向数组第一位数字，再创建一个快指针 j，指向数组第二位。
  - 若 nums[j]和 nums[i]不等，则先将 i 递增 1，然后把 nums[i]改为 nums[j]。
  - 最初 i 等于 000 时的数字未统计，所以最终返回结果需要+1。

```javascript
/**
 * 删除排序数组中的重复项
 *  双指针
 * @param {number[]} nums
 * @returns {number}
 * @description 给定一个数组[1, 2, 3, 4, 4, 5], 剔除重复的, 返回数组的长度, 数组是升序
 */
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
```

### 删除字符串中的所有相邻重复项

- 题目解释: 给出由小写字母组成的字符串`s`, `重复项删除操作` 会选择 `相邻且相同`的字母, 并删除它们, 在`s`上`反复执行重复项删除操作`, 直到无法继续删除. 在完成所有重复项删除操作后返回最终的字符串. 答案保证唯一

- 示例:

```javascript
输入: "abbaca"
输出: "ca"
解释:
在 `abbaca`中, 我们可以删除"bb" 由于两字母相邻且相同, 这是此时唯一可以执行删除操作的重复项. 之后我们得到字符串 "aaca", 其中又只有 "aa" 可以执行重复项删除操作, 所以最终输出"ca".
```

- 思路:
  - 如果不存在 s 字符串, 则直接返回
  - 对 s 执行循环, 第一步去除栈中的最后一项,和第一项比较, 如果不相等, 将两者入栈此时栈为['undefined', 'a']
  - 第二次循环, 将尾部 a 出栈, 比较 a,b, 不相等将两者入栈, 此时栈为['undefined', 'a', 'b']
  - 第三次循环, 将尾部 b 出栈, 比较 b,b, 此时两者相等, 不执行程序, 此时栈为['undefined', 'a']

```javascript
var removeDuplicates = function (s) {
  if (s.length == 0) {
    return s;
  }

  let stack = [];
  for (v of s) {
    let prev = stack.pop();
    if (prev != v) {
      stack.push(prev);
      stack.push(v);
    }
  }
  return stack.join("");
};
```

### 简化路径

- 题目解释: 给定一个字符串 `path`, 以 `/` 开头, 将其撞换乘更加简洁的规范路径

  - 始终以斜杠 `/`开头
  - 两个目录名之间必须只有一个斜杠 `/`
  - 最后一个目录名(如果存在) `不能`以 `/` 结尾
  - 此外, 路径仅包含从根目录到目标文件或目录的路径上的目录(即, 不含 `.`或 `..`)

- 思路:
  - 栈用来维护路径中的目录，将路径以"/"进行分割，我们会得到“.”、“..”、“路径”和“ ”四种
  - 其中因为“..”表示上级路径，因此如果栈顶有元素的话，要将其弹出，表示切换到上级目录
  - 至于“.”，因为表示的是当前目录，实际上和“ ”一样没有什么作用，直接无视掉就好了
  - 最后栈中剩下的元素，再使用"/"拼接回去

```javascript
var simplifyPath = function (path) {
  path = path.split("/");
  let stack = [];

  for (let p of path) {
    // 两个点表示切换上一级 所以将栈顶弹出
    if (p === "..") {
      if (stack.length) {
        stack.pop();
      }
    }

    // .表示当前目录, 和 '' 一样没有价值可以不考虑
    else if (p !== "" && p !== ".") {
      stack.push(p);
      console.log("p :>> ", p);
      console.log("stack :>> ", stack);
    }
  }

  console.log("stack last :>> ", stack);
  return "/" + stack.join("/");
};
```

### 用栈实现队列
- 思路: 
  - 队列是 `FIFO(先进先出)`, 栈是`FILO(先进后出)`, 两者正好相反
  - 需要两个栈来模拟队列, 一个栈用作入队栈, 一个是出队栈
  - 当出队栈存在内容时, 出队栈栈顶的元素即为需要出队的元素
  - 当出队栈不存在内容时, 将入队栈反转进出队栈, 栈顶元素依旧是第一个要出队的元素

```javascript
var MyQueue = function () {
  this.is = [];
  this.os = [];
};

MyQueue.prototype.push = function (x) {
  this.is.push(x);
};

MyQueue.prototype.pop = function () {
  if (!this.os.length) {
    while (this.is.length) {
      this.os.push(this.is.pop());
    }
  }
  return this.os.pop();
};

MyQueue.prototype.peek = function () {
  if (!this.os.length) {
    while (this.is.length) {
      this.os.push(this.is.pop());
    }
  }
  return this.os[this.os.length - 1];
};

MyQueue.prototype.empty = function () {
  return !this.is.length && !this.os.length;
};
```
