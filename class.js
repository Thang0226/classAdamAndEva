class Apple {
  constructor() {
    this.weight = 10;
  }

  decrease() {
    this.weight--;
  }

  isEmpty() {
    return this.weight <= 0;
  }

  getWeight() {
    return this.weight;
  }
}

class Human {
  constructor(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
  }

  isMale() {
    // gender = 1 if is Male, = 0 if is Female
    if (this.gender == 1) return true;
    else return false;
  }

  setGender(boolean) {
    if (boolean) this.gender = 1;
    else this.gender = 0;
  }

  checkApple(apple) {
    if (apple.weight > 0) return true;
    else return false;
  }

  eat(apple) {
    apple.weight--;
    this.weight++;
  }

  say(string) {
    console.log(string);
  }

  getName() {
    return this.name;
  }

  setName(string) {
    this.name = string;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(num) {
    this.weight = num;
  }
}
