// map,set,weakMap,weakSet
// Sets
var s = new Set();
s.add("hello")
  .add("goodbye")
  .add("hello");
s.size === 2;
s.has("hello") === true;

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;
console.log(m.size);

// Weak Maps 只能用对象（而不是基本数据类型）作为键,无法获得长度size
var wm = new WeakMap();
var s = {};
var ss = { name: 1 };
wm.set(s, "");

console.log(wm.get(s));
console.log(wm.p);

// Weak Sets 只能用来村存储对象
var ws = new WeakSet();
ws.add({ data: 42 }); //因为添加到ws的这个临时对象没有其他变量引用它，所以ws不会保存它的值，也就是说这次添加其实没有意思
console.log(ws.size);

console.log("------------------我是分割线---------------------");
// proxy 代理模式

//定义被侦听的目标对象
var engineer = { name: "Joe Sixpack", salary: 50 };

//定义处理程序

var interceptor = {
  set: function(target, property, value, receiver) {
    console.log(`${property} changed from ${target[property]} to ${value} `);
    target[property] = value;
  },
  get: function(target, property, receiver) {
    console.log(
      `${property} of ${JSON.stringify(target)} was got to be ${
        target[property]
      }`
    );
  }
};
//创建代理以进行侦听
engineer = new Proxy(engineer, interceptor);
//做一些改动来触发代理
engineer.salary = 60; //控制台输出：salary is changed to 60
let ccc = engineer.salary;

// 创建symbol
var key = Symbol("key");

function MyClass(privateData) {
  this[key] = privateData;
}

var c = new MyClass("hello");
console.log(key.valueOf());
console.log(c[key]);

// function f1() {
//   var n = 999;
//   return n;
// }

// var result = f1();
// console.log(result); // 999s
// var a = 0;
// eval("var a =1");
// console.log(a);
