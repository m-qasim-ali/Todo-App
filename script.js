const darkMode = {
  bgColor: 'rgb(40, 40, 40)',
  bgColorHover: 'rgb(92, 92, 92)',
  outlineBorderColor: 'rgba(248, 248, 248, 0.555)',
  fontColor: 'rgb(231, 231, 231)',
  bodyColor: 'rgb(30, 30, 30)',
};

const lightMode = {
  bgColor: 'rgb(255, 255, 255)',
  bgColorHover: 'lightgray',
  outlineBorderColor: 'gray',
  fontColor: 'black',
  bodyColor: 'white',
};

const tickIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-7 h-7 icon-list">
<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
`;

const wrenchIcon = `<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="w-7 h-7 icon-list"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
/>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M4.867 19.125h.008v.008h-.008v-.008z"
/>
</svg>`;

const defaultData = {
  cat0: {
    title: 'Super fun list name',
    nextItemNumber: 2,
    items: {
      cat0item0: 'This is entry test number two',
      cat0item1: 'You can edit and move entries',
    },
  },
  cat1: {
    title: 'Try',
    nextItemNumber: 3,
    items: {
      cat1item0: 'Using',
      cat1item1: 'Sort feature',
      cat1item2: 'On this list',
      cat2item3: 'Check links at the bottom to check out more of my projects',
    },
  },
  cat2: {
    title: 'Third list, wow',
    nextItemNumber: 2,
    items: {
      cat2item0: 'You can create as many lists as you like',
      cat2item1: 'Lists are stored in your browser memory :O',
    },
  },
};

let data = defaultData;
let nextCategory = 3;

// DOM elements
const themeBtn = document.getElementById('theme');
const addBtn = document.getElementById('add');
const settingBtn = document.getElementById('setting');
const main = document.getElementById('main');
const catForm = document.querySelector('#catForm');
const itemForms = document.getElementsByClassName('itemForm');
const catFormInput = document.querySelector('#catForm input');
const delCat = document.getElementsByClassName('delCat');
const delItem = document.getElementsByClassName('delItem');
const updateItems = document.getElementsByClassName('updateItem');
const sort_items = document.getElementsByClassName('sort');
const restoreList = document.getElementById("restoreList");
const removeList = document.getElementById("removeList");

// function handler
let theme = 'dark';
const updateTheme = () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  const themeValues = theme === 'dark' ? darkMode : lightMode;
  const cssVariables = [
    '--bgColor',
    '--bgColorHover',
    '--outlineBorderColor',
    '--fontColor',
    '--bodyColor',
  ];
  let i = 0;
  for (let mode in themeValues) {
    document.documentElement.style.setProperty(
      cssVariables[i],
      themeValues[mode]
    );
    i++;
  }
};

const addNewCategory = (e) => {
  e.preventDefault();
  let title = catFormInput.value;
  const id = `cat${nextCategory}`;
  data[id] = {
    title,
    nextItemNumber: 0,
    items: {},
  };
  const html = `<div
  class="basis-full md:basis-[48%] flex-auto py-10 px-7 list-box flex flex-col gap-4 cat" id=${id}
>
  <div class="list-header flex flex-row flex-start gap-4">
    <h2>${title}</h2>
    <button class="btn-list delCat">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-7 h-7 icon-list"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
  </div>

  <div class="inputBox flex gap-6">
    <form action="" class="flex-1 flex gap-4 itemForm">
      <input
        class="flex-1 list-entry p-2 px-4"
        placeholder="New list entry"
        type="text"
      />
      <button type="submit" class="list-icon-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 256 256"
          class="icon"
        >
          <path
            d="M144.49,136.49l-40,40a12,12,0,0,1-17-17L107,140H24a12,12,0,0,1,0-24h83L87.51,96.49a12,12,0,0,1,17-17l40,40A12,12,0,0,1,144.49,136.49ZM192,28H136a12,12,0,0,0,0,24h52V204H136a12,12,0,0,0,0,24h56a20,20,0,0,0,20-20V48A20,20,0,0,0,192,28Z"
          ></path>
        </svg>
      </button>
    </form>
    <button class="list-icon-btn sort">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" class="icon"><path d="M128,128a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24h68A12,12,0,0,1,128,128ZM48,76H180a12,12,0,0,0,0-24H48a12,12,0,0,0,0,24Zm52,104H48a12,12,0,0,0,0,24h52a12,12,0,0,0,0-24Zm132.49-20.49a12,12,0,0,0-17,0L196,179V112a12,12,0,0,0-24,0v67l-19.51-19.52a12,12,0,0,0-17,17l40,40a12,12,0,0,0,17,0l40-40A12,12,0,0,0,232.49,159.51Z"></path></svg>
    </button>
  </div>
  <div class="flex flex-col gap-5 divide-y items-container">
    
  </div>
