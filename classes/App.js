/**
 * @class App
 */
export default class App {
  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
    <h3 class='title'>Tabs Horizontal</h3>
    <div class='tabs-item tabs-item--horizontal'>
      <ul class='tabs__header'>
        ${Array.from({ length: 3 }).map((_, i) => `
          <li data-control='${i + 1}' class='${i === 0 ? 'active' : ''}'>
            <button>Tab ${i + 1}</button>
          </li>
        `).join('')}
      </ul>
      <ul class='tabs__body'>
        ${Array.from({ length: 3 }).map((_, i) => `
          <li data-content='${i + 1}' class='${i === 0 ? 'active' : ''}'>
            <h3>Tab ${i + 1}</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, sequi!
          </li>
        `).join('')}
      </ul>
    </div>

    <h3 class='title'>Switchable Vertical</h3>
    <div class='tabs-item tabs-item--vertical'>
      <ul class='tabs__header'>
        ${Array.from({ length: 3 }).map((_, i) => `
          <li data-control='${i + 1}' class='${i === 0 ? 'active' : ''}'>
            <button>Tab ${i + 1}</button>
          </li>
        `).join('')}
      </ul>
      <ul class='tabs__body'>
        ${Array.from({ length: 3 }).map((_, i) => `
          <li data-content='${i + 1}' class='${i === 0 ? 'active' : ''}'>
            <h3>Tab ${i + 1}</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, sequi!
          </li>
        `).join('')}
      </ul>
    </div>
    `;

    const tabsH = document.querySelector('.tabs-item--horizontal');
    const tabsV = document.querySelector('.tabs-item--vertical');

    tabsV.querySelectorAll('[data-control]').forEach(el => el.addEventListener('click', this.onClick));
    tabsH.querySelectorAll('[data-control]').forEach(el => el.addEventListener('click', this.onClick));
  }

  onClick = ({ target: { dataset: { control }, parentElement: { parentElement } } }) => {
    parentElement.querySelectorAll('[data-control]').forEach(el => el.classList.remove('active'));
    parentElement.querySelectorAll('[data-content]').forEach(el => el.classList.remove('active'));

    parentElement.querySelector(`[data-control='${control}']`).classList.add('active');
    parentElement.querySelector(`[data-content='${control}']`).classList.add('active');
  };
}



