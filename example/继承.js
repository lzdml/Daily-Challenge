function Person() {}
function Foo() {}

// 原型继承
Foo.prototype = new Person();
const foo = new Foo();
console.log("foo :>> ", foo);
console.log(
  "foo.__proto__ === Foo.prototype :>> ",
  foo.__proto__ === Foo.prototype
);
console.log("foo instanceof Foo :>> ", foo instanceof Foo);
console.log("foo instanceof Person :>> ", foo instanceof Person);
console.log(
  "Foo.prototype.__proto__ === Person.prototype :>> ",
  Foo.prototype.__proto__ === Person.prototype
);

console.log("foo instanceof Person :>> ", foo instanceof Person);

console.log("更改Foo.prototype指向");
Foo.prototype = {};
console.log("foo.__proto__ :>> ", foo.__proto__);

function myInstanceof(instance, constructor) {
  const prototype = constructor.prototype;
  const proto = instance.__proto__;

  while (true) {
    if (proto === null) {
      return false;
    }
    if (proto === prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
}

console.log(`-------------寄生式继承------------`);
function Father(name) {
  this.name = name;

  this.sayName = function () {
    console.log("this.name :>> ", this.name);
  };
}

Father.prototype.age = 19;

Father.prototype.sayAge = function () {
  console.log("this.age :>> ", this.age);
};

function Son(name) {
  Father.call(this, "Son props");
  this.name = name;
}

Son.prototype = Object.create(Father.prototype);
Son.prototype.constructor = Son;
const s1 = new Son("Jonah");
console.log("s1 :>> ", s1);
s1.sayName();
s1.sayAge();
