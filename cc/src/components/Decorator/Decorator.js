export default class Zyy {
  @readonly(false)
  aa() {
    return "It is aa";
  }
}

// function log(text) {
//   // 这个 target 在这里就是 MyClass 这个类
//   return function(target) {
//     console.log(target.prototype);
//     target.prototype.logger = () => `${text} ${target.name} 被调用`;
//   };
// }

//只读装饰器
function readonly(value) {
  return function(target, key, descriptor) {
    descriptor.writable = value;
    return descriptor;
  };
}
