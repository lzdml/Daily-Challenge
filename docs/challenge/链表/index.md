## 链表

### 反转链表-[代码随想录](https://leetcode.cn/problems/reverse-linked-list/solutions/1004106/dai-ma-sui-xiang-lu-dai-ni-gao-ding-lian-37bl/)

- 思路:
  - 我们可以申请两个指针，第一个指针叫 pre，最初是指向 null 的。
  - 第二个指针 cur 指向 head，然后不断遍历 cur。
  - 每次迭代到 cur，都将 cur 的 next 指向 pre，然后 pre 和 cur 前进一位。
  - 都迭代完了(cur 变成 null 了)，pre 就是最后一个节点了。

```javascript
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let pre = null,
    cur = head,
    temp = null;

  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};
```
