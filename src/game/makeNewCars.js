import playGame from './playGame.js';

function Car(name) {
  this.name = name;
}

export default function makeNewCars(carNamesArray) {
  const carList = carNamesArray.map((name) => new Car(name));

  playGame(carList);
}
