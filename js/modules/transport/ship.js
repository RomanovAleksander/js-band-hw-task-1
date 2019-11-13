import {Transport} from './transport.js';

export default class Ship extends Transport{
  constructor(
    {id, model, producedYear, capacity, averageSpeed, name, countOfTeam}) {
    super(id, model, producedYear, capacity, averageSpeed);
    this.name = name;
    this.countOfTeam = countOfTeam;
  }

  showAverageSpeed() {
    console.log(`Average speed = ${this.averageSpeed}nm.`);
  }
}
