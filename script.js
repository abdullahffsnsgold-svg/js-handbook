function method(name, text, args, returns, example) {
  return { name, text, args, returns, example };
}


const BASE_TOPICS = {
  "Циклы": {
    "description": "Повторное выполнение кода.",
    "methods": [
      { "name": "for", "text": "Классический цикл.", "args": "init; condition; step", "returns": "—", "example": "for(let i=0;i<3;i++){}" },
      { "name": "while", "text": "Пока условие true.", "args": "condition", "returns": "—", "example": "while(x<5){}" },
      { "name": "do...while", "text": "Минимум один раз.", "args": "condition", "returns": "—", "example": "do{}while(x<5)" },
      { "name": "for...of", "text": "Перебор значений.", "args": "iterable", "returns": "value", "example": "for(const v of arr){}" },
      { "name": "for...in", "text": "Перебор ключей.", "args": "object", "returns": "key", "example": "for(const k in obj){}" },
      { "name": "break", "text": "Прерывает цикл.", "args": "—", "returns": "—", "example": "break;" },
      { "name": "continue", "text": "Пропускает итерацию.", "args": "—", "returns": "—", "example": "continue;" }
    ]
  },
  "Функции": {
    "description": "Переиспользуемый код.",
    "methods": [
      { "name": "Function declaration", "text": "Обычное объявление.", "args": "params", "returns": "result", "example": "function sum(a,b){}" },
      { "name": "Function expression", "text": "Функция в переменной.", "args": "params", "returns": "result", "example": "const f=function(){}" },
      { "name": "Arrow function", "text": "Короткий синтаксис.", "args": "params", "returns": "result", "example": "()=>{}" },
      { "name": "Default params", "text": "Значения по умолчанию.", "args": "params", "returns": "value", "example": "function f(a=1){}" },
      { "name": "Rest params", "text": "Собирает аргументы.", "args": "...args", "returns": "array", "example": "function f(...args){}" },
      { "name": "this", "text": "Указывает на контекст вызова функции.", "args": "—", "returns": "Значение контекста", "example": "const user = {\n  name: \"Alex\",\n  show() {\n    console.log(this.name);\n  }\n};\nuser.show();" },
      { "name": "Function.call()", "text": "Вызывает функцию сразу.", "args": "thisArg, arg1, ...", "returns": "Результат", "example": "say.call({name:'Alex'}, 18);" },
      { "name": "Function.apply()", "text": "Аргументы передаются массивом.", "args": "thisArg, [args]", "returns": "Результат", "example": "sum.apply(null, [2, 3]);" },
      { "name": "Function.bind()", "text": "Возвращает новую функцию с привязанным this.", "args": "thisArg, args", "returns": "Новая функция", "example": "const f = hello.bind({name:'Alex'});" }
    ]
  },
  "Объекты": {
    "description": "Набор свойств ключ: значение.",
    "methods": [
      { "name": "Что такое объект", "text": "Хранит данные в виде пар ключ и значение.", "args": "key: value", "returns": "object", "example": "const user = { name: 'Alex' };" },
      { "name": "Object.keys()", "text": "Массив всех ключей.", "args": "obj", "returns": "array", "example": "Object.keys(obj);" },
      { "name": "Object.values()", "text": "Массив всех значений.", "args": "obj", "returns": "array", "example": "Object.values(obj);" },
      { "name": "Object.entries()", "text": "Массив пар [ключ, значение].", "args": "obj", "returns": "array", "example": "Object.entries(obj);" },
      { "name": "Object.assign()", "text": "Копирует свойства.", "args": "target, ...sources", "returns": "new obj", "example": "Object.assign({}, a);" },
      { "name": "Object.freeze()", "text": "Замораживает объект.", "args": "obj", "returns": "obj", "example": "Object.freeze(o);" },
      { "name": "hasOwnProperty()", "text": "Проверка собственного свойства.", "args": "key", "returns": "bool", "example": "o.hasOwnProperty('n');" }
    ]
  },
  "Массивы": {
    "description": "Упорядоченный список данных.",
    "methods": [
      { "name": "Array.map()", "text": "Трансформирует массив.", "args": "callback", "returns": "new arr", "example": "arr.map(x => x*2)" },
      { "name": "Array.push()", "text": "Добавляет в конец.", "args": "item", "returns": "length", "example": "arr.push(1)" },
      { "name": "Array.pop()", "text": "Удаляет с конца.", "args": "—", "returns": "item", "example": "arr.pop()" },
      { "name": "Array.shift()", "text": "Удаляет первый.", "args": "—", "returns": "item", "example": "arr.shift()" },
      { "name": "Array.unshift()", "text": "Добавляет в начало.", "args": "item", "returns": "length", "example": "arr.unshift(0)" },
      { "name": "Array.filter()", "text": "Фильтрует элементы.", "args": "callback", "returns": "new arr", "example": "arr.filter(x => x > 0)" },
      { "name": "Array.reduce()", "text": "Сводит к одному значению.", "args": "callback, init", "returns": "result", "example": "arr.reduce((s, x) => s + x, 0)" },
      { "name": "Array.splice()", "text": "Удаляет/заменяет элементы.", "args": "start, count, items", "returns": "deleted", "example": "arr.splice(1, 1)" },
      { "name": "Array.includes()", "text": "Проверка наличия.", "args": "val", "returns": "bool", "example": "arr.includes(1)" }
    ]
  },
  "Map и Set": {
    "description": "Коллекции Map и Set.",
    "methods": [
      { "name": "new Map()", "text": "Коллекция ключ-значение (ключ любой тип).", "args": "iterable", "returns": "Map", "example": "const m = new Map();" },
      { "name": "map.set()", "text": "Добавить/обновить.", "args": "key, val", "returns": "Map", "example": "m.set('a', 1);" },
      { "name": "new Set()", "text": "Коллекция уникальных значений.", "args": "iterable", "returns": "Set", "example": "const s = new Set([1,2,2]);" },
      { "name": "set.add()", "text": "Добавить значение.", "args": "val", "returns": "Set", "example": "s.add(3);" }
    ]
  },
  "New Date": {
    "description": "Работа с временем.",
    "methods": [
      { "name": "new Date()", "text": "Создает объект даты.", "args": "params", "returns": "Date", "example": "new Date();" },
      { "name": "date.getTime()", "text": "Мс с 1970 года.", "args": "—", "returns": "number", "example": "d.getTime();" },
      { "name": "date.getFullYear()", "text": "Получить год.", "args": "—", "returns": "year", "example": "d.getFullYear();" },
      { "name": "date.toISOString()", "text": "Формат ISO.", "args": "—", "returns": "string", "example": "d.toISOString();" }
    ]
  },
  "JSON": {
    "description": "Формат данных JSON.",
    "methods": [
      { "name": "JSON.stringify", "text": "Объект -> Строка.", "args": "obj", "returns": "string", "example": "JSON.stringify(o);" },
      { "name": "JSON.parse", "text": "Строка -> Объект.", "args": "string", "returns": "obj", "example": "JSON.parse(s);" }
    ]
  },
  "String/Number": {
    "description": "Примитивные типы данных.",
    "methods": [
      { "name": "String.length", "text": "Длина строки.", "args": "property", "returns": "number", "example": "'hi'.length;" },
      { "name": "String.slice()", "text": "Вырезает часть.", "args": "start, end", "returns": "string", "example": "'hello'.slice(0,2);" },
      { "name": "Number.toFixed()", "text": "Знаков после запятой.", "args": "digits", "returns": "string", "example": "3.14.toFixed(1);" },
      { "name": "Number.parseInt()", "text": "В целое число.", "args": "str", "returns": "int", "example": "parseInt('10px');" }
    ]
  },
  "ООП": {
    "description": "Объектно-ориентированное программирование.",
    "methods": [
      { "name": "class", "text": "Шаблон объекта.", "args": "name", "returns": "class", "example": "class User { constructor(n){this.n=n} }" },
      { "name": "extends", "text": "Наследование классов.", "args": "parent", "returns": "class", "example": "class Dog extends Animal {}" },
      { "name": "super", "text": "Вызов родителя.", "args": "args", "returns": "—", "example": "super(props);" }
    ]
  },
  "Деструктуризация": {
    "description": "Извлечение данных.",
    "methods": [
      { "name": "Объекты", "text": "Достать ключи.", "args": "{ key }", "returns": "vars", "example": "const {name} = user;" },
      { "name": "Массивы", "text": "Достать по порядку.", "args": "[a, b]", "returns": "vars", "example": "const [x, y] = [1, 2];" }
    ]
  },
  "Math": {
    "description": "Математика.",
    "methods": [
      { "name": "Math.random()", "text": "Случайное 0-1.", "args": "—", "returns": "float", "example": "Math.random();" },
      { "name": "Math.floor()", "text": "Вниз.", "args": "num", "returns": "int", "example": "Math.floor(4.9);" },
      { "name": "Math.max()", "text": "Наибольшее.", "args": "...nums", "returns": "num", "example": "Math.max(1, 5, 2);" }
    ]
  },
  "Базовые концепци js": {
    "description": "Удобные операции (Spread/Rest).",
    "methods": [
      { "name": "Spread (...)", "text": "Разворачивает массив/объект.", "args": "arr/obj", "returns": "copy", "example": "const copy = [...arr];" },
      { "name": "Rest (...)", "text": "Собирает остатки.", "args": "...args", "returns": "array", "example": "function f(...rest) {}" }
    ]
  }
};


