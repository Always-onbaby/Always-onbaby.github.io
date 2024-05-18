const n=`### JS 中常用的设计模式

#### 工厂模式

用于创建对象，隐藏创建逻辑，使得代码更容易维护和拓展。常见的应用包括创建\`DOM\`元素、组件等。

\`\`\`javascript
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
    },
  };
}

const person1 = createPerson("Alice", 30);
console.log(person1.greet()); // 输出 "Hello, my name is Alice and I am 30 years old."
\`\`\`

#### 单例模式

确保一个类只有一个实例，并提供一个全局访问点。常见的用用包括全局状态管理、日志记录等。

\`\`\`javascript
const Singleton = (function () {
  let instance;

  function createInstance() {
    return {
      name: "Singleton Instance",
      greet: function () {
        return "Hello, I am a singleton instance.";
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // 输出 true

console.log(singletonInstance1.greet()); // 输出 "Hello, I am a singleton instance."
\`\`\`

#### 观察者模式

定义一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖它的对象都会得到通知并自动更新。常见的应用包括事件监听、数据绑定等。

\`\`\`javascript
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log(\`Received data: \${data}\`);
  }
}

const observable = new Observable();
const observer1 = new Observer();
const observer2 = new Observer();

observable.subscribe(observer1);
observable.subscribe(observer2);

observable.notify("Hello World"); // 输出 "Received data: Hello World"
\`\`\`

#### 模块模式

通过封装私有化变量和函数来实现模块化，防止全局作用域污染。常见应用包括封装工具函数、插件开发等。

#### 装饰着模式

动态的给对象添加新的功能，是继承的替代方案之一。常见应用包括\`UI\`组件的增强，日志记录等。

#### 策略模式

定义一系列算法，封装每个算法，并事它们可以相互转化。常见应用包括表单验证、算法排序等。
`;export{n as default};
