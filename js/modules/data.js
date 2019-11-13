export default class Data{
  constructor() {
    this.transport = [];
    this.costs = [];
  }

  getItemsFromLocalStorage() {
    if (localStorage.transport) {
      this.transport = JSON.parse(localStorage.getItem('transports'));
      this.transport.forEach(item => {
        this.renderTransportItem(item);
      });
    }
    if (localStorage.costs) {
      this.costs = JSON.parse(localStorage.getItem('costs'));
      this.costs.forEach(item => {
        this.renderCostItem(item);
      });
    }
  }

  renderTransportItem(item) {
    const transportsList = document.querySelector('.transport-list-header');
    const isName = item.name ? item.name : item.licensePlate;
    const isCountOfTeam = item.countOfTeam ? item.countOfTeam : item.typeOfGas;

    transportsList.insertAdjacentHTML('afterEnd', `
    <div class="list-item">
      <div class="item-text"><b>${item.type}</b></div>
      <div class="item-text">Model: <i>${item.model}</i></div>
      <div class="item-text">${item.name ? 'Name: ' : 'License plate: '}<i>${isName}</i></div>
      <div class="item-text">Produced year: <i>${item.producedYear}</i></div>
      <div class="item-text">Capacity: <i>${item.capacity}</i></div>
      <div class="item-text">Average speed: <i>${item.averageSpeed}</i></div>
      <div class="item-text">${item.countOfTeam ? 'Count of team: ' : 'Type of Gas: '} <i>${isCountOfTeam}</i></div>
    </div>
  `);
  }

  renderCostItem(item) {
    const costsList = document.querySelector('.costs-list-header');

    costsList.insertAdjacentHTML('afterEnd', `
    <div class="list-item">
      <div class="item-text">Model: <i>${item.model}</i></div>
      <div class="item-text">Cost by 1 kg of cargo: <i>${item.costOfCargo}</i></div>
      <div class="item-text">Cost by 1 km of distance: <i>${item.costOFDistance}</i></div>
    </div>
  `);
  }
}