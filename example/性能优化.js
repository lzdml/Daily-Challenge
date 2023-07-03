const ipt = document.getElementById("ipt");

function debounce(fn, daley = 1000) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, daley);
  };
}

function onInput(e) {
  const value = e.target.value;
  console.log("value :>> ", value);
}
const d_onInput = debounce(onInput, 1000);
ipt.oninput = d_onInput;

/**
 * 节流函数
 * @param {Function} callback - 需要节流的函数
 * @param {number} delay - 节流的时间间隔（毫秒）
 * @returns {Function} - 节流后的函数
 */
function throttle(callback, delay) {
  let timerId; // 定时器ID
  let lastTime = 0; // 上次触发回调的时间

  return function (...args) {
    const currentTime = Date.now(); // 当前时间

    if (currentTime - lastTime >= delay) {
      // 如果距离上次触发回调的时间超过了设定的时间间隔
      callback.apply(this, args); // 执行回调函数
      lastTime = currentTime; // 更新上次触发回调的时间
    } else {
      // 如果距离上次触发回调的时间未超过设定的时间间隔
      clearTimeout(timerId); // 清除定时器

      timerId = setTimeout(() => {
        callback.apply(this, args); // 延迟后执行回调函数
        lastTime = Date.now(); // 更新上次触发回调的时间
      }, delay);
    }
  };
}

function handleThrottle(e) {
  console.log(e);
}
const d_onResize = throttle(handleThrottle, 500);
window.onresize = d_onResize;
