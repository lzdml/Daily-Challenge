在`React`中，如果是由`React`引发的事件处理（比如通过`onClick`引发的事件处理），调用`setState`不会同步更新`this.state`，除此之外的`setState`调用会同步执行`this.state` 。所谓“除此之外”，指的是`绕过React`通过`addEventListener`直接添加的事件处理函数，还有通过`setTimeout/setInterval`产生的异步调用。

原因： 在`React`的`setState`函数实现中，会根据一个变量`isBatchingUpdates`判断是直接更新`this.state`还是放到队列中回头再说，而`isBatchingUpdates`默认是false，也就表示setState会同步更新this.state，但是，有一个函数`batchedUpdates`，这个函数会把`isBatchingUpdates`修改为true，而当React在调用事件处理函数之前就会调用这个`batchedUpdates`，造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state。

注意： setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。