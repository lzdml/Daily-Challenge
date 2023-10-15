## 算法图解

### 第三章递归

- 递归原理
    - 每个递归函数都有两部分: `基线条件(base case)` 和 `递归条件(recursive case)`. 递归条件指的是函数调用自己, 而基线条件指的是函数不再调用自己, 从而避免形成无限循环

```python
def countdown(i):
    print i
    if i <= 1:
        return              <---------- 基线条件
    else:
        countdown(i-1)      <---------- 递归条件
```

- 如果有一个套娃的游戏, 你需要从中找出一个一把钥匙, 但是你不知道钥匙在哪一个套娃里面, 所以你需要有一个逻辑. 所以我们分析一下逻辑

::: info 方法一
一. 创建一个要查找的盒子堆  
二. 从盒子堆取出一个盒子, 在里面找  
三. 如果找到的是盒子, 就将其加入盒子堆中, 以便以后再查找  
四. 如果找到钥匙, 则大功告成!  
五. 回到第二步

:::

::: info 第二步 
一. 检查盒子中的每样东西  
二. 如果是盒子, 就回到第一步
三. 如果是钥匙, 就结束

```python

def find_key(dolls):
    for doll in dolls:
        if isinstance(doll, list):
            result = find_key(doll)
            if result is not None:
                return result
        elif doll == 'key':
            return 'Found the key!'

    return None


nesting_dolls = [1, 2, [3, 4, ["key", 6]], 7, [8, [9, 10]]]

# 调用函数开始搜索
result = find_key(nesting_dolls)

# 打印结果
print(result)
```
:::