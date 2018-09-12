// 其实中间件就是一个有特殊格式的函数，这个logger的返回值就是中间件
function logger(loggerName) {
  return ({ dispatch, getState }) => next => action => {
    console.log("come in to " + loggerName);
    // 这里可以对action进行修改
    action.time = new Date().toLocaleString();
    // 可以获取当前的state和action
    console.log("before state");
    console.log(getState());

    console.log("action");
    console.log(action);
    // 也可以dispatch一个action
    // dispatch(anyAction)

    // next方法将调用下一个中间件，如果这个已经是最后一个中间件，那就会把action传给reducer处理
    next(action);
    console.log("leave" + loggerName);
  };
}

export default logger;
/**
 * applyMiddleware函数的参数是一个函数（f1，即中间件），f1会在action被dispatch前被调用并传入一个对象，
 * 这个对象只有两个方法：dispatch和getState（就是Store的dispatch和getState），
 * 这个f1的返回值必须是一个函数f2，这个函数f2也会被立刻执行并且传入一个参数next，
 * next是一个函数，参数是传入action，调用next时就会用传入的action去调用下一个中间件(这里可以对action进行修改)，
 * 如果没有下一个中间件了
 * 那么这个action就会被当做真正的action传递给dispatch，
 * 如果最后没有next一个action那么这个action就会被拦截，因此不会被dispatch，也就是实现了拦截action
 *
 * 中间件执行顺序 middleware1 -> middleware2 -> dispatch(action) -> middleware2 -> middleware1
 */
