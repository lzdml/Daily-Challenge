// 定义链表节点
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 定义链表
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 在链表末尾添加节点
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 在链表指定位置插入节点
  insertAt(index, value) {
    if (index < 0 || index > this.getLength()) {
      return false;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      newNode.next = current;
      previous.next = newNode;

      if (current === null) {
        this.tail = newNode;
      }
    }

    return true;
  }

  // 获取链表长度
  getLength() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  // 遍历链表并将节点值以数组形式返回
  toArray() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

// 示例用法
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let pre = null,
    cur = head,
    temp = null,
    count = 1;
  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
    console.group("循环" + count++ + "次结果: ");
    console.log("cur.next :>> ", cur && cur.next);
    console.log("pre: ", pre);
    console.log("cur :>> ", cur);
    console.log("temp :>> ", temp);
    console.groupEnd();
  }
  return pre;
};

console.log("reverseList(head) :>> ", reverseList(linkedList.head));
