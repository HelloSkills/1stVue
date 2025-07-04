import {keysMap} from "./keysMap"

const content = {
    [keysMap.GIT]: [
        {
            title: '📥 Клонирование и удалённый репозиторий',
            text: `- **git clone <url>** – Клонировать удалённый репозиторий на локальную машину
- **git remote -v** – Показывает связку с гитом (куда / откуда)`
        },
        {
            title: '🔍 Проверка состояния',
            text: `- **git status** – Показать текущее состояние репозитория (изменения, ветки)
- **git log** – Показать историю коммитов`
        },
        {
            title: '➕ Добавление и коммиты',
            text: `- **git add <файл>** – Добавить файл(ы) в индекс (готовность к коммиту)
- **git add .** – Добавить все файлы в индекс
- **git commit -m "msg"** – Зафиксировать изменения с сообщением коммита`
        },
        {
            title: '📤 Отправка и получение',
            text: `- **git push** – Отправить коммиты в удалённый репозиторий
- **git pull** – Забрать изменения с удалённого репозитория и слить с локальными`
        },
        {
            title: '🌿 Работа с ветками',
            text: `- **git branch** – Показать список веток
- **git checkout <ветка>** – Переключиться на другую ветку
- **git merge <ветка>** – Слить указанную ветку в текущую`
        }
    ],
    [keysMap.JS]: [
        {
            title: '📚 Типы данных',
            items: [
                {
                    title: '🔢 Примитивные типы данных',
                    text: `- **string** – Строка: "Hello", 'world', template

- **number** – Число: 42, 3.14, NaN, Infinity

- **bigint** – Большие числа: 1234567890123456789012345678901234567890n

- **boolean** – Логический тип: true, false

- **undefined** – Тип значения, которое не было присвоено

- **null** – Пустое или неизвестное значение

- **symbol** – Уникальные идентификаторы: Symbol("id")`
                },
                {
                    title: '📦 Ссылочные (объектные) типы',
                    text: `- **object** – Объекты: { name: "JS" }

- **array** – Массивы: [1, 2, 3]

- **function** – Функции: function() {}, () => {}

- **date** – Дата: new Date()

- **regexp** – Регулярные выражения: /abc/i

- **error** – Ошибки: new Error("message")

- **map** – Коллекции ключ/значение: new Map()

- **set** – Уникальные значения: new Set()

- **weakmap** – Слабые коллекции: new WeakMap()

- **weakset** – Слабые уникальные коллекции: new WeakSet()`
                },
                {
                    title: '🧪 Проверка типов',
                    text: `- **typeof** – typeof 42 // "number"

- **Array.isArray()** – Array.isArray([1, 2]) // true

- **instanceof** – {} instanceof Object // true

- **Object.prototype.toString** – Object.prototype.toString.call(null)

// "[object Null]"`
                },
                {
                    title: '📌 Особенности',
                    text: `- **null** — это object – typeof null === "object" — историческая ошибка

- **NaN** — число – typeof NaN === "number"

- **undefined !== null** – undefined — нет значения, null — намеренно пусто`
                }
            ]
        },
        {
            title: '📦 Объявление переменных: const, let, var',
            items: [
                {
                    title: 'const – Константа (не переназначается)',
                    text: `\`\`\`js
const name = 'Roman'
// name = 'Другой' ❌ ошибка
\`\`\`

- Особенности:
- ✔ Нельзя переназначить (но можно менять содержимое объекта)
- ✔ Блочная область видимости ({} внутри if, for и т.д.)
- ✔ Не всплывает — доступна только после строки объявления
- ✘ Обязательно инициализировать сразу`
                },
                {
                    title: 'let – Переменная с блочной областью',
                    text: `\`\`\`js
let counter = 0
counter++
\`\`\`

- Особенности:
- ✔ Можно переопределять значение
- ✔ Блочная область видимости
- ✔ Не всплывает — создаётся, но не инициализируется (TDZ)
- ✔ Используется чаще всего в циклах и логике`
                },
                {
                    title: 'var – Устаревшее объявление',
                    text: `\`\`\`js
var age = 30
\`\`\`

- Особенности:
- ✘ Имеет **функциональную** область видимости (не блочную!)
- ✔ Всплывает — доступна до строки объявления (undefined)
- ✘ Может вести к багам — избегай использования
- ⚠ Используется только в старом коде`
                },
                {
                    title: 'Область видимости (Scope)',
                    text: `\`\`\`js
function test() {
  if (true) {
    let x = 1
    var y = 2
  }
  console.log(x) // ❌ ошибка
  console.log(y) // ✅ 2 (var видна во всей функции)
}
\`\`\`

- Особенности:
- ✔ \`let\` и \`const\` — видны только в блоке \`{...}\`
- ✔ \`var\` — видна во всей функции
- ✘ \`var\` игнорирует блочную структуру (например, if)`
                },
                {
                    title: 'Всплытие (Hoisting)',
                    text: `\`\`\`js
console.log(a) // undefined (var всплыла)
var a = 5

console.log(b) // ❌ ошибка (ReferenceError)
let b = 10
\`\`\`

- Особенности:
- ✔ \`var\` всплывает — переменная создаётся и инициализируется как \`undefined\`
- ✔ \`let\` и \`const\` тоже всплывают, но попадают в TDZ (зона временной недоступности)
- ✘ Обращение к \`let/const\` до строки объявления вызывает ошибку`
                }
            ]
        },
        {
            title: '📘 Объявления функции',
            items: [
                {
                    title: 'Function Declaration – Обычное объявление функции',
                    text: `\`\`\`js
function sayHi() {
  console.log("Hi")
}
\`\`\`

- Особенности:
- ✔ Поднимается (hoisting) — можно вызвать до определения
- ✔ Именованная функция — отображается в стеке ошибок
- ✔ this определяется в момент вызова
- ✔ Подходит для описания основной логики`
                },
                {
                    title: 'Function Expression – Функциональное выражение',
                    text: `\`\`\`js
const sayHi = function() {
  console.log("Hi")
}
\`\`\`

- Особенности:
- ✘ Не поднимается — нельзя вызывать до объявления
- ✔ Может быть анонимной или с именем
- ✔ Можно передавать как аргумент
- ✔ this определяется в момент вызова`
                },
                {
                    title: 'Arrow Function – Стрелочная функция',
                    text: `\`\`\`js
const sayHi = () => console.log("Hi")
\`\`\`

- Особенности:
- ✔ Короткий синтаксис
- ✘ Не имеет своего this, arguments, super
- ✘ Нельзя использовать как конструктор (через new)
- ✔ Идеальна для колбэков и простых выражений`
                },
                {
                    title: 'Method Definition – Метод объекта',
                    text: `\`\`\`js
const obj = {
  sayHi() {
    console.log("Hi")
  }
}
\`\`\`

- Особенности:
- ✔ Краткий синтаксис
- ✔ this ссылается на объект
- ✘ Не поднимается
- ✔ Используется в объектах и классах`
                },
                {
                    title: 'IIFE – Самовызывающаяся функция',
                    text: `\`\`\`js
(function() {
  console.log("Run once")
})()
\`\`\`

- Особенности:
- ✔ Выполняется сразу после объявления
- ✔ Часто используется для изоляции переменных
- ✔ Можно использовать и со стрелочной: (() => {})()
- ✘ Не используется повторно — без повторного объявления`
                }
            ]
        },
        {
            title: '📦 Импорт / Экспорт (Import / Export)',
            items: [
                {
                    title: 'Named Export – Именованный экспорт',
                    text: `\`\`\`js
// file: utils.js
export function sayHi() {
  console.log("Hi")
}
\`\`\`

- Особенности:
- ✔ Можно экспортировать несколько сущностей из одного файла
- ✔ Экспорт по имени — обязательно использовать то же имя при импорте
- ✔ Удобно для автодополнения и навигации
- ✘ При импорте обязательно указывать имя в \`{}\`
`
                },
                {
                    title: 'Named Import – Именованный импорт',
                    text: `\`\`\`js
// file: main.js
import { sayHi } from './utils'

sayHi()
\`\`\`

- Особенности:
- ✔ Импорт строго по имени, указанному в export
- ✔ Удобен при работе с несколькими функциями/константами
- ✔ Можно делать алиас: \`import { sayHi as greet }\`
`
                },
                {
                    title: 'Default Export – Экспорт по умолчанию',
                    text: `\`\`\`js
// file: utils.js
export default function sayHi() {
  console.log("Hi")
}
\`\`\`

- Особенности:
- ✔ Только один экспорт по умолчанию в файле
- ✔ При импорте можно задать любое имя
- ✔ Удобно для основного функционала модуля
`
                },
                {
                    title: 'Default Import – Импорт по умолчанию',
                    text: `\`\`\`js
// file: main.js
import sayHi from './utils'

sayHi()
\`\`\`

- Особенности:
- ✔ Имя импорта можно выбрать произвольно
- ✔ Удобно, если в модуле один главный экспорт
- ✘ Сложнее отслеживать имя при рефакторинге
`
                },
                {
                    title: 'Mixed Export – Смешанный экспорт (default + named)',
                    text: `\`\`\`js
// file: utils.js
export default function sayHi() {
  console.log("Hi")
}

export const version = '1.0.0'
\`\`\`

- Особенности:
- ✔ Один default + сколько угодно named
- ✔ Гибкость: главный экспорт + доп. функциональность
- ✘ Немного сложнее читаемость при импорте
`
                },
                {
                    title: 'Mixed Import – Смешанный импорт (default + named)',
                    text: `\`\`\`js
// file: main.js
import sayHi, { version } from './utils'

sayHi()
console.log(version)
\`\`\`

- Особенности:
- ✔ Можно заимпортить всё в одной строке
- ✔ Default импорт идёт первым, потом named через \`{}\`
- ✘ Важно соблюдать порядок: default, затем named
`
                },
                {
                    title: 'Import All – Импорт всего содержимого',
                    text: `\`\`\`js
// file: utils.js
export const sayHi = () => console.log("Hi")
export const sayBye = () => console.log("Bye")
\`\`\`

\`\`\`js
// file: main.js
import * as utils from './utils'

utils.sayHi()
utils.sayBye()
\`\`\`

- Особенности:
- ✔ Собирает все экспортируемые сущности в один объект
- ✔ Удобно, если нужно использовать всё как модуль
- ✘ Чуть более громоздкий синтаксис при использовании
`
                },
                {
                    title: 'Re-export – Переэкспорт',
                    text: `\`\`\`js
// file: say.js
export const sayHi = () => console.log("Hi")

// file: index.js
export * from './say'
\`\`\`

- Особенности:
- ✔ Позволяет объединить модули в один вход
- ✔ Полезно в index.ts файлах или barrels
- ✘ Сложнее отследить, откуда что пришло
`
                }
            ]
        },
        {
            title: '⏱ Async / Await – Асинхронность',
            items: [
                {
                    title: 'Async Function – Асинхронная функция',
                    text: `\`\`\`js
async function fetchData() {
  return 'данные'
}
\`\`\`

- Особенности:
- ✔ Возвращает Promise
- ✔ Можно использовать await внутри
- ✔ Удобна для последовательных операций
- ✘ Ошибки нужно обрабатывать через try/catch`
                },
                {
                    title: 'Await – Ожидание результата',
                    text: `\`\`\`js
async function fetchData() {
  const result = await getData()
  console.log(result)
}
\`\`\`

- Особенности:
- ✔ Приостанавливает выполнение до получения результата
- ✔ Заменяет .then() — делает код читаемым
- ✘ Работает только внутри async-функций`
                },
                {
                    title: 'Обработка ошибок через try/catch',
                    text: `\`\`\`js
async function fetchData() {
  try {
    const data = await getData()
    console.log(data)
  } catch (error) {
    console.error('Ошибка:', error)
  }
}
\`\`\`

- Особенности:
- ✔ Позволяет ловить ошибки из промисов
- ✔ Повышает читаемость
- ✔ Можно комбинировать с условными блоками`
                },
                {
                    title: 'Async Arrow Function – Асинхронная стрелочная функция',
                    text: `\`\`\`js
const fetchData = async () => {
  const result = await getData()
  console.log(result)
}
\`\`\`

- Особенности:
- ✔ Компактный синтаксис
- ✔ Отлично подходит для Vue setup() и событий
- ✔ Легко передавать как параметр`
                },
                {
                    title: 'Promise.all – Параллельные await-вызовы',
                    text: `\`\`\`js
const [user, posts] = await Promise.all([
  fetchUser(),
  fetchPosts()
])
\`\`\`

- Особенности:
- ✔ Выполняет запросы параллельно
- ✔ Быстрее, чем по одному await
- ✘ Один сбой — и падают все`
                },
                {
                    title: 'Top-level await – вне функции',
                    text: `\`\`\`js
const data = await fetchData()
\`\`\`

- Особенности:
- ✔ Работает в ES-модулях (.mjs или type: module)
- ✔ Поддерживается в Nuxt 3 (например, useAsyncData)
- ✘ Нельзя использовать в обычных .js-файлах без модуля`
                },
                {
                    title: '🔄 Состояния промисов (Promise States)',
                    items: [
                        {
                            title: 'Pending – Ожидание',
                            text: `\`\`\`js
const promise = new Promise(() => {
  // пока ничего не вызвано
})
\`\`\`

- Особенности:
- ✔ Начальное состояние промиса
- ✔ Операция ещё не завершена
- ✘ Ни resolve, ни reject ещё не были вызваны`
                        },
                        {
                            title: 'Fulfilled – Успешно выполнен',
                            text: `\`\`\`js
const promise = Promise.resolve('Готово')

promise.then(result => console.log(result)) // 'Готово'
\`\`\`

- Особенности:
- ✔ Операция завершена успешно
- ✔ Результат доступен в .then()
- ✔ Переходит из pending → fulfilled`
                        },
                        {
                            title: 'Rejected – Отклонён',
                            text: `\`\`\`js
const promise = Promise.reject('Ошибка')

promise.catch(error => console.error(error)) // 'Ошибка'
\`\`\`

- Особенности:
- ✔ Промис завершён с ошибкой
- ✔ Ошибка доступна в .catch()
- ✔ Переходит из pending → rejected`
                        },
                        {
                            title: 'Settled – Завершён (итоговое состояние)',
                            text: `\`\`\`js
const promise1 = Promise.resolve()
const promise2 = Promise.reject()

Promise.allSettled([promise1, promise2])
  .then(results => console.log(results))
\`\`\`

- Особенности:
- ✔ Объединённое состояние: fulfilled или rejected
- ✔ Полезно, если важно завершение всех промисов
- ✔ Используется в Promise.allSettled()`
                        }
                    ]
                }
            ]
        },
        {
            title: '🔒 Замыкания (Closures)',
            items: [
                {
                    title: 'Что такое замыкание?',
                    text: `\`\`\`js
function outer() {
  const name = 'Roman'
  return function inner() {
    console.log(name)
  }
}

const sayName = outer()
sayName() // 'Roman'
\`\`\`

- Особенности:
- ✔ Внутренняя функция "помнит" переменные внешней
- ✔ Замыкание создаётся при возврате функции
- ✔ Используется для скрытия данных и состояния`
                },
                {
                    title: 'Замыкание сохраняет доступ к переменным',
                    text: `\`\`\`js
function counter() {
  let count = 0
  return () => ++count
}

const increment = counter()
console.log(increment()) // 1
console.log(increment()) // 2
\`\`\`

- Особенности:
- ✔ \`count\` сохраняется между вызовами
- ✔ Можно создавать приватные состояния
- ✔ Полезно в Nuxt/Vue для трекеров, генераторов`
                },
                {
                    title: 'Замыкание в цикле (ошибка с var)',
                    text: `\`\`\`js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
// Вывод: 3, 3, 3 (а не 0, 1, 2)
\`\`\`

- Особенности:
- ✘ \`var\` не создаёт отдельную область видимости на каждой итерации
- ✔ Решается через \`let\` или IIFE
- ✔ Проблема замыкания на общую переменную`
                },
                {
                    title: 'Правильное замыкание в цикле (с let)',
                    text: `\`\`\`js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
// Вывод: 0, 1, 2
\`\`\`

- Особенности:
- ✔ \`let\` создаёт новую переменную на каждой итерации
- ✔ Замыкание работает как ожидается
- ✔ Используется в асинхронных циклах и UI-логике`
                },
                {
                    title: 'Приватные данные через замыкание',
                    text: `\`\`\`js
function createSecret() {
  const secret = '🔐'
  return {
    getSecret() {
      return secret
    }
  }
}

const safe = createSecret()
console.log(safe.getSecret()) // '🔐'
\`\`\`

- Особенности:
- ✔ Переменные недоступны извне напрямую
- ✔ Часто используется в фабриках, API, сервисах
- ✔ Помогает инкапсулировать данные`
                }
            ]
        },
        {
            title: '🧱 Основы ООП в JavaScript',
            items: [
                {
                    title: 'Класс – шаблон объекта',
                    text: `\`\`\`js
class User {
  // свойства и методы
}
\`\`\`

- ✔ Шаблон для создания объектов
- ✔ Удобен для структурирования логики
- ✔ Поддерживает наследование через extends`
                },
                {
                    title: 'Constructor – конструктор класса',
                    text: `\`\`\`js
class User {
  constructor(name) {
    this.name = name
  }
}
\`\`\`

- ✔ Вызывается при создании new User(...)
- ✔ Инициализирует данные объекта
- ✔ this указывает на экземпляр`
                },
                {
                    title: 'Instance – экземпляр класса',
                    text: `\`\`\`js
const user = new User("Roman")
\`\`\`

- ✔ Реальный объект, созданный по шаблону класса
- ✔ Получает все свойства и методы
- ✔ Может вызываться как user.method()`
                },
                {
                    title: 'Расширение класса – extends',
                    text: `\`\`\`js
class Admin extends User {
  constructor(name, role) {
    super(name)
    this.role = role
  }
}
\`\`\`

- ✔ Наследует свойства и методы от родителя
- ✔ Можно дописывать или переопределять методы`
                },
                {
                    title: 'super – вызов родительского конструктора',
                    text: `\`\`\`js
class Admin extends User {
  constructor(name) {
    super(name)
  }
}
\`\`\`

- ✔ Вызывает constructor родителя
- ✔ Должен быть вызван до использования this
- ✔ Можно использовать для вызова методов родителя`
                },
                {
                    title: 'Методы класса',
                    text: `\`\`\`js
class User {
  sayHi() {
    console.log(\`Привет, \${this.name}\`)
  }
}
\`\`\`

- ✔ this указывает на экземпляр
- ✔ Не поднимаются (hoisting ✘)
- ✔ Можно переопределить при наследовании`
                },
                {
                    title: 'Статические методы – static',
                    text: `\`\`\`js
class MathUtils {
  static double(n) {
    return n * 2
  }
}

MathUtils.double(4) // 8
\`\`\`

- ✔ Вызываются без создания экземпляра
- ✘ Не имеют доступа к this экземпляра
- ✔ Удобны для вспомогательных функций`
                },
                {
                    title: 'Приватные поля – #',
                    text: `\`\`\`js
class Bank {
  #balance = 0

  getBalance() {
    return this.#balance
  }
}
\`\`\`

- ✔ Скрывают данные от внешнего доступа
- ✘ Не читаются напрямую: obj.#balance ✘ ошибка
- ✔ Удобны для инкапсуляции`
                },
                {
                    title: 'Геттер – доступ как к свойству',
                    text: `\`\`\`js
class Product {
  constructor(price) {
    this._price = price
  }

  get price() {
    return this._price + "₽"
  }
}
\`\`\`

- ✔ Обращение как к свойству: product.price
- ✔ Удобен для форматирования и логики "на чтение"`
                },
                {
                    title: 'Сеттер – установка значения как в свойство',
                    text: `\`\`\`js
class Product {
  set price(value) {
    this._price = value
  }
}
\`\`\`

- ✔ Установка как свойства: product.price = 100
- ✔ Удобен для логики "на запись" и валидации`
                }
            ]
        },
    ],
    [keysMap.Objects]: [
        {
            title: '🧱 Методы объекта',
            text: `**Object.keys(obj)** – Возвращает массив всех ключей (имён свойств) переданного объекта
\`\`\`js
const user = { name: "Roman", age: 25 }
console.log(Object.keys(user)) // ["name", "age"]
\`\`\`

**Object.values(obj)** – Возвращает массив всех значений (значений свойств) переданного объекта
\`\`\`js
const user = { name: "Roman", age: 25 }
console.log(Object.values(user)) // ["Roman", 25"]
\`\`\``
        }
    ],
    [keysMap.Arrays]: [],
    [keysMap.Styles]: [],
    [keysMap.Browser]: [
        {
            title: '🔄 Event Loop',
            items: [
                {
                    title: 'Что такое Event Loop',
                    text: `\`\`\`js
// Event Loop — это механизм в JavaScript,
// который позволяет выполнять асинхронный код
// и не блокировать главный поток выполнения
\`\`\`

- Особенности:
- ✔ Однопоточный цикл, который проверяет очередь событий
- ✔ Позволяет обрабатывать callback'и, обещания и таймеры
- ✔ Работает с Call Stack и Task Queue (очередь задач)
- ✔ Главный механизм для асинхронного выполнения`
                },
                {
                    title: 'Call Stack и Task Queue',
                    text: `\`\`\`js
// Call Stack — стек вызовов функций
// Task Queue — очередь задач (callbacks, таймеры и др.)
\`\`\`

- Особенности:
- ✔ Когда стек пуст, Event Loop берет задачи из очереди и выполняет их
- ✔ Позволяет JS не блокироваться, несмотря на синхронность
- ✔ Основной принцип: выполнять задачи по очереди, не прерывая текущие вызовы`
                },
                {
                    title: 'Microtasks и Macrotasks',
                    text: `\`\`\`js
// Microtasks — промисы, process.nextTick (Node.js)
// Macrotasks — setTimeout, setInterval, I/O операции
\`\`\`

- Особенности:
- ✔ Microtasks выполняются сразу после текущей задачи и перед Macrotasks
- ✔ Это позволяет создавать эффективные асинхронные цепочки
- ✔ Правильное понимание порядка выполнения важно для оптимизации`
                }
            ]
        },
        {
            title: '🖥️ Консольные методы',
            items: [
                {
                    title: 'console.log',
                    text: `\`\`\`js
console.log('Сообщение или значение')
// Выводит информацию в консоль
\`\`\`

- Особенности:
- ✔ Используется для обычного вывода
- ✔ Можно выводить несколько аргументов через запятую
- ✔ Не прерывает выполнение`
                },
                {
                    title: 'console.info',
                    text: `\`\`\`js
console.info('Информационное сообщение')
// Выводит информационные сообщения
\`\`\`

- Особенности:
- ✔ Обычно стилизуется иконкой информации
- ✔ Работает аналогично console.log`
                },
                {
                    title: 'console.warn',
                    text: `\`\`\`js
console.warn('Предупреждение')
// Выводит предупреждения
\`\`\`

- Особенности:
- ✔ Выделяется желтым цветом в консоли
- ✔ Помогает заметить потенциальные проблемы`
                },
                {
                    title: 'console.error',
                    text: `\`\`\`js
console.error('Ошибка')
// Выводит ошибки
\`\`\`

- Особенности:
- ✔ Выделяется красным цветом
- ✔ Используется для ошибок и критических сообщений
- ✔ Может показывать стек вызовов`
                },
                {
                    title: 'console.debug',
                    text: `\`\`\`js
console.debug('Отладочная информация')
// Выводит отладочные сообщения
\`\`\`

- Особенности:
- ✔ Часто скрыт по умолчанию в консоли браузера
- ✔ Используется для подробной отладки`
                },
                {
                    title: 'console.table',
                    text: `\`\`\`js
console.table([{name: 'John', age: 30}, {name: 'Jane', age: 25}])
// Выводит массивы или объекты в табличном виде
\`\`\`

- Особенности:
- ✔ Удобно для визуального представления данных
- ✔ Позволяет быстро сравнивать элементы`
                },
                {
                    title: 'console.group и console.groupEnd',
                    text: `\`\`\`js
console.group('Группа логов')
console.log('Лог внутри группы')
console.groupEnd()
// Создает свернутую группу логов
\`\`\`

- Особенности:
- ✔ Помогает структурировать вывод
- ✔ Группы можно сворачивать и разворачивать`
                },
                {
                    title: 'console.time и console.timeEnd',
                    text: `\`\`\`js
console.time('timer')
// код, который нужно замерить
console.timeEnd('timer')
// Выводит время выполнения кода между вызовами
\`\`\`

- Особенности:
- ✔ Используется для измерения производительности`
                }
            ]
        },
    ],
    [keysMap.Vue]: [
        {
            title: '🖖 Vue — директивы',
            text: `- **v-if** – Условный рендеринг элемента (если условие true — отрисовывается)
- **v-else-if** – Дополнительное условие для v-if (аналог else if)
- **v-else** – Блок, выполняющийся если все предыдущие v-if / v-else-if — false
- **v-show** – Показывает/скрывает элемент через display: none (не удаляет из DOM)
- **v-for** – Цикл по массиву или объекту (пример: v-for="(item, index) in items")
- **v-bind** – Привязывает значение к атрибуту (пример: :src="img")
- **:** – Сокращение для v-bind (пример: :href="link")
- **v-model** – Двусторонняя привязка данных (для input, select, textarea и компонентов)
- **v-on** – Обработка событий (пример: v-on:click="handleClick")
- **@** – Сокращение для v-on (пример: @click="handleClick")
- **v-slot** – Определяет слот и его имя в компоненте (пример: v-slot:header)
- **#** – Сокращение для v-slot (пример: #header)
- **v-pre** – Пропускает компиляцию внутри элемента (отображает как есть)
- **v-cloak** – Скрывает элемент до полной инициализации Vue (обычно с CSS)
- **v-once** – Рендерит элемент только один раз и больше не обновляет его`
        },
        {
            title: '⚙️ Vue — хуки жизненного цикла',
            items: [
                {
                    title: 'watch – Следит за изменением значения и выполняет реакцию',
                    text: `\`\`\`js
const props = defineProps({ value: String })

watch(
  () => props.value,
  (newVal, oldVal) => {
    console.log('value изменился с', oldVal, 'на', newVal)
    // Реакция на изменение
  }
)
\`\`\``
                },
                {
                    title: 'onMounted – Выполняется один раз при монтировании компонента',
                    text: `\`\`\`js
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Компонент смонтирован')
})
\`\`\``
                },
                {
                    title: 'onUnmounted – Срабатывает при уничтожении компонента (например, для очистки таймеров)',
                    text: `\`\`\`js
import { onUnmounted } from 'vue'

onUnmounted(() => {
  console.log('Компонент удалён')
})
\`\`\``
                },
                {
                    title: 'computed – Создаёт вычисляемое свойство с кэшированием. Автоматически обновляется при изменении зависимостей',
                    text: `\`\`\`js
import { computed, ref } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)

// doubleCount.value меняется автоматически при изменении count.value
\`\`\``
                },
                {
                    title: 'onBeforeMount – Вызывается перед монтированием компонента',
                    text: `\`\`\`js
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  console.log('Компонент скоро будет смонтирован')
})
\`\`\``
                },
                {
                    title: 'onUpdated – Вызывается после каждого обновления DOM компонента',
                    text: `\`\`\`js
import { onUpdated } from 'vue'

onUpdated(() => {
  console.log('Компонент обновился')
})
\`\`\``
                },
                {
                    title: 'onBeforeUnmount – Вызывается перед удалением компонента из DOM',
                    text: `\`\`\`js
import { onBeforeUnmount } from 'vue'

onBeforeUnmount(() => {
  console.log('Компонент будет удалён')
})
\`\`\``
                },
                {
                    title: 'onActivated – Вызывается, когда keep-alive компонент активируется',
                    text: `\`\`\`js
import { onActivated } from 'vue'

onActivated(() => {
  console.log('Компонент активирован')
})
\`\`\``
                },
                {
                    title: 'onDeactivated – Вызывается, когда keep-alive компонент деактивируется',
                    text: `\`\`\`js
import { onDeactivated } from 'vue'

onDeactivated(() => {
  console.log('Компонент деактивирован')
})
\`\`\``
                }
            ]
        }

    ],
    [keysMap.Nuxt]: [],
    [keysMap.Links]: [
        {
            title: '📦 CSS & JS: библиотеки, шпаргалки, инструменты',
            text: `
- [Tailwind Docs](https://tailwindcss.com/docs/text-align)
- [Sprite Generator](https://svgsprit.es)
- [Favicon Generator](https://realfavicongenerator.net)
- [CSS Cheatsheet](https://htmlcheatsheet.com/css/)
- [JS Cheatsheet (OverAPI)](https://overapi.com/javascript)
- [HTML Cheatsheet (OverAPI)](https://overapi.com/html)
- [CSS Cheatsheet (OverAPI)](https://overapi.com/css)
- [Doka JS Guide](https://doka.guide/js/)
- [CSS Grid Guide](https://grid.malven.co)
- [CSS Snippets](https://my-js.org/docs/other/snippets-css)
- [CSS Animation Easing](https://easings.net/en#/)
- [Base64 Image Converter](https://www.base64-image.de)
- [JS Обфускация (Habr)](https://habr.com/ru/post/533954/)
- [JS Обфускатор Webfanat](https://webfanat.com/obfuscator/)
`
        },
        {
            title: '⚙️ Инструменты и тулзы',
            text: `
- [CSS Easing Generator](https://tools.webdevpuneet.com/css-easing-generator/)
- [Настройка VS Code](https://webdesign-master.ru/blog/tools/vscode.html)
- [Оптимизация видео для сайтов](https://www.comss.ru/page.php?id=6780)
`
        },
        {
            title: '📈 Метрики и аналитика',
            text: `
- [Google Analytics Setup](https://support.google.com/analytics/answer/10269537?ref_topic=1009620)
- [Яндекс Метрика через GTM](https://ppc.world/articles/kak-ustanovit-schetchik-metriki-na-sayt-s-pomoschyu-google-tag-manager/)
`
        },
        {
            title: '🎠 Слайдеры, анимации и UI',
            text: `
- [Подборка слайдеров (3D и др.)](https://atuin.ru/blog/slajdery-i-karuseli/)
- [Интересное по тегу 3D](https://atuin.ru/blog/tag/3d/)
- [Плавное появление страницы](https://snipp.ru/jquery/smooth-pages)
- [Слайдер без JS (Scroll Snap)](https://tproger.ru/articles/css-scroll-snap-moshhnoe-svojstvo-dlja-sozdanija-prokruchivaemyh-kontejnerov-bez-javascript/)
- [Popup на чистом JS](https://webdevtips.pro/js/pure-js-popup/)
`
        },
        {
            title: '💠 Прелоадеры и курсоры',
            text: `
- [Простой прелоадер](https://smartlanding.biz/kak-sdelat-preloader.html)
- [Коллекция прелоадеров (Spinkit)](https://tobiasahlin.com/spinkit/)
- [Как изменить курсор (Pandoge)](https://www.pandoge.com/stati-i-sovety/kak-izmenit-standartnyy-kursor-na-sayte)
- [Изменение курсора (mojwp)](https://mojwp.ru/cursor-css.html)
`
        },
        {
            title: '🧩 Стилизация элементов',
            text: `
- [Стилизация Checkbox](https://computy.ru/blog/ispolzovanie-i-stilizacziya-input-checkbox/)
`
        },
        {
            title: '🧠 ИИ, генераторы, помощники',
            text: `
- [DuckDuckGo Chat AI](https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1)
- [GPT China (HuggingFace)](https://huggingface.co/spaces/Qwen/Qwen2.5-Coder-Artifacts)
`
        }
    ],
    [keysMap.Hotkeys]: [
        {
            title: '🔄 Редактирование и работа с кодом',
            text: `- **Ctrl + D** – Дублировать строку/блок
- **Ctrl + Y** – Удалить строку
- **Shift + Alt + ↑ / ↓** – Переместить строку вверх/вниз
- **Ctrl + ]** → перейти к закрывающей скобке
- **Ctrl + [** → перейти к открывающей скобке
- **Ctrl + Alt + L** – Форматировать код
- **Ctrl + /** – Закомментировать строку
- **Ctrl + Shift + /** – Закомментировать блок
- **Ctrl + W / Ctrl + Shift + W** – Выделить следующую/предыдущую часть кода`
        },
        {
            title: '✏️ Рефакторинг и переименование',
            text: `- **Shift + F6** – Переименовать файл, переменную, функцию
- **Alt + Delete** – Безопасное удаление (с поиском использований)
- **F6** – Переместить файл/класс
- **Ctrl + Alt + Shift + T** – Показать рефакторинги`
        },
        {
            title: '💻 Терминал, окна, вкладки',
            text: `- **Alt + F12** – Открыть терминал
- **Alt + ← / →** – Переключить вкладку (вперёд/назад)
- **Ctrl + F4** – Закрыть вкладку`
        },
        {
            title: '🔍 Навигация',
            text: `- **Ctrl + Shift + N** – Переход к файлу
- **Ctrl + Alt + Shift + N** – Переход к символу (функция, переменная)
- **Ctrl + B** – Переход к определению
- **Alt + F7** – Поиск использования
- **Ctrl + E** – Недавние файлы
- **Ctrl + Shift + Backspace** – Последнее место редактирования`
        },
        {
            title: '🚀 Навигация по структуре',
            text: `- **Ctrl + F12** – Показать структуру файла
- **Alt + Enter** – Открыть быстрые действия
- **Ctrl + Q** – Быстрая документация`
        },
        {
            title: '🧠 Поиск',
            text: `- **Ctrl + Shift + F** – Поиск по проекту
- **Ctrl + R** – Поиск и замена
- **Ctrl + F** – Поиск в файле`
        },
        {
            title: '🧪 Запуск и дебаг',
            text: `- **Shift + F10** – Запустить
- **Ctrl + F2** – Остановить
- **Shift + F9** – Перезапустить`
        },
        {
            title: '🌈 Прочее',
            text: `- **Ctrl + Shift + A** – Показать все доступные горячие клавиши
- **Ctrl + Shift + A** – Переопределить шорткаты (Find Action)`
        }
    ],
}

export {content}