## Vue 核心特性

---

### 数据驱动 (MVVM)

**MVVM** 表示的是 **Model-View-ViewModel**

- Model: 模型层, 负责处理业务逻辑以及和服务端进行交互
- View: 视图层, 负责将数据模型转化为 UI 展示出来, 可以理解为 HTML 页面
- ViewModel: 视图模型层, 用来链接 Model 和 View, 是两者通信的桥梁

### 组件化

1. 组件化就是把 HTML, CSS, JS 各种逻辑抽象成一个统一的概念来实现开发的模式

2. 组件化的优势

- 降低整个系统的耦合度, 在保持接口不变的情况下, 我们可以替换不同的组件快速完成需求
- 调试方便, 由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单
- 提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级

### Vue 和 React 对比

1. **相同点**

- 都有组件化思想
- 都支持服务端渲染
- 都有 Virtual DOM
- 数据驱动视图
- 都有自己的构建工具

2. **不同点**

- 数据流向不同, **react**从诞生就推崇的是单向数据流, 而 **Vue**是双向数据流

- 数据变化的实现原理不同. **react**使用的是不可变数据, 而 **Vue**使用的是可变的数据

- diff 算法不同, **react**主要使用 diff 队列保存需要更新哪些 DOM, 得到 patch 树, 然后使用 patch 操作更新视图, 而 **Vue**使用双向指针, 边对比, 边更新 DOM


### 参考文献
[https://zhuanlan.zhihu.com/p/38296857](https://zhuanlan.zhihu.com/p/38296857)