let fruit = new Apple();
let adam = new Human("Adam", 1, 70);
let eva = new Human("Eva", 0, 45);
let turn = true;

while (fruit.weight > 0) {
  if (turn) {
    document.write("Adam took a bite. <br>");
    adam.eat(fruit);
  } else {
    document.write("Eva took a bite. <br>");
    eva.eat(fruit);
  }
  let s = "";
  s += `Apple weight: ${fruit.weight} <br>`;
  s += `${adam.name}'s weight: ${adam.weight} <br>`;
  s += `${eva.name}'s weight: ${eva.weight} <br>`;
  s += "<br>";
  document.write(s);
  turn = !turn;
}
