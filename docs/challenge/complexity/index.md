### 时间复杂度

- 给几个例子解释一下时间复杂度


-------------

-  O(1) 性能最优
```javascript {2-3}
let a = 1;
let b = 0;
```

- O(n) 性能最优

```javascript
let n = 100;
for(let i = 0; i < n; i++) {
  console.log(i)
}


// O(fn) = O(1) + O(n) = O(n) 舍去常数部分
function fn(n) {
  // O(1)
  let i = 0;
  i += 2;

  // O(n)
  for(var k  = 0; k < n; k++) {
    console.log(k)
  }
}
```

- O(n^2)

```javascript
function fn() {
  let arr = [];
  // O(n)
  for(let i = 0; i < n; i++) {
    arr.push([])
    for(let k = 0; k < i; k++) {
      arr[k].push(k)
    }
  }
}
```

- O(logN)

```javascript
let i = 0;
const n = 10;

// 循环结束条件根据n的值
while(i < n) {
  i = i * n / 2
}
```