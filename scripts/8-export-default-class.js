export default class {
  constructor(name) {
    this.name = name;
  }

  sayKabar(name) {
    console.info(`Apa kabar ${name}, Namaku ${this.name}`);
  }
}
