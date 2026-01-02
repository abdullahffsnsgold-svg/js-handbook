function method(name, text, args, returns, example) {
  return { name, text, args, returns, example };
}

// Твои ПОЛНЫЕ "вшитые" данные, которые теперь в коде навсегда
const BASE_TOPICS = {
  "Циклы": {
    "description": "Повторное выполнение кода.",
    "methods": [
      { "name": "for", "text": "Цикл for используется для выролнения блока кода пока условие истино.", "args": "init; condition; step", "returns": "Мы его использем когда знаем сколько раз его нужно повторять", "example": "for(let i=0;i<3;i++){}" },
      { "name": "while", "text": "Цикл While выполняет блок кода пока условие истино.", "args": "condition", "returns": "Мы его используем когда не знаем сколько раз нужно его повторять", "example": "while(x<5){}" },
      { "name": "do...while", "text": "Цикл do...While сначала выполняет блок кода потом проверяет условие.", "args": "condition", "returns": "Сработает один раз даже если условие ложно", "example": "do{}while(x<5)" },
      { "name": "for...of", "text": "Цикл for..of оно для перебора элементов в коллекций таких как массив.", "args": "Итератор", "returns": "Элементы из массива", "example": "for(let v of arr){}" },
      { "name": "for...in", "text": "Перебор ключей в объкте.", "args": "object", "returns": "key", "example": "for(const k in obj){}" },
      { "name": "break", "text": "Полностю прекрашает дальнейшее выполнение цикла.", "args": "—", "returns": "—", "example": "break;" },
      { "name": "continue", "text": "Остановливает выполнение этой итераци и передает к следующему.", "args": "—", "returns": "—", "example": "continue;" }
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
      { "name": "Function.bind()", "text": "Возвращает новую функцию с привязанным this.", "args": "thisArg, args", "returns": "Новая функция", "example": "const f = hello.bind({name:'Alex'});" },
      { "name": "Рекурсивные функции", "text": "Функци которые вызывают сами себя", "args": "__", "returns": "Тело функци" },
    ]
  },
  "Объекты": {
    "description": "Объекты в JavaScript — это коллекции пар 'ключ-значение'.",
    "methods": [
      {
        "name": "Создание объектов",
        "text": "Объекты можно создавать литералом `{}` или конструктором `new Object()`. Позволяют хранить связанные данные и функции.",
        "args": "ключ: значение",
        "returns": "новый объект",
        "example": "const obj = { name: 'Alex' };"
      },
      {
        "name": "Object.keys()",
        "text": "Возвращает массив строк, содержащих имена всех собственных перечисляемых свойств объекта. Полезен для перебора свойств.",
        "args": "целевой объект (obj)",
        "returns": "массив ключей [str, str]",
        "example": "Object.keys(user);"
      },
      {
        "name": "Object.values()",
        "text": "Возвращает массив значений всех собственных перечисляемых свойств объекта. Позволяет получить данные без ключей.",
        "args": "целевой объект (obj)",
        "returns": "массив значений [val, val]",
        "example": "Object.values(user);"
      },
      {
        "name": "Object.entries()",
        "text": "Возвращает массив массивов, где каждый внутренний массив содержит ключ и значение. Удобно для перебора пар.",
        "args": "целевой объект (obj)",
        "returns": "массив пар [[ключ, значение]]",
        "example": "Object.entries(user);"
      },
      {
        "name": "Object.assign()",
        "text": "Копирует значения всех собственных перечисляемых свойств из одного или нескольких исходных объектов в целевой.",
        "args": "куда (target), откуда (...sources)",
        "returns": "измененный целевой объект",
        "example": "Object.assign({}, a, b);"
      },
      {
        "name": "Object.freeze()",
        "text": "Предотвращает изменение существующих свойств и добавление новых. Объект становится 'замороженным'.",
        "args": "объект (obj)",
        "returns": "замороженный объект",
        "example": "Object.freeze(user);"
      },
      {
        "name": "Object.seal()",
        "text": "Предотвращает добавление новых свойств и делает существующие ненастраиваемыми. Значения можно менять, но не удалять.",
        "args": "объект (obj)",
        "returns": "запечатанный объект",
        "example": "Object.seal(user);"
      },
      {
        "name": "Object.hasOwnProperty()",
        "text": "Проверяет, есть ли у объекта собственное (не унаследованное) свойство с указанным именем.",
        "args": "имя свойства (key)",
        "returns": "true если есть, иначе false",
        "example": "obj.hasOwnProperty('name');"
      }
    ]
  },
  "Массивы": {
    "description": "Упорядоченный список данных.",
    "methods": [
      { "name": "Создание массивов", "text": "Массивы можно создавать литералом `[1, 2, 3]` или конструктором `new Array(3)` (создает массив с 3 пустыми элементами).", "args": "элементы или длина", "returns": "новый массив", "example": "const arr = [1, 2, 3];" },
      { "name": "Array.isArray()", "text": "Проверяет, является ли переданное значение массивом.", "args": "значение", "returns": "true если массив, иначе false", "example": "Array.isArray([1, 2]); // true" },
      { "name": "Array.push()", "text": "Добавляет один или несколько элементов в конец массива и возвращает его новую длину.", "args": "элементы", "returns": "новая длина массива", "example": "arr.push(4, 5);" },
      { "name": "Array.pop()", "text": "Удаляет последний элемент из массива и возвращает его. Изменяет длину массива.", "args": "—", "returns": "удаленный элемент", "example": "const last = arr.pop();" },
      { "name": "Array.shift()", "text": "Удаляет первый элемент из массива и возвращает его. Изменяет длину массива.", "args": "—", "returns": "удаленный элемент", "example": "const first = arr.shift();" },
      { "name": "Array.unshift()", "text": "Добавляет один или несколько элементов в начало массива и возвращает его новую длину.", "args": "элементы", "returns": "новая длина массива", "example": "arr.unshift(0);" },
      { "name": "Array.concat()", "text": "Объединяет два или более массива в один новый массив. Не изменяет исходные массивы.", "args": "массивы или значения", "returns": "новый объединенный массив", "example": "const big = a.concat(b);" },
      { "name": "Array.slice()", "text": "Возвращает новый массив, содержащий копию части исходного массива (не включая конец). Исходный массив не меняется.", "args": "начало, конец", "returns": "копия части массива", "example": "arr.slice(1, 3);" },
      { "name": "Array.splice()", "text": "Изменяет содержимое массива, удаляя, заменяя или добавляя новые элементы.", "args": "старт, сколько удалить, новые элементы", "returns": "массив удаленных элементов", "example": "arr.splice(1, 1, 'new');" },
      { "name": "Array.forEach()", "text": "Выполняет предоставленную функцию один раз для каждого элемента массива.", "args": "callback(item, index, arr)", "returns": "ничего (undefined)", "example": "arr.forEach(x => console.log(x));" },
      { "name": "Array.map()", "text": "Создает новый массив с результатами вызова функции для каждого элемента. Не меняет исходный массив.", "args": "callback(item, index, arr)", "returns": "новый трансформированный массив", "example": "const doubled = arr.map(x => x * 2);" },
      { "name": "Array.filter()", "text": "Создает новый массив со всеми элементами, прошедшими проверку в функции.", "args": "callback(item)", "returns": "новый отфильтрованный массив", "example": "const pos = arr.filter(x => x > 0);" },
      { "name": "Array.reduce()", "text": "Выполняет функцию редукции для каждого элемента (слева направо), сводя массив к одному значению.", "args": "callback(acc, item), начальное значение", "returns": "итоговое аккумулированное значение", "example": "arr.reduce((s, x) => s + x, 0);" },
      { "name": "Array.find()", "text": "Возвращает первый элемент массива, который удовлетворяет условию функции. Иначе undefined.", "args": "callback(item)", "returns": "найденный элемент или undefined", "example": "arr.find(x => x > 10);" },
      { "name": "Array.findIndex()", "text": "Возвращает индекс первого элемента, который удовлетворяет условию. Иначе -1.", "args": "callback(item)", "returns": "индекс элемента или -1", "example": "arr.findIndex(x => x === 5);" },
      { "name": "Array.some()", "text": "Проверяет, удовлетворяет ли хотя бы один элемент массива условию функции.", "args": "callback(item)", "returns": "true если найден, иначе false", "example": "arr.some(x => x < 0);" },
      { "name": "Array.every()", "text": "Проверяет, удовлетворяют ли все элементы массива условию функции.", "args": "callback(item)", "returns": "true если все подходят, иначе false", "example": "arr.every(x => x > 0);" },
      { "name": "Array.sort()", "text": "Сортирует элементы массива на месте и возвращает отсортированный массив.", "args": "функция сравнения (необязательно)", "returns": "ссылка на тот же, но отсортированный массив", "example": "arr.sort((a, b) => a - b);" },
      { "name": "Array.reverse()", "text": "Изменяет порядок элементов в массиве на обратный.", "args": "—", "returns": "измененный массив", "example": "arr.reverse();" },
      { "name": "Array.includes()", "text": "Проверяет, содержит ли массив определенный элемент. Начинает поиск с указанного индекса.", "args": "значение, индекс начала", "returns": "true если найден, иначе false", "example": "arr.includes(2);" },
      { "name": "Array.join()", "text": "Объединяет все элементы массива в строку, используя разделитель (по умолчанию запятая).", "args": "разделитель (строка)", "returns": "строка из элементов", "example": "arr.join(' - ');" },
      { "name": "Array.copyWithin()", "text": "Копирует часть массива в другое место в том же массиве без изменения его длины.", "args": "куда, откуда начать, откуда закончить", "returns": "измененный массив", "example": "arr.copyWithin(0, 3);" },
      { "name": "Array.fill()", "text": "Заменяет все элементы массива от индекса start до end на указанное значение.", "args": "значение, старт, конец", "returns": "измененный массив", "example": "arr.fill(0, 1, 3);" },
      { "name": "Array.from()", "text": "Создает новый массив из массивоподобного или итерируемого объекта (например, строки или Set).", "args": "объект, mapFunction (необязательно)", "returns": "новый массив", "example": "Array.from('123'); // ['1', '2', '3']" }
    ]
  },
  "Map и Set": {
    "description": "Коллекции для хранения уникальных значений и пар ключ-значение, где ключом может быть любой тип.",
    "methods": [
      { "name": "new Map()", "text": "Объект Map представляет собой коллекцию пар ключ-значение. В отличие от объектов, ключами могут быть любые значения, включая объекты и функции.", "args": "массив массивов [[k,v]] (опц.)", "returns": "новая коллекция Map", "example": "const map = new Map();" },
      { "name": "map.size", "text": "Свойство, которое возвращает количество пар ключ-значение в объекте Map.", "args": "свойство", "returns": "число (количество)", "example": "console.log(map.size);" },
      { "name": "map.set()", "text": "Добавляет или обновляет пару ключ-значение в коллекции. Если ключ уже существует, его значение будет обновлено.", "args": "key, value", "returns": "объект Map (цепочка вызовов)", "example": "map.set('a', 1);" },
      { "name": "map.get()", "text": "Возвращает значение, связанное с указанным ключом. Если ключ не найден, возвращает undefined.", "args": "ключ (key)", "returns": "значение или undefined", "example": "map.get('a');" },
      { "name": "map.has()", "text": "Проверяет наличие элемента с указанным ключом в коллекции Map.", "args": "ключ (key)", "returns": "true / false", "example": "map.has('a');" },
      { "name": "map.delete()", "text": "Удаляет элемент по указанному ключу. Возвращает true, если элемент был удален, и false, если не найден.", "args": "ключ (key)", "returns": "true / false", "example": "map.delete('a');" },
      { "name": "new Set()", "text": "Коллекция уникальных значений любого типа. Автоматически удаляет дублирующиеся значения.", "args": "итерируемый объект (опц.)", "returns": "новая коллекция Set", "example": "const set = new Set([1, 2, 2]);" },
      { "name": "set.add()", "text": "Добавляет элемент в коллекцию Set. Если элемент уже присутствует, он не будет добавлен повторно.", "args": "значение (value)", "returns": "объект Set", "example": "set.add(3);" },
      { "name": "set.has()", "text": "Проверяет, существует ли указанное значение в коллекции Set.", "args": "значение (value)", "returns": "true / false", "example": "set.has(3);" },
      { "name": "clear()", "text": "Удаляет все элементы из коллекции (Map или Set), делая её пустой.", "args": "—", "returns": "undefined", "example": "map.clear(); set.clear();" }
    ]
  },
  "New Date": {
    "description": "Работа с датами и временем в JavaScript осуществляется через объект Date.",
    "methods": [
      {
        "name": "new Date()",
        "text": "Создает новый объект даты. Без аргументов создает объект с текущей датой и временем. Можно передать строку или миллисекунды.",
        "args": "параметры (опц.)",
        "returns": "объект даты",
        "example": "const сейчас = new Date();"
      },
      {
        "name": "getFullYear()",
        "text": "Возвращает год (4 цифры) указанной даты по местному времени.",
        "args": "—",
        "returns": "число (год)",
        "example": "date.getFullYear(); // 2024"
      },
      {
        "name": "getMonth()",
        "text": "Возвращает месяц (от 0 до 11). Важно: январь — это 0, декабрь — 11.",
        "args": "—",
        "returns": "число (0-11)",
        "example": "date.getMonth(); // 0 (Январь)"
      },
      {
        "name": "getDate()",
        "text": "Возвращает день месяца (от 1 до 31).",
        "args": "—",
        "returns": "число (1-31)",
        "example": "date.getDate();"
      },
      {
        "name": "getDay()",
        "text": "Возвращает день недели (от 0 до 6). 0 — это воскресенье, 1 — понедельник.",
        "args": "—",
        "returns": "число (0-6)",
        "example": "date.getDay();"
      },
      {
        "name": "getHours / getMinutes",
        "text": "Возвращают текущие часы (0-23) или минуты (0-59) для указанной даты.",
        "args": "—",
        "returns": "число",
        "example": "date.getHours();"
      },
      {
        "name": "getTime()",
        "text": "Возвращает количество миллисекунд, прошедших с 1 января 1970 года (Unix Epoch). Удобно для сравнения дат.",
        "args": "—",
        "returns": "число (мс)",
        "example": "date.getTime();"
      },
      {
        "name": "Date.now()",
        "text": "Статический метод. Возвращает текущее время в миллисекундах сразу, без создания объекта `new Date()`.",
        "args": "—",
        "returns": "число (мс)",
        "example": "const start = Date.now();"
      },
      {
        "name": "toISOString()",
        "text": "Преобразует дату в строковый формат ISO (YYYY-MM-DDTHH:mm:ss.sssZ).",
        "args": "—",
        "returns": "строка",
        "example": "date.toISOString();"
      }
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
    "description": "Методы для работы с текстовыми строками и числовыми значениями.",
    "methods": [
      { "name": "String.length", "text": "Свойство, которое возвращает количество символов в строке.", "args": "—", "returns": "число (длина)", "example": "'JS'.length; // 2" },
      { "name": "String.toLowerCase()", "text": "Возвращает строку, в которой все буквы переведены в нижний регистр.", "args": "—", "returns": "новая строка", "example": "'HELLO'.toLowerCase(); // 'hello'" },
      { "name": "String.toUpperCase()", "text": "Возвращает строку, в которой все буквы переведены в верхний регистр.", "args": "—", "returns": "новая строка", "example": "'js'.toUpperCase(); // 'JS'" },
      { "name": "String.includes()", "text": "Проверяет, содержит ли строка указанную подстроку. Чувствителен к регистру.", "args": "подстрока", "returns": "true / false", "example": "'Apple'.includes('Ap'); // true" },
      { "name": "String.slice()", "text": "Извлекает часть строки и возвращает её в виде новой строки, не изменяя оригинал.", "args": "начало, конец", "returns": "новая строка", "example": "'Frontend'.slice(0, 4); // 'Fron'" },
      { "name": "String.trim()", "text": "Удаляет пробельные символы с обоих концов строки.", "args": "—", "returns": "очищенная строка", "example": "'  text  '.trim(); // 'text'" },
      { "name": "String.split()", "text": "Разбивает строку на массив строк путем разделения строки указанной подстрокой.", "args": "разделитель", "returns": "массив строк", "example": "'a,b,c'.split(','); // ['a', 'b', 'c']" },
      { "name": "Number.toFixed()", "text": "Форматирует число, используя запись с фиксированной запятой (округляет до нужного знака).", "args": "кол-во знаков", "returns": "строка (string)", "example": "3.1415.toFixed(2); // '3.14'" },
      { "name": "Number.parseInt()", "text": "Принимает строку в качестве аргумента и возвращает целое число.", "args": "строка", "returns": "целое число / NaN", "example": "Number.parseInt('10.5px'); // 10" },
      { "name": "Number.parseFloat()", "text": "Принимает строку и возвращает число с плавающей точкой (дробное).", "args": "строка", "returns": "дробное число / NaN", "example": "Number.parseFloat('10.5px'); // 10.5" },
      { "name": "Number.isNaN()", "text": "Определяет, является ли переданное значение NaN (Not-a-Number).", "args": "значение", "returns": "true / false", "example": "Number.isNaN(NaN); // true" },
      { "name": "String() / Number()", "text": "Функции для явного преобразования типа в строку или в число.", "args": "значение", "returns": "новое значение типа", "example": "Number('123'); // 123" }
    ]
  },
  "LocalStorage": {
    "description": "Встроенное хранилище браузера, которое позволяет сохранять данные между сессиями. Данные не удаляются при перезагрузке страницы или закрытии браузера.",
    "methods": [
      {
        "name": "setItem()",
        "text": "Сохраняет пару ключ/значение в хранилище. Если ключ уже существует, значение будет обновлено.",
        "args": "ключ (key), значение (value)",
        "returns": "undefined",
        "example": "localStorage.setItem('theme', 'dark');"
      },
      {
        "name": "getItem()",
        "text": "Возвращает значение по указанному ключу. Если ключа нет, вернет null.",
        "args": "ключ (key)",
        "returns": "строка (string) или null",
        "example": "const theme = localStorage.getItem('theme');"
      },
      {
        "name": "removeItem()",
        "text": "Удаляет указанный ключ и связанное с ним значение из хранилища.",
        "args": "ключ (key)",
        "returns": "undefined",
        "example": "localStorage.removeItem('theme');"
      },
      {
        "name": "clear()",
        "text": "Полностью очищает всё содержимое хранилища для данного сайта.",
        "args": "—",
        "returns": "undefined",
        "example": "localStorage.clear();"
      },
      {
        "name": "Сохранение объектов",
        "text": "LocalStorage сохраняет только строки. Чтобы сохранить объект или массив, их нужно перевести в JSON-строку.",
        "args": "JSON.stringify()",
        "returns": "строка",
        "example": "localStorage.setItem('user', JSON.stringify(obj));"
      },
      {
        "name": "Чтение объектов",
        "text": "При получении объекта из хранилища его нужно превратить обратно из строки в объект JavaScript.",
        "args": "JSON.parse()",
        "returns": "объект / массив",
        "example": "const user = JSON.parse(localStorage.getItem('user'));"
      },
      {
        "name": "length",
        "text": "Свойство, которое возвращает количество записей, хранящихся в LocalStorage.",
        "args": "свойство",
        "returns": "число",
        "example": "console.log(localStorage.length);"
      }
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
    "description": "Встроенный объект, который предоставляет свойства и методы для выполнения математических операций. Не является конструктором (нельзя делать new Math).",
    "methods": [
      { "name": "Math.PI", "text": "Свойство, представляющее отношение длины окружности к её диаметру (приблизительно 3.14159).", "args": "свойство", "returns": "число (float)", "example": "Math.PI; // 3.1415926535..." },
      { "name": "Math.abs()", "text": "Возвращает абсолютное значение числа (модуль числа).", "args": "число (x)", "returns": "положительное число", "example": "Math.abs(-5); // 5" },
      { "name": "Math.random()", "text": "Возвращает псевдослучайное число с плавающей точкой в диапазоне от 0 (включительно) до 1 (не включая).", "args": "—", "returns": "дробное число 0-1", "example": "Math.random();" },
      { "name": "Math.floor()", "text": "Округляет число вниз до ближайшего меньшего целого.", "args": "число (x)", "returns": "целое число", "example": "Math.floor(4.9); // 4" },
      { "name": "Math.ceil()", "text": "Округляет число вверх до ближайшего большего целого.", "args": "число (x)", "returns": "целое число", "example": "Math.ceil(4.1); // 5" },
      { "name": "Math.round()", "text": "Округляет число до ближайшего целого по стандартным правилам (если .5, то в большую сторону).", "args": "число (x)", "returns": "целое число", "example": "Math.round(4.5); // 5" },
      { "name": "Math.trunc()", "text": "Удаляет дробную часть числа, возвращая только целую часть без округления.", "args": "число (x)", "returns": "целое число", "example": "Math.trunc(4.9); // 4" },
      { "name": "Math.max()", "text": "Возвращает наибольшее число из переданных аргументов.", "args": "числа (n1, n2...)", "returns": "максимальное число", "example": "Math.max(1, 10, 5); // 10" },
      { "name": "Math.min()", "text": "Возвращает наименьшее число из переданных аргументов.", "args": "числа (n1, n2...)", "returns": "минимальное число", "example": "Math.min(1, 10, 5); // 1" },
      { "name": "Math.pow()", "text": "Возводит основание в степень показателя (x в степени y).", "args": "x, y", "returns": "результат возведения", "example": "Math.pow(2, 3); // 8" },
      { "name": "Math.sqrt()", "text": "Возвращает квадратный корень числа. Если число отрицательное, вернет NaN.", "args": "число (x)", "returns": "квадратный корень", "example": "Math.sqrt(16); // 4" },
      { "name": "Math.sqrt()", "text": "Возвращает квадратный корень числа. Если число отрицательное, вернет NaN.", "args": "число (x)", "returns": "квадратный корень", "example": "Math.sqrt(16); // 4" }
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

// --- ЛОГИКА СЛИЯНИЯ И ЗАЩИТЫ ---
const userStorage = JSON.parse(localStorage.getItem("topics")) || {};
// Склеиваем твои вшитые темы с теми, что добавит пользователь
const topics = { ...BASE_TOPICS, ...userStorage };

function save() {
  const customData = {};
  Object.keys(topics).forEach(key => {
    // Сохраняем только те темы, которых НЕТ в базе, чтобы не дублировать
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
  // Логика добавления новой темы
  // Функция для сохранения в LocalStorage
  function save() {
    localStorage.setItem("topics", JSON.stringify(topics));
  }

  // Открытие формы добавления
  document.getElementById("add-btn").onclick = () => {
    const modalContent = document.getElementById("modal-content");

    if (!active) {
      // ФОРМА ДЛЯ НОВОЙ ТЕМЫ
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
      // ФОРМА ДЛЯ НОВОГО МЕТОДА
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
      initNav(); // Обновляем сайдбар
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

  // Обновленная функция создания карточки
  function createCard(text, cb) {
    const c = document.createElement("div");
    c.className = "card";

    // Текст карточки
    const span = document.createElement("span");
    span.textContent = text;
    c.appendChild(span);

    // Добавляем кнопку удаления, если мы на главной (удаляем темы)
    if (!active) {
      const delBtn = document.createElement("button");
      delBtn.className = "delete-btn";
      delBtn.innerHTML = "×";
      delBtn.onclick = (e) => {
        e.stopPropagation(); // Чтобы не сработал клик по самой карточке
        deleteTopic(text);
      };
      c.appendChild(delBtn);
    }

    c.onclick = cb;
    grid.appendChild(c);
  }

  // Функция удаления темы
  function deleteTopic(topicName) {
    if (confirm(`Вы уверены, что хотите удалить тему "${topicName}"?`)) {
      // Удаляем из объекта topics
      delete topics[topicName];

      // Сохраняем обновленный объект в localStorage
      localStorage.setItem("topics", JSON.stringify(topics));

      // Перерисовываем интерфейс
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

  // Управление сайдбаром
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

// Объект управления тестом
const QuizEngine = {
  config: {
    totalQuestions: 0,
    currentIndex: 0,
    correctAnswers: 0,
    questions: [],
    wrongCategories: new Set()
  },

  // 1. Запуск теста
  start(amount) {
    // Собираем базу из BASE_TOPICS
    const pool = [];
    Object.keys(BASE_TOPICS).forEach(cat => {
      BASE_TOPICS[cat].methods.forEach(m => pool.push({ ...m, category: cat }));
    });

    // Перемешиваем и нарезаем
    this.config.questions = pool.sort(() => Math.random() - 0.5);
    if (amount > 0) this.config.questions = this.config.questions.slice(0, amount);

    // Сброс состояния
    this.config.totalQuestions = this.config.questions.length;
    this.config.currentIndex = 0;
    this.config.correctAnswers = 0;
    this.config.wrongCategories.clear();

    // Переключение экранов
    this.switchScreen('game');
    this.nextQuestion();
  },

  // 2. Отображение вопроса
  nextQuestion() {
    if (this.config.currentIndex >= this.config.totalQuestions) {
      this.finish();
      return;
    }

    const data = this.config.questions[this.config.currentIndex];
    const optionsContainer = document.getElementById('quiz-options');

    // Обновляем текст
    document.getElementById('quiz-progress').innerText = `Вопрос ${this.config.currentIndex + 1} из ${this.config.totalQuestions}`;
    document.getElementById('quiz-question').innerText = `Что делает метод ${data.name}?`;
    document.getElementById('quiz-feedback').innerText = "";
    optionsContainer.innerHTML = "";

    // Генерируем варианты (1 верный + 3 случайных)
    const variants = this.generateVariants(data.text);

    variants.forEach(text => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerText = text;
      btn.onclick = () => this.handleAnswer(text, data, btn);
      optionsContainer.appendChild(btn);
    });
  },

  // 3. Обработка клика
  handleAnswer(selectedText, correctData, clickedBtn) {
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.style.pointerEvents = 'none'); // Блокировка

    if (selectedText === correctData.text) {
      clickedBtn.classList.add('correct');
      this.config.correctAnswers++;
      document.getElementById('quiz-feedback').innerHTML = "<span style='color:#22c55e'>Правильно!</span>";
    } else {
      clickedBtn.classList.add('wrong');
      this.config.wrongCategories.add(correctData.category);
      document.getElementById('quiz-feedback').innerHTML = "<span style='color:#ef4444'>Ошибка</span>";
      // Подсветка верного
      btns.forEach(b => { if (b.innerText === correctData.text) b.classList.add('correct'); });
    }

    this.config.currentIndex++;
    setTimeout(() => this.nextQuestion(), 1500);
  },

  // 4. Финиш
  finish() {
    this.switchScreen('result');
    const scorePercent = Math.round((this.config.correctAnswers / this.config.totalQuestions) * 100);

    let advice = this.config.wrongCategories.size > 0
      ? `Обрати внимание на темы: <br><b style="color:var(--accent)">${Array.from(this.config.wrongCategories).join(', ')}</b>`
      : "Ты безупречен! Все темы освоены.";

    document.getElementById('result-stats').innerHTML = `
            <h1 style="font-size: 50px; margin: 10px 0;">${scorePercent}%</h1>
            <p>Верно: ${this.config.correctAnswers} из ${this.config.totalQuestions}</p>
        `;
    document.getElementById('advice-box').innerHTML = advice;
  },

  // Вспомогательные функции
  switchScreen(type) {
    document.getElementById('quiz-start-screen').classList.toggle('hidden', type !== 'start');
    document.getElementById('quiz-game-screen').classList.toggle('hidden', type !== 'game');
    document.getElementById('quiz-result-screen').classList.toggle('hidden', type !== 'result');
  },

  generateVariants(correctText) {
    const allTexts = this.config.questions.map(q => q.text);
    let set = new Set([correctText]);
    while (set.size < 4 && set.size < allTexts.length) {
      set.add(allTexts[Math.floor(Math.random() * allTexts.length)]);
    }
    return Array.from(set).sort(() => Math.random() - 0.5);
  }
};

// Привязка к интерфейсу
function startQuiz(n) { QuizEngine.start(n); }
function resetQuiz() { QuizEngine.switchScreen('start'); }

document.getElementById('start-quiz-btn').onclick = () => {
  document.getElementById('quiz-container').classList.remove('quiz-hidden');
  resetQuiz();
};

document.getElementById('close-quiz').onclick = () => {
  document.getElementById('quiz-container').classList.add('quiz-hidden');
};