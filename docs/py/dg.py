
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