</div>`;

  catFormInput.value = "";
  main.insertAdjacentHTML('afterbegin', html);
  registerCatEvents();
  nextCategory++;
  registerItemForms();
  registerSortEvents();
};

const AddNewItem = (e) => {
  e.preventDefault();
  const inputField = e.target.querySelector('input');
  const cat = e.target.closest('.cat');
  const id = `${cat.id}item${data[cat.id].nextItemNumber}`;
  data[cat.id].items[id] = inputField.value;
  data[cat.id].nextItemNumber = data[cat.id].nextItemNumber + 1;
  const item = `<div class="item flex items-center gap-4 py-2" id="${id}">
  <div class="data flex-1">
    ${inputField.value}
  </div>
  <button class="btn-list updateItem" data-icon="wrench">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-7 h-7 icon-list"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.867 19.125h.008v.008h-.008v-.008z"
      />
    </svg>
  </button>
  <button class="btn-list delItem">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-7 h-7 icon-list"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  </button>
</div>`;


  inputField.value = "";
  const container = cat.querySelector('.items-container');
  container.insertAdjacentHTML('afterbegin', item);
  registerItemDelEvents();
  registerItemUpdateEvents();
};

const updateItem = (e) => {
  e.preventDefault();
  const iconContainer = e.target.closest(".updateItem");
  const itemField = iconContainer.closest(".item").firstElementChild;
  let toggleValued = null;
  if (iconContainer.dataset.icon == "wrench") {
    iconContainer.dataset.icon = "tick";
    iconContainer.innerHTML = tickIcon;
    toggleValued = `<input type="text" class="data flex-1 p-2 px-4 item-input" value="${itemField.innerHTML.trim()}" />`
    itemField.remove();
  }
  else {
    // console.log(e.target.closest('.cat'));
    data[e.target.closest('.cat').id].items[e.target.closest('.item').id] = itemField.value.trim();
    console.log(data);
    iconContainer.dataset.icon = "wrench";
    iconContainer.innerHTML = wrenchIcon;
    toggleValued = `<div class="data flex-1">${itemField.value.trim()}</div>`
  }
  itemField.remove();
  iconContainer.closest(".item").insertAdjacentHTML('afterbegin', toggleValued);
};

const sortItems = (e) => {
  e.preventDefault();
  const itemsContainer = e.target.closest(".cat").querySelector('.items-container');
  const items = itemsContainer.children;
  let html = ``
  for (let i = items.length - 1; i >= 0; i--) {
    html += items[i].outerHTML;
  }
  itemsContainer.innerHTML = html;
  registerItemDelEvents();
  registerItemUpdateEvents();
}

const deleteCat = (e) => {
  e.preventDefault();
  const cat = e.target.closest('.cat').id;
  delete data[cat];
  document.getElementById(cat).remove();
};

const deleteItem = (e) => {
  e.preventDefault();
  const item = e.target.closest('.item');
  const cat = e.target.closest('.cat');
  delete data[cat.id].items[item.id];
  document.getElementById(item.id).remove();
};

const registerCatEvents = () => {
  for (let i = 0; i < delCat.length; i++) {
    delCat[i].addEventListener('click', deleteCat);
  }
};

const registerSortEvents = () => {
  for (let i = 0; i < sort_items.length; i++) {
    sort_items[i].addEventListener('click', sortItems);
  }
};

const registerItemForms = () => {
  for (let i = 0; i < itemForms.length; i++) {
    itemForms[i].addEventListener('submit', AddNewItem);
  }
};

const registerItemDelEvents = () => {
  for (let i = 0; i < delItem.length; i++) {
    delItem[i].addEventListener('click', deleteItem);
  }
};

const registerItemUpdateEvents = () => {
  for (let i = 0; i < updateItems.length; i++) {
    updateItems[i].addEventListener('click', updateItem);
  }
};

const showCategories = () => {
  let html = ``;
  let itemsList = ``;
  for (let cat in data) {
    for (let item in data[cat].items) {
      itemsList += `<div class="item flex items-center gap-2 sm:gap-4 py-2" id="${item}">
          <div class="data flex-1">
            ${data[cat].items[item]}
          </div>
          <button class="btn-list updateItem" data-icon="wrench">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 icon-list"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
          </button>
          <button class="btn-list delItem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 icon-list"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>`;
    }

    html += `<div
    class="basis-full md:basis-[48%] flex-auto py-5 sm:py-10 px-4 sm:px-7 list-box flex flex-col gap-4 cat" id=${cat}
  >
    <div class="list-header flex flex-row flex-start gap-4">
      <h2>${data[cat].title}</h2>
      <button class="btn-list delCat">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7 icon-list"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>

    <div class="inputBox flex gap-2 sm:gap-6">
      <form action="" class="flex-1 flex gap-2 sm:gap-4 itemForm">
        <input
          class="flex-1 list-entry p-2 px-4"
          placeholder="New list entry"
          type="text"
        />
        <button type="submit" class="list-icon-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 256 256"
            class="icon"
          >
            <path
              d="M144.49,136.49l-40,40a12,12,0,0,1-17-17L107,140H24a12,12,0,0,1,0-24h83L87.51,96.49a12,12,0,0,1,17-17l40,40A12,12,0,0,1,144.49,136.49ZM192,28H136a12,12,0,0,0,0,24h52V204H136a12,12,0,0,0,0,24h56a20,20,0,0,0,20-20V48A20,20,0,0,0,192,28Z"
            ></path>
          </svg>
        </button>
      </form>
      <button class="list-icon-btn sort">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" class="icon"><path d="M128,128a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24h68A12,12,0,0,1,128,128ZM48,76H180a12,12,0,0,0,0-24H48a12,12,0,0,0,0,24Zm52,104H48a12,12,0,0,0,0,24h52a12,12,0,0,0,0-24Zm132.49-20.49a12,12,0,0,0-17,0L196,179V112a12,12,0,0,0-24,0v67l-19.51-19.52a12,12,0,0,0-17,17l40,40a12,12,0,0,0,17,0l40-40A12,12,0,0,0,232.49,159.51Z"></path></svg>
      </button>
    </div>
    <div class="flex flex-col gap-5 divide-y items-container">
      ${itemsList}
    </div>
  </div>`;
    itemsList = ``;
  }

  main.innerHTML = html;
};

// Adding events

window.addEventListener("load", () => {
  let localData = localStorage.getItem("data");
  if (localData) {
    data = JSON.parse(localData);
    console.log(data);
  }
  themeBtn.addEventListener('click', updateTheme);
  showCategories();
  catForm.addEventListener('submit', addNewCategory);
  registerCatEvents();
  registerItemDelEvents();
  registerItemForms();
  registerItemUpdateEvents();
  registerSortEvents();
  restoreList.addEventListener('click', (e) => {
    e.preventDefault();
    data = defaultData;
    showCategories();
  })
  removeList.addEventListener('click', (e) => {
    e.preventDefault();
    data = {}
    showCategories();
  })
})


window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  localStorage.setItem('data', JSON.stringify(data));
});
