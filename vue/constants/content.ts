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
            items: [
                {title: 'Tailwind Docs', text: 'https://tailwindcss.com/docs/text-align'},
                {title: 'Sprite Generator', text: 'https://svgsprit.es'},
                {title: 'Favicon Generator', text: 'https://realfavicongenerator.net'},
                {title: 'CSS Cheatsheet', text: 'https://htmlcheatsheet.com/css/'},
                {title: 'JS Cheatsheet (OverAPI)', text: 'https://overapi.com/javascript'},
                {title: 'HTML Cheatsheet (OverAPI)', text: 'https://overapi.com/html'},
                {title: 'CSS Cheatsheet (OverAPI)', text: 'https://overapi.com/css'},
                {title: 'Doka JS Guide', text: 'https://doka.guide/js/'},
                {title: 'CSS Grid Guide', text: 'https://grid.malven.co'},
                {title: 'CSS Snippets', text: 'https://my-js.org/docs/other/snippets-css'},
                {title: 'CSS Animation Easing', text: 'https://easings.net/en#/'},
                {title: 'Base64 Image Converter', text: 'https://www.base64-image.de'},
                {title: 'JS Обфускация (Habr)', text: 'https://habr.com/ru/post/533954/'},
                {title: 'JS Обфускатор Webfanat', text: 'https://webfanat.com/obfuscator/'}
            ]
        },
        {
            title: '⚙️ Инструменты и тулзы',
            items: [
                {title: 'CSS Easing Generator', text: 'https://tools.webdevpuneet.com/css-easing-generator/'},
                {title: 'Настройка VS Code', text: 'https://webdesign-master.ru/blog/tools/vscode.html'},
                {title: 'Оптимизация видео для сайтов', text: 'https://www.comss.ru/page.php?id=6780'}
            ]
        },
        {
            title: '📈 Метрики и аналитика',
            items: [
                {
                    title: 'Google Analytics Setup',
                    text: 'https://support.google.com/analytics/answer/10269537?ref_topic=1009620'
                },
                {
                    title: 'Яндекс Метрика через GTM',
                    text: 'https://ppc.world/articles/kak-ustanovit-schetchik-metriki-na-sayt-s-pomoschyu-google-tag-manager/'
                }
            ]
        },
        {
            title: '🎠 Слайдеры, анимации и UI',
            items: [
                {title: 'Подборка слайдеров (3D и др.)', text: 'https://atuin.ru/blog/slajdery-i-karuseli/'},
                {title: 'Интересное по тегу 3D', text: 'https://atuin.ru/blog/tag/3d/'},
                {title: 'Плавное появление страницы', text: 'https://snipp.ru/jquery/smooth-pages'},
                {
                    title: 'Слайдер без JS (Scroll Snap)',
                    text: 'https://tproger.ru/articles/css-scroll-snap-moshhnoe-svojstvo-dlja-sozdanija-prokruchivaemyh-kontejnerov-bez-javascript/'
                },
                {title: 'Popup на чистом JS', text: 'https://webdevtips.pro/js/pure-js-popup/'}
            ]
        },
        {
            title: '💠 Прелоадеры и курсоры',
            items: [
                {title: 'Простой прелоадер', text: 'https://smartlanding.biz/kak-sdelat-preloader.html'},
                {title: 'Коллекция прелоадеров (Spinkit)', text: 'https://tobiasahlin.com/spinkit/'},
                {
                    title: 'Как изменить курсор (Pandoge)',
                    text: 'https://www.pandoge.com/stati-i-sovety/kak-izmenit-standartnyy-kursor-na-sayte'
                },
                {title: 'Изменение курсора (mojwp)', text: 'https://mojwp.ru/cursor-css.html'}
            ]
        },
        {
            title: '🧩 Стилизация элементов',
            items: [
                {
                    title: 'Стилизация Checkbox',
                    text: 'https://computy.ru/blog/ispolzovanie-i-stilizacziya-input-checkbox/'
                }
            ]
        },
        {
            title: '🧠 ИИ, генераторы, помощники',
            items: [
                {title: 'DuckDuckGo Chat AI', text: 'https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1'},
                {title: 'GPT China (HuggingFace)', text: 'https://huggingface.co/spaces/Qwen/Qwen2.5-Coder-Artifacts'}
            ]
        }
    ],
    [keysMap.Hotkeys]: [
        {
            title: '🔄 Редактирование и работа с кодом',
            text: `- **Ctrl + D** – Дублировать строку/блок
- **Ctrl + Y** – Удалить строку
- **Shift + Alt + ↑ / ↓** – Переместить строку вверх/вниз
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
    ]
    ,
}

export {content}