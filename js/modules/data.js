export default class Data {
  constructor() {
    this.transport = [];
    this.costs = [];
  }

  getItemsFromLocalStorage() {
    console.log(localStorage);
    if (localStorage.transport) {
      this.transport = JSON.parse(localStorage.getItem('transport'));
      this.transport.forEach(item => {
        this.renderItem(item);
      });
    }
    if (localStorage.costs) {
      this.costs = JSON.parse(localStorage.getItem('costs'));
      this.costs.forEach(item => {
        this.renderItem(item);
      });
    }
  }

  renderItem(item) {
    const transportsList = document.querySelector('.transport-list-header');
    const costsList = document.querySelector('.costs-list-header');
    const render = (item) => {
      let result = '';
      for (const i in item) {
        if (item.hasOwnProperty(i)) {
          result += `<div class="item-text"><span>${i}:</span> <i>${item[i]}</i></div>`
        }
      }
      return result;
    };

    if (item.costOfCargo) {
      costsList.insertAdjacentHTML('afterEnd', `
      <div class="list-item">
        ${render(item)}
      </div>
      `);
    } else {
      transportsList.insertAdjacentHTML('afterEnd', `
      <div class="list-item">
        <div class="item-text"><b>${item.type}</b></div>
        ${render(item)}
      </div>
      `);
    }
  }
}