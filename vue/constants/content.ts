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
            title: '📌 Rest и Spread операторы в JavaScript',
            items: [
                {
                    title: 'Spread – Распаковка значений',
                    text: `\`\`\`js
const arr = [1, 2, 3]
const newArr = [...arr, 4, 5] // [1, 2, 3, 4, 5]

const obj = { name: 'Roman' }
const copy = { ...obj, age: 25 } // { name: 'Roman', age: 25 }
\`\`\`

- ✔ Распаковывает массивы, объекты, строки и другие итерируемые значения
- ✔ Упрощает копирование и объединение данных
- ✔ Можно использовать в аргументах функций:
  \`\`\`js
  Math.max(...[1, 5, 3]) // 5
  \`\`\`
- ✔ Работает справа от знаков \`=\` \`()\` и в литералах \`[]\` \`{}\`
- ✘ При копировании объектов не делает глубокую копию
- ✘ В массивах важен порядок элементов`
                },
                {
                    title: 'Rest – Сбор оставшихся значений',
                    text: `\`\`\`js
function greet(greeting, ...names) {
  console.log(greeting)  // 'Привет'
  console.log(names)     // ['Аня', 'Петя']
}

greet('Привет', 'Аня', 'Петя')

const user = { id: 1, name: 'Roman', role: 'admin' }
const { id, ...rest } = user

console.log(id)   // 1
console.log(rest) // { name: 'Roman', role: 'admin' }
\`\`\`

- ✔ Собирает «остатки» аргументов или свойств
- ✔ Полезен в деструктуризации и функциях с переменным числом параметров
- ✔ Работает только слева при деструктуризации или в параметрах функций
- ✘ Не может стоять не последним
- ✘ В объектах нельзя переименовывать через rest`
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
        {
            title: '⚙️ Методы (String / Number / JSON / Boolean)',
            items: [
                {
                    title: '🧵 Методы строк - String',
                    items: [
                        {
                            title: 'slice – Вырезать часть строки',
                            text: `\`\`\`js
const str = 'Hello world'
str.slice(0, 5) // 'Hello'
\`\`\`
- ✔ Не изменяет исходную строку  
- ✔ Удобен для получения подстроки  
- ✘ Индексы могут запутать`
                        },
                        {
                            title: 'substring – Альтернативный срез',
                            text: `\`\`\`js
const str = 'Hello world'
str.substring(0, 5) // 'Hello'
\`\`\`
- ✔ Аналог slice, но не поддерживает отрицательные индексы  
- ✔ Удобен для базовых срезов`
                        },
                        {
                            title: 'indexOf – Поиск позиции',
                            text: `\`\`\`js
const str = 'Hello world'
str.indexOf('world') // 6
\`\`\`
- ✔ Возвращает индекс первого совпадения  
- ✔ -1, если не найдено`
                        },
                        {
                            title: 'includes – Проверка наличия подстроки',
                            text: `\`\`\`js
const str = 'Hello world'
str.includes('world') // true
\`\`\`
- ✔ Возвращает true/false  
- ✔ Удобен для проверки`
                        },
                        {
                            title: 'replace – Замена части строки',
                            text: `\`\`\`js
const str = 'Hello world'
str.replace('world', 'Vue') // 'Hello Vue'
\`\`\`
- ✔ Возвращает новую строку  
- ✔ Меняет только первое вхождение (если без флага g)`
                        },
                        {
                            title: 'toLowerCase / toUpperCase – Изменение регистра',
                            text: `\`\`\`js
const str = 'Hello'
str.toLowerCase() // 'hello'
str.toUpperCase() // 'HELLO'
\`\`\`
- ✔ Не меняют исходную строку  
- ✔ Удобны для нормализации`
                        },
                        {
                            title: 'trim – Удаление пробелов',
                            text: `\`\`\`js
const str = '  hello  '
str.trim() // 'hello'
\`\`\`
- ✔ Удаляет пробелы с начала и конца`
                        },
                        {
                            title: 'split – Разделение строки',
                            text: `\`\`\`js
const str = 'a,b,c'
str.split(',') // ['a', 'b', 'c']
\`\`\`
- ✔ Преобразует строку в массив по разделителю`
                        },
                        {
                            title: 'charAt – Получить символ по индексу',
                            text: `\`\`\`js
const str = 'Hello'
str.charAt(1) // 'e'
\`\`\`
- ✔ Возвращает символ строки по индексу`
                        },
                        {
                            title: 'Редко используемые методы',
                            items: [
                                {
                                    title: 'startsWith – Проверка начала строки',
                                    text: `\`\`\`js
const str = 'Hello world'
str.startsWith('Hello') // true
\`\`\`
- ✔ Проверяет, начинается ли строка с подстроки`
                                },
                                {
                                    title: 'endsWith – Проверка окончания строки',
                                    text: `\`\`\`js
const str = 'Hello world'
str.endsWith('world') // true
\`\`\`
- ✔ Проверяет, заканчивается ли строка подстрокой`
                                },
                                {
                                    title: 'repeat – Повторение строки',
                                    text: `\`\`\`js
const str = 'ha'
str.repeat(3) // 'hahaha'
\`\`\`
- ✔ Повторяет строку заданное количество раз`
                                },
                                {
                                    title: 'padStart – Дополнение слева',
                                    text: `\`\`\`js
const str = '5'
str.padStart(3, '0') // '005'
\`\`\`
- ✔ Добавляет символы в начало строки до нужной длины`
                                },
                                {
                                    title: 'padEnd – Дополнение справа',
                                    text: `\`\`\`js
const str = '5'
str.padEnd(3, '0') // '500'
\`\`\`
- ✔ Добавляет символы в конец строки до нужной длины`
                                },
                                {
                                    title: 'match – Поиск по регулярному выражению',
                                    text: `\`\`\`js
const str = 'abc123'
str.match(/[0-9]+/) // ['123']
\`\`\`
- ✔ Возвращает совпадения по регулярному выражению`
                                },
                                {
                                    title: 'search – Поиск индекса по регулярному выражению',
                                    text: `\`\`\`js
const str = 'abc123'
str.search(/[0-9]+/) // 3
\`\`\`
- ✔ Возвращает индекс первого совпадения`
                                },
                                {
                                    title: 'localeCompare – Сравнение строк с учётом локали',
                                    text: `\`\`\`js
const str1 = 'a'
const str2 = 'b'
str1.localeCompare(str2) // -1
\`\`\`
- ✔ Используется для сортировки с учётом локали`
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '🔢 Методы чисел - Number',
                    items: [
                        {
                            title: 'toFixed – Формат числа с фиксированной точностью',
                            text: `\`\`\`js
const num = 3.14159
num.toFixed(2) // '3.14'
\`\`\`
- ✔ Возвращает строку  
- ✔ Удобен для форматирования`
                        },
                        {
                            title: 'toString – Преобразование в строку',
                            text: `\`\`\`js
const num = 255
num.toString(16) // 'ff'
\`\`\`
- ✔ Позволяет указать систему счисления`
                        },
                        {
                            title: 'parseInt – Парсинг целого числа из строки',
                            text: `\`\`\`js
parseInt('123px') // 123
\`\`\`
- ✔ Игнорирует символы после числа  
- ✔ Второй аргумент — основание системы счисления`
                        },
                        {
                            title: 'parseFloat – Парсинг числа с плавающей точкой',
                            text: `\`\`\`js
parseFloat('3.14abc') // 3.14
\`\`\`
- ✔ Аналогично parseInt для дробных чисел`
                        },
                        {
                            title: 'isNaN – Проверка, не является ли значение NaN',
                            text: `\`\`\`js
isNaN('hello') // true
isNaN(123) // false
\`\`\`
- ✔ Проверяет, является ли значение нечислом`
                        },
                        {
                            title: 'Number.isFinite – Проверка конечности числа',
                            text: `\`\`\`js
Number.isFinite(123) // true
Number.isFinite(Infinity) // false
\`\`\`
- ✔ Более надежная проверка, чем глобальная isFinite`
                        },
                        {
                            title: 'Number.isInteger – Проверка целого числа',
                            text: `\`\`\`js
Number.isInteger(123) // true
Number.isInteger(3.14) // false
\`\`\`
- ✔ Проверяет, что число — целое`
                        },
                        {
                            title: 'Редко используемые методы',
                            items: [
                                {
                                    title: 'Number.isNaN – Надёжная проверка NaN',
                                    text: `\`\`\`js
Number.isNaN(NaN) // true
Number.isNaN('abc') // false
\`\`\`
- ✔ Отличается от глобального isNaN, проверяет только NaN`
                                },
                                {
                                    title: 'toPrecision – Формат числа с указанной точностью',
                                    text: `\`\`\`js
const num = 3.14159
num.toPrecision(3) // '3.14'
\`\`\`
- ✔ Возвращает строку с числом в нужной точности`
                                },
                                {
                                    title: 'Math.round / Math.floor / Math.ceil – Округление',
                                    text: `\`\`\`js
Math.round(3.5) // 4      // Округляет до ближайшего целого числа (0.5 и выше вверх)
Math.round(3.4) // 3

Math.floor(3.9) // 3      // Округляет вниз до ближайшего целого (в меньшую сторону)

Math.ceil(3.1)  // 4      // Округляет вверх до ближайшего целого (в большую сторону)
\`\`\`
- ✔ Math.round: округляет до ближайшего целого числа  
- ✔ Math.floor: округляет вниз, всегда к меньшему целому  
- ✔ Math.ceil: округляет вверх, всегда к большему целому`
                                },
                                {
                                    title: 'Math.random – Случайное число',
                                    text: `\`\`\`js
Math.random() // 0.123456789 (пример)
\`\`\`
- ✔ Генерирует случайное число от 0 до 1`
                                },
                                {
                                    title: 'Math.max / Math.min – Максимум и минимум',
                                    text: `\`\`\`js
Math.max(1, 5, 3) // 5
Math.min(1, 5, 3) // 1
\`\`\`
- ✔ Быстро находят максимальное или минимальное значение`
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '🧩 Методы JSON',
                    items: [
                        {
                            title: 'JSON.stringify – Преобразование объекта в JSON строку',
                            text: `\`\`\`js
const obj = { a: 1, b: 2 }
JSON.stringify(obj) // '{"a":1,"b":2}'
\`\`\`
- ✔ Используется для отправки данных на сервер  
- ✔ Сериализация объектов`
                        },
                        {
                            title: 'JSON.parse – Преобразование JSON строки в объект',
                            text: `\`\`\`js
const json = '{"a":1,"b":2}'
JSON.parse(json) // { a: 1, b: 2 }
\`\`\`
- ✔ Десериализация строк`
                        }
                    ]
                },
                {
                    title: '⚡️ Булевые методы - Boolean',
                    items: [
                        {
                            title: 'Boolean – Преобразование в логическое значение',
                            text: `\`\`\`js
Boolean(0) // false
Boolean("text") // true
\`\`\`
- ✔ Удобен для явного преобразования`
                        },
                        {
                            title: '!! (Двойное отрицание)',
                            text: `\`\`\`js
!!0 // false
!!"text" // true
\`\`\`
- ✔ Быстрый способ преобразовать в Boolean`
                        }
                    ]
                },
                        {
                            title: 'typeof – Определение типа',
                            text: `\`\`\`js
typeof 123 // 'number'
typeof 'abc' // 'string'
typeof {} // 'object'
\`\`\`
- ✔ Быстрая проверка типа значения`
                        },
                        {
                            title: 'eval – Выполнение строки как кода (не рекомендуется)',
                            text: `\`\`\`js
eval('2 + 2') // 4
\`\`\`
- ⚠️ Опасно, может привести к уязвимостям`
                        }
            ]
        },
    ],
    [keysMap.Objects]: [
        {
            "title": "📊 Методы объекта",
            "items": [
                {
                    "title": "Object.keys – Получение ключей объекта",
                    "text": "```js\nconst obj = { a: 1, b: 2 }\nconst keys = Object.keys(obj) // ['a', 'b']\n```\n\n- ✔ Возвращает массив строк с ключами объекта  \n- ✔ Удобен для перебора ключей  \n- ✘ Не включает символы или неперечисляемые свойства\n\n- ✅ Не мутирует объект\n"
                },
                {
                    "title": "Object.values – Получение значений объекта",
                    "text": "```js\nconst obj = { a: 1, b: 2 }\nconst values = Object.values(obj) // [1, 2]\n```\n\n- ✔ Возвращает массив значений объекта  \n- ✔ Удобен для перебора значений  \n- ✘ Не возвращает ключи\n\n- ✅ Не мутирует объект\n"
                },
                {
                    "title": "Object.entries – Получение пар [ключ, значение]",
                    "text": "```js\nconst obj = { a: 1, b: 2 }\nconst entries = Object.entries(obj) // [['a', 1], ['b', 2]]\n```\n\n- ✔ Возвращает массив массивов с парами ключ-значение  \n- ✔ Удобен для перебора и деструктуризации  \n- ✘ Не включает неперечисляемые свойства\n\n- ✅ Не мутирует объект\n"
                },
                {
                    "title": "Object.assign – Копирование свойств объекта",
                    "text": "```js\nconst target = { a: 1 }\nconst source = { b: 2 }\nObject.assign(target, source) // { a: 1, b: 2 }\n```\n\n- ✔ Копирует свойства из одного или нескольких объектов в целевой  \n- ✔ Используется для слияния объектов  \n- ✘ Мутирует первый (целевой) объект\n\n- ✅ Быстрое слияние объектов\n- ❌ Мутирует целевой объект\n"
                },
                {
                    "title": "Object.freeze – Заморозка объекта",
                    "text": "```js\nconst obj = { a: 1 }\nObject.freeze(obj)\nobj.a = 2 // не изменится\n```\n\n- ✔ Делает объект неизменяемым (поверхностно)  \n- ✔ Защищает от изменений свойств  \n- ✘ Не предотвращает изменения вложенных объектов\n\n- ✅ Защищает от мутаций\n- ⚠️ Поверхностная заморозка"
                },
                {
                    "title": "Object.seal – Запечатывание объекта",
                    "text": "```js\nconst obj = { a: 1 }\nObject.seal(obj)\nobj.a = 2 // изменится\nobj.b = 3 // добавление невозможно\n```\n\n- ✔ Запрещает добавление и удаление свойств  \n- ✔ Позволяет изменять существующие свойства  \n- ✘ Не защищает от изменения вложенных объектов\n\n- ✅ Запрещает добавлять/удалять свойства\n- ⚠️ Позволяет изменять значения существующих"
                },
                {
                    "title": "Object.hasOwn – Проверка наличия ключа",
                    "text": "```js\nconst obj = { a: 1 }\nObject.hasOwn(obj, 'a') // true\n```\n\n- ✔ Проверяет, есть ли свойство именно у объекта, а не в прототипе  \n- ✔ Альтернатива obj.hasOwnProperty\n\n- ✅ Не мутирует объект\n"
                },
                {
                    "title": "Object.getOwnPropertyDescriptor – Получение дескриптора свойства",
                    "text": "```js\nconst obj = { a: 1 }\nconst desc = Object.getOwnPropertyDescriptor(obj, 'a')\n```\n\n- ✔ Возвращает описание свойства (value, writable, enumerable, configurable)  \n- ✔ Позволяет узнать, можно ли менять или удалять свойство\n\n- ✅ Не мутирует объект\n"
                },
                {
                    "title": "Object.getPrototypeOf – Получение прототипа объекта",
                    "text": "```js\nconst proto = Object.getPrototypeOf({})\n```\n\n- ✔ Возвращает прототип объекта  \n- ✔ Позволяет работать с цепочкой прототипов\n\n- ✅ Не мутирует объект\n"
                },
                {
                    "title": "Object.is – Проверка строгого равенства",
                    "text": "```js\nObject.is(NaN, NaN) // true\nObject.is(0, -0) // false\n```\n\n- ✔ Точное сравнение значений (лучше, чем === в некоторых случаях)  \n- ✔ Работает корректно с NaN и -0\n\n- ✅ Не мутирует данные\n"
                },
                {
                    "title": "Object.fromEntries – Создание объекта из пар [ключ, значение]",
                    "text": "```js\nconst entries = [['a', 1], ['b', 2]]\nconst obj = Object.fromEntries(entries) // { a: 1, b: 2 }\n```\n\n- ✔ Создает объект из массива пар ключ-значение  \n- ✔ Удобен для обратной трансформации после Object.entries\n\n- ✅ Не мутирует входные данные\n"
                },
                {
                    "title": "Object.defineProperty – Определение свойства с дескриптором",
                    "text": "```js\nconst obj = {}\nObject.defineProperty(obj, 'a', {\n  value: 1,\n  writable: false\n})\n```\n\n- ✔ Позволяет создать или изменить свойство с настройками (writable, enumerable и т.д.)  \n- ✔ Контролирует доступ к свойствам\n\n- ✅ Управляет свойствами объекта\n- ❌ Мутирует объект\n"
                },
                {
                    "title": "Object.defineProperties – Определение нескольких свойств",
                    "text": "```js\nconst obj = {}\nObject.defineProperties(obj, {\n  a: { value: 1, writable: true },\n  b: { value: 2 }\n})\n```\n\n- ✔ Определяет несколько свойств одновременно  \n- ✔ Позволяет контролировать свойства\n\n- ✅ Удобно для настройки объекта\n- ❌ Мутирует объект\n"
                }
            ]
        },
    ],
    [keysMap.Arrays]: [
        {
            "title": "📊 Методы массива",
            "items": [
                {
                    "title": "push – Добавление в конец",
                    "text": "```js\nconst arr = [1, 2]\narr.push(3) // [1, 2, 3]\n```\n\n- ✔ Добавляет один или несколько элементов в конец  \n- ✔ Возвращает новую длину  \n- ✘ Не возвращает сам массив (для чейнинга не удобен)\n\n- ✅ Быстрый способ добавить элемент в конец\n- ❌ Мутирует исходный массив"
                },
                {
                    "title": "map – Преобразование значений",
                    "text": "```js\nconst nums = [1, 2, 3]\nconst doubled = nums.map(n => n * 2)\n```\n\n- ✔ Не изменяет исходный массив  \n- ✔ Возвращает новый массив той же длины  \n- ✘ Не пропускает пустые ячейки\n\n- ✅ Не мутирует массив — возвращает новый\n"
                },
                {
                    "title": "filter – Фильтрация по условию",
                    "text": "```js\nconst nums = [1, 2, 3, 4]\nconst even = nums.filter(n => n % 2 === 0)\n```\n\n- ✔ Убирает ненужные элементы по условию  \n- ✔ Возвращает новый массив  \n- ✘ Перебирает весь массив (даже если найдено нужное)\n\n- ✅ Возвращает новый массив без мутаций\n"
                },
                {
                    "title": "forEach – Перебор элементов",
                    "text": "```js\nconst arr = [1, 2, 3]\narr.forEach(n => console.log(n))\n```\n\n- ✔ Удобен для побочных эффектов (лог, вызов функций)  \n- ✔ Понятен для чтения  \n- ✘ Нельзя прервать (нет return/break)  \n- ✘ Не возвращает результат\n\n- ✅ Не мутирует массив\n"
                },
                {
                    "title": "includes – Проверка значения",
                    "text": "```js\nconst arr = [1, 2, 3]\narr.includes(2) // true\n```\n\n- ✔ Удобен для простой проверки наличия  \n- ✔ Работает по значению (===)  \n- ✘ Не поддерживает условие (в отличие от some)\n\n- ✅ Не мутирует массив\n"
                },
                {
                    "title": "find – Первый элемент по условию",
                    "text": "```js\nconst users = [{ name: 'Roman' }, { name: 'Anna' }]\nconst result = users.find(u => u.name === 'Anna')\n```\n\n- ✔ Возвращает первый найденный объект  \n- ✔ Удобен при работе с массивом объектов  \n- ✘ Не возвращает все совпадения  \n- ✘ Возвращает undefined, если не найдено\n\n- ✅ Не мутирует массив\n"
                },
                {
                    "title": "some – Хоть один удовлетворяет",
                    "text": "```js\nconst arr = [1, 2, 3]\narr.some(n => n > 2) // true\n```\n\n- ✔ Проверяет хотя бы одно совпадение  \n- ✔ Быстро останавливается при первом true  \n- ✘ Не возвращает сам элемент\n\n- ✅ Не мутирует массив\n"
                },
                {
                    "title": "every – Все соответствуют",
                    "text": "```js\nconst arr = [1, 2, 3]\narr.every(n => n > 0) // true\n```\n\n- ✔ Проверяет, удовлетворяют ли все элементы  \n- ✔ Удобен для валидации  \n- ✘ Останавливается при первом несоответствии\n\n- ✅ Не мутирует массив\n"
                },
                {
                    "title": "pop – Удаление с конца",
                    "text": "```js\nconst arr = [1, 2, 3]\narr.pop() // 3\n```\n\n- ✔ Удаляет последний элемент и возвращает его  \n- ✔ Удобен для стека  \n- ✘ Изменяет оригинальный массив\n\n- ✅ Удобен для стека (LIFO)\n- ❌ Мутирует исходный массив"
                },
                {
                    "title": "shift – Удаление с начала",
                    "text": "```js\nconst arr = [1, 2, 3]\narr.shift() // 1\n```\n\n- ✔ Удаляет первый элемент и возвращает его  \n- ✔ Используется в очередях  \n- ✘ Изменяет массив  \n- ✘ Медленнее из-за сдвига остальных элементов\n\n- ✅ Удобен для очередей (FIFO)\n- ❌ Мутирует исходный массив\n- ⚠️ Может быть менее производительным на больших массивах"
                },
                {
                    "title": "unshift – Добавление в начало",
                    "text": "```js\nconst arr = [2, 3]\narr.unshift(1) // [1, 2, 3]\n```\n\n- ✔ Добавляет элементы в начало  \n- ✔ Возвращает новую длину  \n- ✘ Изменяет массив  \n- ✘ Менее производителен на больших массивах\n\n- ✅ Быстро добавляет в начало\n- ❌ Мутирует исходный массив\n- ⚠️ Менее эффективен на больших массивах"
                },
                {
                    "title": "reduce – Агрегация значений",
                    "text": "```js\nconst arr = [1, 2, 3, 4]\narr.reduce((acc, val) => acc + val, 0) // 10\n```\n\n- ✔ Собирает значение из массива (сумма, объект, строка)  \n- ✔ Универсален для продвинутой логики  \n- ✘ Требует понимания принципа работы аккумулятора\n\n- ✅ Не мутирует массив\n"
                },
                {
                    "title": "slice – Копия части массива",
                    "text": "```js\nconst arr = [1, 2, 3, 4]\narr.slice(1, 3) // [2, 3]\n```\n\n- ✔ Не изменяет оригинальный массив  \n- ✔ Удобен для создания копий и пагинации  \n- ✘ Поверхностное копирование — вложенные объекты остаются ссылками\n\n- ✅ Не мутирует массив\n- ⚠️ Копия поверхностная"
                },
                {
                    "title": "sort – Сортировка",
                    "text": "```js\nconst arr = [3, 1, 2]\narr.sort((a, b) => a - b) // [1, 2, 3]\n```\n\n- ✔ Работает с числами и строками  \n- ✔ Позволяет задать свою функцию сортировки  \n- ✘ Изменяет оригинальный массив  \n- ✘ Без функции сортирует как строки (по Unicode)\n\n- ✅ Гибкий способ сортировки\n- ❌ Мутирует исходный массив\n- ⚠️ По умолчанию сортирует как строки"
                },
                {
                    "title": "splice – Вырезание / вставка",
                    "text": "```js\nconst arr = [1, 2, 3, 4]\narr.splice(1, 2) // [2, 3]\n```\n\n- ✔ Удаление и вставка в массив  \n- ✔ Гибкий по параметрам  \n- ✘ Изменяет исходный массив  \n- ✘ Менее читаем, чем slice/filter\n\n- ✅ Гибкий для удаления/вставки\n- ❌ Мутирует исходный массив\n- ⚠️ Сложнее для понимания"
                },
                {
                    "title": "concat – Объединение массивов",
                    "text": "```js\nconst arr1 = [1, 2]\nconst arr2 = [3, 4]\narr1.concat(arr2) // [1, 2, 3, 4]\n```\n\n- ✔ Не изменяет оригиналы  \n- ✔ Удобен для объединения нескольких массивов  \n- ✘ Предпочтение отдаётся спред-синтаксису: [...arr1, ...arr2]\n\n- ✅ Не мутирует исходные массивы\n"
                },
                {
                    "title": "flat – Разворачивание вложенности",
                    "text": "```js\nconst arr = [1, [2, [3]]]\narr.flat(2) // [1, 2, 3]\n```\n\n- ✔ Удаляет вложенность на заданную глубину  \n- ✔ Удобен для массивов из массивов  \n- ✘ Не работает с объектами  \n- ✘ Поддерживается не во всех старых браузерах\n\n- ✅ Не мутирует массив\n- ⚠️ Поддержка браузеров"
                },
                {
                    "title": "reverse – Переворот массива",
                    "text": "```js\nconst arr = [1, 2, 3]\narr.reverse() // [3, 2, 1]\n```\n\n- ✔ Быстро разворачивает массив  \n- ✔ Прост в использовании  \n- ✘ Изменяет оригинальный массив\n\n- ✅ Быстрый способ инвертировать порядок\n- ❌ Мутирует исходный массив"
                },
                {
                    "title": "findIndex – Индекс по условию",
                    "text": "```js\nconst arr = [10, 20, 30]\narr.findIndex(n => n === 20) // 1\n```\n\n- ✔ Находит индекс по условию  \n- ✔ Удобен для удаления по позиции  \n- ✘ Возвращает -1, если ничего не найдено\n\n- ✅ Не мутирует массив\n- ✅ Возвращает индекс или -1"
                },
                {
                    "title": "join – Склейка в строку",
                    "text": "```js\nconst arr = ['a', 'b', 'c']\narr.join('-') // 'a-b-c'\n```\n\n- ✔ Объединяет все элементы в строку  \n- ✔ Позволяет задать разделитель  \n- ✘ Все элементы преобразуются в строки\n\n- ✅ Не мутирует массив\n- ✅ Удобен для создания строк"
                }
            ]
        },
    ],
    [keysMap.Markup]: [
    {
            title: '🧱 Основные HTML-теги',
            items: [
                {
                    title: 'Структура документа и разметка',
                    text: `\`\`\`html
<!DOCTYPE html>      <!-- Определяет тип документа -->
<html>               <!-- Корневой тег документа -->
<head>               <!-- Мета-информация о документе -->
<body>               <!-- Содержимое страницы -->

<header>             <!-- Шапка сайта -->
<main>               <!-- Основное содержимое -->
<footer>             <!-- Подвал сайта -->
<section>            <!-- Раздел контента -->
<article>            <!-- Самостоятельная статья -->
<aside>              <!-- Боковая панель -->
<nav>                <!-- Навигационное меню -->
<template>           <!-- Шаблон для отложенного рендера -->
\`\`\`

- Используются для логичной и семантической структуры страницы`
                },
                {
                    title: 'Текст и заголовки',
                    text: `\`\`\`html
<h1> до <h6>         <!-- Заголовки от самого главного до самого мелкого -->
<p>                  <!-- Абзац -->
<span>               <!-- Встроенный контейнер -->
<strong>             <!-- Важный текст (жирный) -->
<em>                 <!-- Акцентированный текст (курсив) -->
<br>                 <!-- Перенос строки -->
<hr>                 <!-- Горизонтальная линия -->
<blockquote>         <!-- Цитата -->
<pre>               <!-- Предварительно отформатированный текст -->
<code>               <!-- Блок кода -->
<small>              <!-- Мелкий текст -->
<mark>               <!-- Выделенный текст -->
<abbr>               <!-- Аббревиатура -->
<time>               <!-- Дата и/или время -->
\`\`\`

- Используются для форматирования текста и заголовков`
                },
                {
                    title: 'Ссылки и изображения',
                    text: `\`\`\`html
<a href="#">         <!-- Гиперссылка -->
<img src="img.jpg">  <!-- Изображение -->
<picture>            <!-- Альтернативные версии изображения -->
<figure>             <!-- Контейнер для изображения с подписью -->
<figcaption>         <!-- Подпись к изображению -->
\`\`\`

- Отвечают за навигацию и отображение медиа-контента`
                },
                {
                    title: 'Списки',
                    text: `\`\`\`html
<ul>                 <!-- Неупорядоченный список -->
<ol>                 <!-- Упорядоченный список -->
<li>                 <!-- Элемент списка -->
<dl>                 <!-- Список определений -->
<dt>                 <!-- Термин -->
<dd>                 <!-- Определение -->
\`\`\`

- Для создания разных типов списков`
                },
                {
                    title: 'Формы и ввод данных',
                    text: `\`\`\`html
<form>               <!-- Форма -->
<input type="text">  <!-- Поле ввода -->
<textarea>           <!-- Многострочное поле -->
<select>             <!-- Выпадающий список -->
<option>             <!-- Элемент списка -->
<button>             <!-- Кнопка -->
<label>              <!-- Подпись к элементу формы -->
<fieldset>           <!-- Группировка полей формы -->
<legend>             <!-- Заголовок группы -->
\`\`\`

- Используются для создания пользовательского ввода`
                },
                {
                    title: 'Таблицы',
                    text: `\`\`\`html
<table>              <!-- Таблица -->
<thead>              <!-- Заголовок таблицы -->
<tbody>              <!-- Тело таблицы -->
<tfoot>              <!-- Подвал таблицы -->
<tr>                 <!-- Строка таблицы -->
<th>                 <!-- Ячейка заголовка -->
<td>                 <!-- Ячейка данных -->
<caption>            <!-- Название таблицы -->
<colgroup> <col>     <!-- Группировка и стилизация столбцов -->
\`\`\`

- Для отображения табличных данных`
                },
                {
                    title: 'SEO и мета-теги (в <head>)',
                    text: `\`\`\`html
<title>              <!-- Название страницы -->
<meta charset="UTF-8">       <!-- Кодировка -->
<meta name="description">    <!-- Описание страницы -->
<meta name="viewport">       <!-- Адаптивность -->
<link rel="stylesheet">      <!-- Подключение CSS -->
<script src="main.js">       <!-- Подключение JS -->
\`\`\`

- Используются для SEO, адаптивности и подключения ресурсов`
                },
                {
                    title: 'Медиа и интерактивность',
                    text: `\`\`\`html
<video>              <!-- Видеоплеер -->
<audio>              <!-- Аудиоплеер -->
<source>             <!-- Источник медиафайла -->
<iframe>             <!-- Встраиваемый фрейм -->
<canvas>             <!-- Графика через JS -->
<svg>                <!-- Векторная графика -->
<embed>              <!-- Встраивание внешнего ресурса -->
<object>             <!-- Встраивание объектов (например, PDF) -->
\`\`\`

- Для встраивания мультимедиа и динамики`
                },
                {
                    title: 'Служебные и редко используемые',
                    text: `\`\`\`html
<details>            <!-- Раскрывающийся блок -->
<summary>            <!-- Заголовок details -->
<dialog>             <!-- Модальное окно -->
<noscript>           <!-- Содержимое при отключенном JS -->
<slot>               <!-- Слот для Web Components -->
<custom-element>     <!-- Пользовательские теги -->
\`\`\`

- Используются в специфических случаях или для современных API`
                }
            ]
        },
    {
            title: '⚙️ Основные атрибуты HTML-тегов',
            items: [
                {
                    title: 'Глобальные атрибуты',
                    text: `\`\`\`html
id="idName"                <!-- Уникальный идентификатор элемента -->
class="className"          <!-- Классы для стилизации и селекторов -->
style="color: red"         <!-- Встроенные стили -->
title="tooltip text"       <!-- Всплывающая подсказка при наведении -->
hidden                     <!-- Скрывает элемент -->
data-*                     <!-- Пользовательские data-атрибуты -->
tabindex="0"               <!-- Порядок фокусировки -->
lang="en"                  <!-- Язык содержимого элемента -->
\`\`\`

- Работают почти со всеми тегами для базовой настройки и управления`
                },
                {
                    title: 'Атрибуты ссылок <a>',
                    text: `\`\`\`html
href="https://example.com"   <!-- URL перехода по ссылке -->
target="_blank"              <!-- Открыть ссылку в новой вкладке -->
rel="noopener noreferrer"    <!-- Безопасность при target="_blank" -->
download                    <!-- Предлагает скачать файл вместо открытия -->
\`\`\`

- Управляют навигацией и поведением ссылок`
                },
                {
                    title: 'Атрибуты изображений <img> и медиа',
                    text: `\`\`\`html
src="image.jpg"              <!-- Путь к изображению или медиа -->
alt="Описание"               <!-- Текст, если изображение не загрузилось -->
width="300"                  <!-- Ширина изображения в пикселях -->
height="200"                 <!-- Высота изображения в пикселях -->
loading="lazy"               <!-- Ленивое (отложенное) загрузка -->
\`\`\`

- Основные для управления картинками и медиафайлами`
                },
                {
                    title: 'Атрибуты форм и ввода',
                    text: `\`\`\`html
type="text"                  <!-- Тип поля ввода (text, email, password, checkbox и др.) -->
name="username"              <!-- Имя поля для отправки на сервер -->
value="default"              <!-- Значение поля -->
placeholder="Введите текст"  <!-- Подсказка внутри поля -->
required                    <!-- Обязательное для заполнения -->
disabled                    <!-- Заблокировано для ввода -->
readonly                    <!-- Только для чтения -->
checked                     <!-- Для чекбоксов и радио: выбран -->
maxlength="10"              <!-- Максимальное количество символов -->
min="1" max="10"            <!-- Минимальное и максимальное значение для числовых полей -->
step="1"                   <!-- Шаг изменения значения -->
multiple                   <!-- Разрешить множественный выбор (например, для select или файлов) -->
autocomplete="off"         <!-- Отключить автозаполнение -->
form="formId"              <!-- Связать поле с формой по id -->
\`\`\`

- Для настройки поведения форм и полей ввода`
                },
                {
                    title: 'Атрибуты мультимедиа (<video>, <audio>)',
                    text: `\`\`\`html
src="video.mp4"              <!-- Путь к файлу -->
controls                    <!-- Отображать стандартные элементы управления -->
autoplay                   <!-- Автоматически запускать при загрузке -->
loop                       <!-- Повторять воспроизведение -->
muted                      <!-- Без звука -->
preload="auto"             <!-- Предзагрузка медиа -->
poster="poster.jpg"        <!-- Постер (картинка) до воспроизведения видео -->
\`\`\`

- Управляют воспроизведением аудио и видео`
                },
                {
                    title: 'Атрибуты табличных элементов',
                    text: `\`\`\`html
colspan="2"                 <!-- Объединяет ячейки по горизонтали -->
rowspan="3"                 <!-- Объединяет ячейки по вертикали -->
headers="id1 id2"           <!-- Связь ячейки с заголовками для доступности -->
scope="col"                 <!-- Определяет область заголовка (col, row) -->
\`\`\`

- Для управления разметкой таблиц`
                },
                {
                    title: 'Атрибуты iframe',
                    text: `\`\`\`html
src="https://example.com"    <!-- URL встраиваемого контента -->
width="600" height="400"     <!-- Размеры iframe -->
frameborder="0"              <!-- Убирает рамку -->
allowfullscreen              <!-- Разрешает полноэкранный режим -->
loading="lazy"               <!-- Ленивое загружение -->
sandbox                     <!-- Ограничения безопасности (напр. sandbox="allow-scripts") -->
referrerpolicy="no-referrer"<!-- Политика отправки Referer -->
\`\`\`

- Настраивают встраиваемые фреймы`
                },
                {
                    title: 'Другие полезные атрибуты',
                    text: `\`\`\`html
aria-*                      <!-- Атрибуты для доступности (ARIA) -->
role="button"               <!-- Роль элемента для скринридеров -->
contenteditable="true"      <!-- Делает элемент редактируемым -->
draggable="true"            <!-- Позволяет перетаскивать элемент -->
hidden                      <!-- Скрывает элемент -->
tabindex="0"                <!-- Управляет порядком фокуса -->
download                    <!-- Для ссылок: предлагает скачать файл -->
\`\`\`

- Для расширенных возможностей и улучшения UX и доступности`
                }
            ]
        },
    ],
    [keysMap.Styles]: [],
    [keysMap.Browser]: [
        {
            "title": "🌐 Основные методы браузерного API (DOM, события, запросы и др.)",
            "items": [
                {
                    "title": "document.querySelector – Поиск первого элемента по селектору",
                    "text": "```js\nconst button = document.querySelector('.btn-primary')\n```\n\n- ✔ Возвращает первый элемент, соответствующий CSS-селектору  \n- ✔ Очень удобен для быстрого поиска элемента на странице  \n- ✘ Если элемент не найден, возвращает null"
                },
                {
                    "title": "document.querySelectorAll – Поиск всех элементов по селектору",
                    "text": "```js\nconst items = document.querySelectorAll('.list-item')\n```\n\n- ✔ Возвращает статический NodeList всех подходящих элементов  \n- ✔ Можно перебрать циклом или forEach  \n- ✘ NodeList не является полноценным массивом"
                },
                {
                    "title": "document.getElementById – Поиск элемента по id",
                    "text": "```js\nconst header = document.getElementById('main-header')\n```\n\n- ✔ Быстрый доступ к элементу по id  \n- ✔ Возвращает один элемент или null, если не найден"
                },
                {
                    "title": "element.addEventListener – Добавление обработчика события",
                    "text": "```js\nbutton.addEventListener('click', () => {\n  alert('Clicked!')\n})\n```\n\n- ✔ Позволяет слушать события на элементе  \n- ✔ Можно добавить несколько обработчиков на одно событие  \n- ✔ Поддерживает разные типы событий (click, input, scroll и др.)"
                },
                {
                    "title": "element.removeEventListener – Удаление обработчика события",
                    "text": "```js\nfunction onClick() {\n  console.log('Clicked')\n}\nbutton.addEventListener('click', onClick)\nbutton.removeEventListener('click', onClick)\n```\n\n- ✔ Удаляет ранее добавленный обработчик  \n- ✔ Требует ссылку на ту же функцию, что была добавлена"
                },
                {
                    "title": "document.createElement – Создание нового элемента",
                    "text": "```js\nconst div = document.createElement('div')\ndiv.textContent = 'Hello'\ndocument.body.appendChild(div)\n```\n\n- ✔ Создает новый элемент DOM  \n- ✔ Можно потом вставить его в документ  \n- ✔ Используется для динамического создания контента"
                },
                {
                    "title": "element.appendChild – Добавление дочернего элемента",
                    "text": "```js\nconst ul = document.querySelector('ul')\nconst li = document.createElement('li')\nli.textContent = 'Item'\nul.appendChild(li)\n```\n\n- ✔ Вставляет элемент в конец списка дочерних элементов  \n- ✔ Перемещает элемент, если он уже в DOM"
                },
                {
                    "title": "element.remove – Удаление элемента из DOM",
                    "text": "```js\nconst banner = document.querySelector('.banner')\nbanner.remove()\n```\n\n- ✔ Удаляет элемент из DOM  \n- ✔ Не требует указания родителя"
                },
                {
                    "title": "element.classList – Работа с классами элемента",
                    "text": "```js\nconst btn = document.querySelector('button')\nbtn.classList.add('active')\nbtn.classList.remove('disabled')\nbtn.classList.toggle('hidden')\n```\n\n- ✔ Добавляет, удаляет, переключает классы  \n- ✔ Удобнее, чем манипуляции со строкой className"
                },
                {
                    "title": "element.setAttribute – Установка атрибута элемента",
                    "text": "```js\nconst link = document.querySelector('a')\nlink.setAttribute('href', 'https://example.com')\n```\n\n- ✔ Задает или изменяет атрибут элемента  \n- ✔ Можно использовать для data-атрибутов и стандартных"
                },
                {
                    "title": "element.getAttribute – Получение значения атрибута",
                    "text": "```js\nconst href = link.getAttribute('href')\n```\n\n- ✔ Читает значение атрибута элемента  \n- ✔ Возвращает null, если атрибут отсутствует"
                },
                {
                    "title": "fetch – Современный API для HTTP-запросов",
                    "text": "```js\nfetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n```\n\n- ✔ Асинхронные HTTP-запросы (GET, POST и др.)  \n- ✔ Поддерживает промисы и async/await  \n- ✔ Замена устаревшему XMLHttpRequest"
                },
                {
                    "title": "setTimeout – Выполнение функции с задержкой",
                    "text": "```js\nsetTimeout(() => {\n  console.log('Привет через 1 секунду')\n}, 1000)\n```\n\n- ✔ Запускает функцию один раз после указанной задержки в мс"
                },
                {
                    "title": "setInterval – Повторное выполнение с интервалом",
                    "text": "```js\nconst id = setInterval(() => {\n  console.log('Каждую секунду')\n}, 1000)\n\nclearInterval(id) // остановить\n```\n\n- ✔ Запускает функцию периодически через указанный интервал"
                },
                {
                    "title": "localStorage.setItem – Запись данных в локальное хранилище",
                    "text": "```js\nlocalStorage.setItem('token', '12345')\n```\n\n- ✔ Хранит данные в браузере без срока годности  \n- ✔ Доступно по ключу в виде строки"
                },
                {
                    "title": "localStorage.getItem – Чтение данных из локального хранилища",
                    "text": "```js\nconst token = localStorage.getItem('token')\n```\n\n- ✔ Получает данные по ключу  \n- ✔ Возвращает null, если ключ отсутствует"
                },
                {
                    "title": "sessionStorage.setItem – Запись данных сессии",
                    "text": "```js\nsessionStorage.setItem('user', 'Roman')\n```\n\n- ✔ Хранит данные до закрытия вкладки браузера  \n- ✔ По ключу в виде строки"
                },
                {
                    "title": "sessionStorage.getItem – Чтение данных сессии",
                    "text": "```js\nconst user = sessionStorage.getItem('user')\n```\n\n- ✔ Получает данные по ключу из сессии  \n- ✔ Возвращает null, если нет"
                },
                {
                    "title": "navigator.geolocation.getCurrentPosition – Получение текущих координат",
                    "text": "```js\nnavigator.geolocation.getCurrentPosition(pos => {\n  console.log(pos.coords.latitude, pos.coords.longitude)\n})\n```\n\n- ✔ Запрашивает разрешение пользователя  \n- ✔ Возвращает координаты GPS\n- ✘ Может не сработать без HTTPS"
                },
                {
                    "title": "window.alert – Показ модального окна с сообщением",
                    "text": "```js\nalert('Привет!')\n```\n\n- ✔ Быстро показать сообщение пользователю  \n- ✔ Блокирует поток до закрытия"
                },
                {
                    "title": "window.confirm – Запрос подтверждения",
                    "text": "```js\nconst result = confirm('Удалить?')\nif (result) { /* да */ }\n```\n\n- ✔ Показывает окно с кнопками OK и Cancel  \n- ✔ Возвращает true/false"
                },
                {
                    "title": "window.prompt – Запрос ввода текста",
                    "text": "```js\nconst name = prompt('Введите имя')\n```\n\n- ✔ Открывает окно с полем ввода  \n- ✔ Возвращает строку или null при отмене"
                },
                {
                    "title": "element.scrollIntoView – Прокрутка к элементу",
                    "text": "```js\ndocument.querySelector('#footer').scrollIntoView({ behavior: 'smooth' })\n```\n\n- ✔ Прокручивает страницу к указанному элементу  \n- ✔ Можно сделать плавную прокрутку"
                },
                {
                    "title": "element.closest – Поиск ближайшего родителя по селектору",
                    "text": "```js\nconst parentForm = button.closest('form')\n```\n\n- ✔ Идет вверх по DOM, ищет первый подходящий элемент  \n- ✔ Удобен для делегирования событий"
                }
            ]
        },
        {
            title: '🌐 HTTP(S) протокол – Основы клиент-серверного общения',
            items: [
                {
                    title: 'Методы HTTP – Что делает клиент',
                    text: `\`\`\`js
fetch('/api/user', { method: 'GET' })
fetch('/api/user', { method: 'POST', body: JSON.stringify(data) })
\`\`\`

- ✔ **GET** – Получение данных (idempotent, без тела)
- ✔ **POST** – Отправка новых данных (форма, JSON)
- ✔ **PUT** – Полное обновление ресурса
- ✔ **PATCH** – Частичное обновление ресурса
- ✔ **DELETE** – Удаление ресурса
- ✔ **HEAD** – Только заголовки (без тела ответа)
- ✔ **OPTIONS** – Узнать, какие методы поддерживает сервер
- ✔ Все методы используют URL и заголовки, но по-разному обрабатываются сервером`
                },
                {
                    title: 'Коды ответа – Что отвечает сервер',
                    text: `\`\`\`txt
200 OK
404 Not Found
500 Internal Server Error
\`\`\`

- ✅ **1xx** – Информационные (редко используются)
- ✅ **2xx** – Успешно:
  - 200 OK – всё хорошо
  - 201 Created – создан новый ресурс
  - 204 No Content – без тела ответа
- ⚠️ **3xx** – Перенаправление:
  - 301 Moved Permanently
  - 302 Found
  - 304 Not Modified – используй кэш
- ❌ **4xx** – Ошибка клиента:
  - 400 Bad Request
  - 401 Unauthorized
  - 403 Forbidden
  - 404 Not Found
- 🔥 **5xx** – Ошибка сервера:
  - 500 Internal Server Error
  - 502 Bad Gateway
  - 503 Service Unavailable`
                },
                {
                    title: 'Заголовки HTTP – Метаинформация запроса и ответа',
                    text: `\`\`\`js
fetch('/api/data', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  }
})
\`\`\`

- ✅ **Content-Type** – Тип содержимого (например, application/json)
- ✅ **Accept** – Какие форматы клиент может принять
- ✅ **Authorization** – Токены авторизации (Bearer, Basic)
- ✅ **Cache-Control** – Управление кешем (no-cache, max-age)
- ✅ **User-Agent** – Инфо о браузере
- ✅ **Referer** – Откуда пришёл запрос
- ✅ **Cookie / Set-Cookie** – Работа с куками
- ✅ **Content-Length** – Длина тела запроса/ответа
- ✅ **CORS-заголовки**:
  - Access-Control-Allow-Origin
  - Access-Control-Allow-Methods`
                },
                {
                    title: 'Структура HTTP-запроса',
                    text: `\`\`\`txt
GET /page HTTP/1.1
Host: example.com
Accept: text/html
\`\`\`

- 🔹 Стартовая строка: метод, путь и версия
- 🔹 Заголовки: ключ-значение, описывают запрос
- 🔹 Тело: только у методов POST/PUT/PATCH
- 📌 Протокол — текстовый и читаемый`
                },
                {
                    title: 'HTTPS – Защищённый HTTP',
                    text: `- 🔐 Использует TLS/SSL для шифрования данных
- 🔐 Гарантирует конфиденциальность и целостность
- 🔐 Необходим для:
  - Авторизации и передачи чувствительных данных
  - PWA, Service Workers, CacheStorage
  - Современных API (например, geolocation)
- 🔐 Все современные сайты используют HTTPS (HTTP считается небезопасным)`
                },
                {
                    title: 'CORS – Кросс-доменные запросы',
                    text: `\`\`\`js
fetch('https://api.example.com', {
  mode: 'cors'
})
\`\`\`

- 🌍 Браузеры по умолчанию блокируют запросы на другие домены
- 🛑 Без нужных заголовков сервер выдаст ошибку CORS
- ✅ Сервер должен ответить:
  \`\`\`http
  Access-Control-Allow-Origin: *
  \`\`\`
- ✅ Для защищённых методов (POST, PUT...) может быть preflight-запрос с методом **OPTIONS**`
                }
            ]
        },
        {
            title: '🌍 Типы рендеринга веб-приложений',
            items: [
                {
                    title: 'SPA – Single Page Application',
                    text: `\`\`\`js
// Пример: Vue 3 без SSR
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
\`\`\`

- ✔ Всё рендерится на клиенте (в браузере)
- ✔ Быстрая разработка, минимальные настройки
- ✔ Отлично подходит для интерфейсов, дашбордов
- ✔ Легко хостить на GitHub Pages, Netlify и т.п.
- ✘ Плохой SEO (пустой HTML до загрузки JS)
- ✘ Первая загрузка может быть медленной (весь JS загружается сразу)`
                },
                {
                    title: 'SSR – Server-Side Rendering',
                    text: `\`\`\`js
// Пример: Nuxt 3 с SSR (по умолчанию)
export default defineNuxtConfig({
  ssr: true
})
\`\`\`

- ✔ HTML создается на сервере при каждом запросе
- ✔ Отлично подходит для SEO и социальных сетей (OG теги и т.п.)
- ✔ Быстрая первая загрузка, особенно на слабых устройствах
- ✔ Динамические данные всегда актуальны
- ✘ Требуется сервер (Node.js или хост с поддержкой SSR)
- ✘ Сложнее в настройке и деплое
- ✘ Выше нагрузка на сервер (рендер каждого запроса)`
                },
                {
                    title: 'SSG – Static Site Generation',
                    text: `\`\`\`js
// Пример: Nuxt 3 в режиме SSG
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static'
  }
})
\`\`\`

- ✔ Все страницы генерируются заранее (на этапе сборки)
- ✔ Можно хостить как обычный HTML (GitHub Pages, Netlify)
- ✔ Высокая скорость загрузки, отлично для SEO
- ✔ Нет нагрузки на сервер — всё работает как статика
- ✘ Данные не обновляются без новой сборки
- ✘ Неудобно для часто обновляемых страниц`
                },
                {
                    title: 'CSR – Client-Side Rendering (то же что SPA)',
                    text: `\`\`\`js
// Пример: Vue SPA (CSR)
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
\`\`\`

- ✔ Подходит для сложных интерактивных интерфейсов
- ✔ Вся логика и рендеринг в браузере
- ✔ Легко интегрировать с API
- ✘ Плохо для SEO (нужно пререндерить отдельно)
- ✘ Зависимость от JS — без него сайт не работает`
                },
                {
                    title: 'ISR – Incremental Static Regeneration',
                    text: `\`\`\`js
// Только в Next.js (в Vue пока отсутствует)
\`\`\`

- ✔ Гибрид между SSG и SSR
- ✔ Страница сначала генерируется как статика, потом обновляется сервером в фоне
- ✔ Не требует полной пересборки сайта
- ✔ Хорош для сайтов с контентом, который редко меняется
- ✘ Не реализован во Vue/Nuxt (только в Next.js)`
                },
                {
                    title: 'Prerendering – Предрендеринг',
                    text: `\`\`\`js
// Vite + плагин vite-plugin-ssr или prerender-spa-plugin для Vue CLI
\`\`\`

- ✔ Генерация HTML-файлов для ограниченного набора маршрутов
- ✔ Улучшает SEO для SPA
- ✔ Можно использовать без SSR и Nuxt
- ✘ Подходит только для сайтов с фиксированными страницами
- ✘ Нельзя рендерить динамический контент`
                },
                {
                    title: 'MPA – Multi Page Application',
                    text: `\`\`\`js
// Используется редко с Vue
\`\`\`

- ✔ Каждая страница — отдельный HTML с полным перезагрузом
- ✔ Можно использовать без фреймворков
- ✔ Подходит для традиционных сайтов
- ✘ Нет общих данных между страницами
- ✘ Нет динамического обновления — всё через reload`
                }
            ]
        },
        {
            title: '🌐 Параметры в адресной строке (URL query)',
            items: [
                {
                    title: 'Что такое параметры в URL',
                    text: `\`\`\`js
https://example.com/page?user=roman&id=42
// ?user=roman        — параметр "user" со значением "roman"
// &id=42             — параметр "id" со значением "42"
// ?                  — начало query-параметров
// &                  — разделяет параметры
\`\`\`

- Используются для передачи данных через адресную строку`
                },
                {
                    title: 'Чтение параметров в JavaScript',
                    text: `\`\`\`js
const params = new URLSearchParams(window.location.search)

params.get('user')    // "roman"
params.get('id')      // "42"
params.has('id')      // true
\`\`\`

- Позволяют получать параметры без ручного парсинга`
                },
                {
                    title: 'Изменение параметров без перезагрузки',
                    text: `\`\`\`js
const params = new URLSearchParams(window.location.search)
params.set('tab', 'info')

const newUrl = \`\${window.location.pathname}?\${params.toString()}\`
window.history.pushState({}, '', newUrl)
\`\`\`

- Обновляет URL без перезагрузки страницы`
                },
                {
                    title: 'Работа с параметрами в Nuxt 3',
                    text: `\`\`\`js
const route = useRoute()
route.query.page         // Получение параметра ?page=...

const router = useRouter()
router.push({ query: { page: 2 } })  // Обновление параметра
\`\`\`

- Подходит для фильтров, табов, пагинации и т.д.`
                }
            ]
        },
        {
            title: '🪟 Глобальный объект window',
            items: [
                {
                    title: 'Что такое window',
                    text: `\`\`\`js
console.log(window)
// Глобальный объект браузера
\`\`\`

- ✔ Доступен везде в браузере (глобально)
- ✔ Автоматически включает в себя все глобальные функции и переменные
- ✔ Отражает саму вкладку браузера (окно)
- ✔ Можно не писать window: \`window.alert()\` ⇔ \`alert()\`
- ✔ Используется для доступа к DOM, location, navigator, history и т.д.
- ✘ Не существует в средах вне браузера (например, в Node.js)
- ✘ Может быть причиной конфликтов при большом количестве глобальных переменных`
                },
                {
                    title: 'Часто используемые свойства и методы',
                    text: `\`\`\`js
window.alert("Привет!")                             // Показывает всплывающее сообщение
window.confirm("Вы уверены?")                       // Показывает диалог с выбором Да/Нет
window.prompt("Введите имя:")                       // Показывает поле для ввода
              
window.location.href                                // Получить текущий URL
window.location.reload()                            // Перезагрузить страницу
window.location.assign("https://...")               // Перейти на другую страницу
              
window.innerWidth                                   // Ширина окна просмотра
window.innerHeight                                  // Высота окна просмотра
              
window.addEventListener("resize", fn)               // Назначить обработчик события
              
window.setTimeout(fn, 1000)                         // Выполнить через 1 секунду
window.setInterval(fn, 1000)                        // Выполнять каждые 1 секунду
              
window.localStorage                                 // Доступ к localStorage
window.sessionStorage                               // Доступ к sessionStorage
window.indexedDB                                    // Доступ к IndexedDB
              
window.document                                     // Доступ к DOM-структуре страницы
window.navigator                                    // Информация о браузере и платформе
window.history.back()                               // Вернуться на предыдущую страницу
window.console.log("Лог")                           // Вывод в консоль

alert(), confirm(), prompt()                        // Методы взаимодействия с пользователем
location.href, location.reload(), location.assign() // Управление URL и переходами
innerWidth, innerHeight                             // Размеры окна
addEventListener()                                  // Назначение обработчиков событий
setTimeout(), setInterval()                         // Таймеры
localStorage, sessionStorage, indexedDB             // Доступ к хранилищам
document                                            // Доступ к DOM-структуре страницы
navigator                                           // Информация о браузере и системе
history.back(), history.forward()                   // Навигация по истории
console.log(), console.warn(), console.error()      // Методы отладки
\`\`\`

- ✘ Содержит множество свойств и методов, сложно охватить сразу
- ✘ Некоторые свойства ведут себя по-разному в разных контекстах (например, в iFrame)`
                }
            ]
        },
        {
            title: '📦 Хранение данных в браузере',
            items: [
                {
                    title: 'Cookies – Куки',
                    text: `\`\`\`js
document.cookie = "user=Roman; max-age=3600"
console.log(document.cookie)
\`\`\`

- ✔ Хранятся в виде строк (key=value)
- ✔ Автоматически отправляются серверу при каждом HTTP-запросе
- ✔ Можно задать срок действия (expires или max-age)
- ✔ Подходят для аутентификации, tracking
- ✘ Ограничены по размеру (~4KB)
- ✘ Доступны всему сайту (если не указать path)
- ✘ Не поддерживают объекты — нужно сериализовать вручную`
                },
                {
                    title: 'LocalStorage – Долговременное хранилище',
                    text: `\`\`\`js
localStorage.setItem("user", "Roman")
const user = localStorage.getItem("user")
localStorage.removeItem("user")
\`\`\`

- ✔ Сохраняет данные между перезагрузками и закрытием браузера
- ✔ До 5–10MB объема (в зависимости от браузера)
- ✔ Не отправляется серверу автоматически
- ✔ Хорошо подходит для настроек пользователя, кеша UI
- ✘ Всё хранится как строки (нужен JSON.stringify)
- ✘ Доступно только из одного домена`
                },
                {
                    title: 'SessionStorage – Хранилище сессии',
                    text: `\`\`\`js
sessionStorage.setItem("step", "1")
const step = sessionStorage.getItem("step")
sessionStorage.clear()
\`\`\`

- ✔ Живёт только в пределах одной вкладки (session/tab)
- ✔ Поведение как у localStorage, но срок — до конца сессии
- ✔ Удобно для хранения временных данных
- ✘ Исчезает после закрытия вкладки`
                },
                {
                    title: 'IndexedDB – База данных в браузере',
                    text: `\`\`\`js
const request = indexedDB.open("myDB", 1)

request.onupgradeneeded = () => {
  const db = request.result
  db.createObjectStore("users", { keyPath: "id" })
}
\`\`\`

- ✔ Хранение структурированных объектов (ключ-значение)
- ✔ Асинхронная и мощная альтернатива localStorage
- ✔ До сотен мегабайт и больше
- ✔ Подходит для офлайн-приложений и кэширования больших данных
- ✘ Сложнее API (работает через события)`
                },
                {
                    title: 'CacheStorage – Кэш страниц и файлов (Service Worker)',
                    text: `\`\`\`js
const cache = await caches.open("v1")
await cache.put("/page", new Response("Hello"))
\`\`\`

- ✔ Работает с Service Worker для офлайн-доступа
- ✔ Кэширует HTML, CSS, JS, изображения
- ✔ Доступ через API: caches.match(), caches.put()
- ✔ Ускоряет повторные загрузки страниц
- ✔ Используется в PWA-приложениях
- ✘ Требует HTTPS (или localhost)`
                },
                {
                    title: 'navigator.storage – Проверка и управление',
                    text: `\`\`\`js
const estimate = await navigator.storage.estimate()
console.log(estimate.quota, estimate.usage)
\`\`\`

- ✔ Дает информацию о доступном и используемом месте
- ✔ Работает в современных браузерах
- ✔ Полезно для контроля объема данных
- ✔ Можно запросить постоянное хранилище:
  \`\`\`js
  navigator.storage.persist()
  \`\`\`
- ✔ Удобно при использовании IndexedDB и других API`
                }
            ]
        },
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
                },
                {
                    title: 'Порядок выполнения задач',
                    text: `\`\`\`js
console.log('1')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
  console.log('promise')
})

console.log('2')
\`\`\`

// Что выведется в консоли:
1
2
promise
setTimeout

- ✔ Сначала выполняется синхронный код (1, 2)
- ✔ Затем — микрозадачи (promise)
- ✔ Потом — макрозадачи (setTimeout)`
                },
                {
                    title: 'Как браузер помогает Event Loop',
                    text: `- ✔ Web API (браузера) выполняет "внешние" задачи: таймеры, сетевые запросы, слушатели событий
- ✔ Когда задача готова — браузер отправляет callback в очередь (Task Queue или Microtask Queue)
- ✔ JS сам ничего не "ждёт" — он просто ставит задачу в очередь

Пример:
\`\`\`js
setTimeout(() => {
  console.log('✅ Готово через 1 секунду')
}, 1000)
\`\`\`
- Пока идёт таймер, JS продолжает работать дальше`
                },
                {
                    title: 'Где Event Loop важен во фронтенде',
                    text: `- ✔ Таймеры: setTimeout, setInterval
- ✔ Работа с fetch / API / промисами
- ✔ Рендеринг и перерисовка DOM
- ✔ Обработка пользовательских событий (click, input)
- ✔ Анимации и requestAnimationFrame
- ✔ Избежание "заморозки" интерфейса (например, при больших циклах или JSON.parse)

Важно:
- Никогда не блокируй главный поток (например, через долгие циклы)
- Всегда разделяй тяжёлую работу на части или используй Web Workers`
                }
            ]
        },
        {
            title: '🐞 Методы объекта console',
            items: [
                {
                    title: 'Самые часто используемые методы',
                    text: `\`\`\`js
console.log("message")           // Вывод обычного сообщения
console.info("info")             // Информационное сообщение (обычно синий цвет)
console.warn("warning")          // Предупреждение (желтый цвет)
console.error("error")           // Ошибка (красный цвет)
console.debug("debug")           // Отладочная информация (может быть скрыта по умолчанию)
console.clear()                  // Очистка консоли
\`\`\`

- Используются для вывода и отладки кода`
                },
                {
                    title: 'Методы для группировки и форматирования',
                    text: `\`\`\`js
console.group("group name")            // Начинает новую группу логов
console.groupCollapsed("name")         // Группа свернута по умолчанию
console.groupEnd()                     // Заканчивает текущую группу

console.table([{a:1,b:2}, {a:3,b:4}])  // Выводит массив или объект в табличном виде

console.count("label")                 // Считает количество вызовов с меткой "label"
console.countReset("label")            // Сбрасывает счётчик для метки "label"
      
console.time("timer")                  // Запускает таймер с именем "timer"
console.timeLog("timer")               // Выводит текущее значение таймера
console.timeEnd("timer")               // Останавливает таймер и выводит результат
\`\`\`

- Позволяют структурировать вывод и измерять время`
                },
                {
                    title: 'Методы для отслеживания стека и трассировки',
                    text: `\`\`\`js
console.trace("trace message")    // Выводит стек вызовов с сообщением
console.assert(condition, "msg")  // Выводит сообщение если условие false
\`\`\`

- Помогают отследить откуда вызван код и проверять условия`
                },
                {
                    title: 'Менее распространённые и дополнительные методы',
                    text: `\`\`\`js
console.dir(obj)                // Выводит интерактивное дерево объекта
console.dirxml(node)            // Выводит XML-представление DOM-узла

console.profile("profile")      // Начинает запись профиля производительности
console.profileEnd("profile")   // Останавливает запись профиля

console.markTimeline("mark")    // Помечает событие в таймлайне (устаревший)

console.memory                  // Объект с информацией о памяти (только Chrome)
\`\`\`

- Дополнительные возможности для глубокого анализа и инспекции`
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
- **Ctrl -** → закрыть текущий выделенный блок
- **Ctrl +** → открыть текущий выделенный блок
- **Ctrl + Shift -** → закрыть все блоки
- **Ctrl + Shift +** → открыть все блоки
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