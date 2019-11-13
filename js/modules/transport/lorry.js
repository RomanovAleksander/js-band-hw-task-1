import {Transport} from './transport.js';

export default class Truck extends Transport{
  constructor(
    {id, model, producedYear, capacity, averageSpeed, licensePlate, typeOfGas}) {
    super(id, model, producedYear, capacity, averageSpeed);
    this.licensePlate = licensePlate;
    this.typeOfGas = typeOfGas;
  }

  showAverageSpeed() {
    console.log(`Average speed = ${this.averageSpeed}km.`);
  }
}