const userStorage = JSON.parse(localStorage.getItem("topics")) || {};

const topics = { ...BASE_TOPICS, ...userStorage };

function save() {
  const customData = {};
  Object.keys(topics).forEach(key => {
    
    if (!BASE_TOPICS[key]) {
      customData[key] = topics[key];
    }
  });
  localStorage.setItem("topics", JSON.stringify(customData));
}

// В функции удаления (внутри render или deleteTopic) используй это:
function deleteTopic(topicName) {
  if (BASE_TOPICS[topicName]) {
    alert("Эту системную категорию нельзя удалить!");
    return;
  }
  if (confirm(`Удалить "${topicName}"?`)) {
    delete topics[topicName];
    save();
    render();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const nav = document.getElementById("nav-list");
  const search = document.getElementById("smart-search");
  const hint = document.getElementById("search-hint");
  const backBtn = document.getElementById("back-btn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuBtn = document.getElementById("menu-trigger");



  function save() {
    localStorage.setItem("topics", JSON.stringify(topics));
  }


  document.getElementById("add-btn").onclick = () => {
    const modalContent = document.getElementById("modal-content");

    if (!active) {
      
      modalContent.innerHTML = `
            <h2 style="margin-bottom: 20px;">Новая категория</h2>
            <input id="new-topic-name" class="form-input" placeholder="Название темы (например, Массивы)">
            <button id="save-topic" class="save-form-btn">Создать тему</button>
        `;

      document.getElementById("save-topic").onclick = () => {
        const name = document.getElementById("new-topic-name").value.trim();
        if (name) {
          topics[name] = { methods: [] };
          save();
          render();
          document.getElementById("modal").classList.add("hidden");
        }
      };
    } else {
    
      modalContent.innerHTML = `
            <h2 style="margin-bottom: 20px;">Добавить в "${active}"</h2>
            <input id="m-name" class="form-input" placeholder="Название (например, map)">
            <input id="m-text" class="form-input" placeholder="Описание">
            <input id="m-args" class="form-input" placeholder="Принимает">
            <input id="m-returns" class="form-input" placeholder="Возвращает">
            <textarea id="m-code" class="form-input" style="height:100px; font-family:Fira Code" placeholder="Пример кода"></textarea>
            <button id="save-method" class="save-form-btn">Добавить метод</button>
        `;

      document.getElementById("save-method").onclick = () => {
        const n = document.getElementById("m-name").value.trim();
        const t = document.getElementById("m-text").value;
        const a = document.getElementById("m-args").value;
        const r = document.getElementById("m-returns").value;
        const c = document.getElementById("m-code").value;

        if (n) {
          topics[active].methods.push(method(n, t, a, r, c));
          save();
          render();
          document.getElementById("modal").classList.add("hidden");
        }
      };
    }
    document.getElementById("modal").classList.remove("hidden");
  };

  let active = null;

  function render(filter = "") {
    grid.innerHTML = "";
    if (!active) {
      hint.textContent = "Категории";
      backBtn.classList.add("hidden");
      initNav(); 
      Object.keys(topics).forEach(t => {
        if (t.toLowerCase().includes(filter.toLowerCase())) {
          createCard(t, () => select(t));
        }
      });
    } else {
      hint.textContent = active;
      backBtn.classList.remove("hidden");
      topics[active].methods.forEach(m => {
        if (m.name.toLowerCase().includes(filter.toLowerCase())) {
          createCard(m.name, () => showModal(m));
        }
      });
    }
  }


  function createCard(text, cb) {
    const c = document.createElement("div");
    c.className = "card";

    
    const span = document.createElement("span");
    span.textContent = text;
    c.appendChild(span);

    
    if (!active) {
      const delBtn = document.createElement("button");
      delBtn.className = "delete-btn";
      delBtn.innerHTML = "×";
      delBtn.onclick = (e) => {
        e.stopPropagation(); 
        deleteTopic(text);
      };
      c.appendChild(delBtn);
    }

    c.onclick = cb;
    grid.appendChild(c);
  }


  function deleteTopic(topicName) {
    if (confirm(`Вы уверены, что хотите удалить тему "${topicName}"?`)) {
    
      delete topics[topicName];

     
      localStorage.setItem("topics", JSON.stringify(topics));

      
      render();
    }
  }

  function initNav() {
    nav.innerHTML = "";
    Object.keys(topics).forEach(key => {
      const n = document.createElement("div");
      n.className = `nav-item ${active === key ? 'active' : ''}`;
      n.textContent = key;
      n.onclick = () => select(key);
      nav.appendChild(n);
    });
  }

  function select(t) {
    active = t;
    document.getElementById("view-title").textContent = t;
    closeSidebar();
    search.value = "";
    render();
  }

  function showModal(m) {
    document.getElementById("modal-content").innerHTML = `
            <h2 style="margin-bottom: 10px;">${m.name}</h2>
            <p style="opacity: .7; margin-bottom: 20px; line-height: 1.5;">${m.text}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px;">
                <div style="flex: 1; min-width: 140px; padding: 12px; background: var(--glass); border-radius: 12px; border: 1px solid var(--border);">
                    <small style="color: var(--accent); font-weight: 800; text-transform: uppercase; font-size: 10px;">Принимает</small>
                    <div style="font-size: 13px; margin-top: 4px;">${m.args}</div>
                </div>
                <div style="flex: 1; min-width: 140px; padding: 12px; background: var(--glass); border-radius: 12px; border: 1px solid var(--border);">
                    <small style="color: var(--accent); font-weight: 800; text-transform: uppercase; font-size: 10px;">Возвращает</small>
                    <div style="font-size: 13px; margin-top: 4px;">${m.returns}</div>
                </div>
            </div>
            <pre style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 15px; overflow-x: auto; color: #a5ffce; font-size: 13px; border: 1px solid var(--border);">${m.example}</pre>
        `;
    document.getElementById("modal").classList.remove("hidden");
  }

  
  function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.remove("hidden");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.add("hidden");
  }

  search.oninput = e => render(e.target.value);

  backBtn.onclick = () => {
    active = null;
    document.getElementById("view-title").textContent = "Добро пожаловать";
    render();
  };

  menuBtn.onclick = openSidebar;
  overlay.onclick = closeSidebar;

  document.getElementById("theme-toggle").onclick = () => document.body.classList.toggle("light-theme");
  document.getElementById("close-modal").onclick = () => document.getElementById("modal").classList.add("hidden");

  window.onclick = e => {
    if (e.target.id === "modal") document.getElementById("modal").classList.add("hidden");
  };

  render();
});

console.log(localStorage);

