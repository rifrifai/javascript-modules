export class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi(name) {
    console.info(`Hi you ${name}, My name is ${this.name}`);
  }
}
