## 栈

栈是一种具有特定行为的线性数据结构，遵循 **后进先出（LIFO）** 的原则。也就是说，最后放入栈的元素最先被取出。栈的特点是只能在栈顶进行插入（压栈）和删除（弹栈）操作，其他位置的元素无法直接访问。类比现实生活中的栈，可以将其看作是一摞盘子，最后放入的盘子最先被取出。


### 有效的括号  
最优解：时间复杂度为O(n)，其中n是字符串的长度。空间复杂度为O(n)，需要使用栈来存储括号字符。

思路：使用栈来判断括号字符串是否有效。遍历字符串的每个字符，判断如果在Map中不存在该字符串, 不存在将开括号压入栈中, 遇到闭括号, 弹出栈顶元素(也就是开括号), 判断是否和Map中的元素相同, 不相等返回false, 最后判断栈的长度是否为空
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
  - 让快指针走在最前面, 如果快指针的前一位和后一位不相等, 则慢指针当前的位置等于快指针位置的值, 同时慢指针往前移一位


```javascript
/**
 * 删除排序数组中的重复项
 *  双指针
 * @param {number[]} nums
 * @returns {number}
 * @description 给定一个数组[1, 2, 3, 4, 4, 5], 剔除重复的, 返回数组的长度, 数组是升序
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  let fast = 1, slow = 1;
  while(fast < n) {
    // 判断前一位和后一位不相等
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return slow;
};
```