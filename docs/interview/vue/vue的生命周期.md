## vue 的生命周期是什么, 在 created 和 mounted 这两个生命周期中请求数据有什么区别?

## 生命周期有哪些

| 生命周期               | 描述                               |
| ---------------------- | ---------------------------------- |
| beforeCreate           | 组件实例被创建之初                 |
| created                | 组件实例已经完全创建               |
| beforeMount            | 组件挂载之前                       |
| mounted                | 组件挂载到实例上去之后             |
| beforeUpdate           | 组件数据发生变化，更新之前         |
| updated                | 组件数据更新之后                   |
| beforeDestroy          | 组件实例销毁之前                   |
| destroyed              | 组件实例销毁之后                   |
| activated keep-alive   | 缓存的组件激活时                   |
| deactivated keep-alive | 缓存的组件停用时调用               |
| errorCaptured          | 捕获一个来自子孙组件的错误时被调用 |

### 具体分析

`beforeCreate -> created`

- 初始化`vue`实例, 进行数据观测

`created`

- 完成数据观测, 数据与方法的运算, `watch`, `event`事件回调的配置
- 可调用`methods`中的方法, 访问和修改`data`数据触发响应式渲染`dom`, 可通过 `computed`和`watch`完成数据计算
- 此时 `vm.$el`并没有创建

`created -> beforeMount`

- 判断是否存在 `el`选项, 若不存在则停止编译, 直到调用`vm.$mount(el)`才会继续编译
- 优先级: `render` > `template` > `outerHTML`
- `vm.el` 获取到的是挂载`DOM`的

`beforeMount`

- 在此阶段可以获取到`vm.$el`
- 在此阶段`vm.$el`瑞已完成 DOM 初始化, 但并未挂载在`el`选项上

`beforeMount -> mounted`

- 在此阶段 `vm.el`完成挂载, `vm.$el`生成的`DOM`替换了`el`选项所对应的`DOM`

`beforeUpdate`

- 更新的数据必须是被渲染在模版上的(`el`, `template`, `render`之一)
- 此时 `view`层还未更新
- 若在`beforeUpdate`中再次修改数据, 不会在此触发, 不然会死循环

`updated`

- 完成`view`层的更新
- 若在`updated`中再次修改数据, 会再次出发更新函数(`beforeUpdate`, `updated`)

`beforeDestroy`

- 实例被销毁前调用, 此时实例属性与方法仍可访问

`destroyed`

- 完全销毁一个实例, 可清理它与其他实例的连接, 解绑事件监听器

### 使用场景

| 生命周期      | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| beforeCreate  | 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务 |
| created       | 组件初始化完毕，各种数据可以使用，常用于异步数据获取         |
| beforeMount   | 未执行渲染、更新，dom 未创建                                 |
| mounted       | 初始化结束，dom 已创建，可用于获取访问数据和 dom 元素        |
| beforeUpdate  | 更新前，可用于获取更新前各种状态                             |
| updated       | 更新后，所有状态已是最新                                     |
| beforeDestroy | 销毁前，可用于一些定时器或订阅的取消                         |
| destroyed     | 组件已销毁，作用同上                                         |

### 数据请求在 created 和 mouted 的区别

如何页面中的列表或者选项切换等依赖于请求的数据, 需要将请求放到`created`,这个时候 `created`生命周期 `dom`节点并未生成. 如果放到`mounted`里面, 这个时候`dom`已经生成, 替换接口请求的数据时页面可能会闪动
