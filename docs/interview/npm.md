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