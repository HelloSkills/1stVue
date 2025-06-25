<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppMenu from './components/AppMenu.vue'
import Memory from './components/memory.vue'

const keysMap = {
  'GIT': 'GIT',
  'JS': 'JS',
  'Objects': 'OBJECT',
  'Arrays': 'ARRAYS',
  'Styles': 'STYLES',
  'Vue': 'VUE',
  'Nuxt': 'NUXT',
  'Links': 'LINKS',
  'Hotkeys': 'HOTKEYS',
}

const content = {
  [keysMap.GIT]: [
    { title: 'git clone <url>', text: 'Клонировать удалённый репозиторий на локальную машину' },
    { title: 'git remote -v\n', text: 'Показывает связку с гитом (куда / откуда)' },
    { title: 'git status', text: 'Показать текущее состояние репозитория (изменения, ветки)' },
    { title: 'git add <файл>', text: 'Добавить файл(ы) в индекс (готовность к коммиту)' },
    { title: 'git add .', text: 'Добавить все файлы в индекс (готовность к коммиту)' },
    { title: 'git commit -m "msg"', text: 'Зафиксировать изменения с сообщением коммита' },
    { title: 'git push', text: 'Отправить коммиты в удалённый репозиторий' },
    { title: 'git pull', text: 'Забрать изменения с удалённого репозитория и слить с локальными' },
    { title: 'git checkout <ветка>', text: 'Переключиться на другую ветку' },
    { title: 'git branch', text: 'Показать список веток' },
    { title: 'git merge <ветка>', text: 'Слить указанную ветку в текущую' },
    { title: 'git log', text: 'Показать историю коммитов' }
  ],
  [keysMap.JS]: [
    {title: '', text: ''},
  ],
  [keysMap.Objects]: [
    {title: '', text: ''},
  ],
  [keysMap.Arrays]: [
    {title: '', text: ''},
  ],
  [keysMap.Styles]: [
    {title: '', text: ''},
  ],
  [keysMap.Vue]: [
    { title: 'v-if', text: 'Условный рендеринг элемента (если условие true — отрисовывается)' },
    { title: 'v-else-if', text: 'Дополнительное условие для v-if (аналог else if)' },
    { title: 'v-else', text: 'Блок, выполняющийся если все предыдущие v-if / v-else-if — false' },

    { title: 'v-show', text: 'Показывает/скрывает элемент через display: none (не удаляет из DOM)' },

    { title: 'v-for', text: 'Цикл по массиву или объекту (пример: v-for="(item, index) in items")' },

    { title: 'v-bind', text: 'Привязывает значение к атрибуту (пример: :src="img")' },
    { title: ':', text: 'Сокращение для v-bind (пример: :href="link")' },

    { title: 'v-model', text: 'Двусторонняя привязка данных (для input, select, textarea и компонентов)' },

    { title: 'v-on', text: 'Обработка событий (пример: v-on:click="handleClick")' },
    { title: '@', text: 'Сокращение для v-on (пример: @click="handleClick")' },

    { title: 'v-slot', text: 'Определяет слот и его имя в компоненте (пример: v-slot:header)' },
    { title: '#', text: 'Сокращение для v-slot (пример: #header)' },

    { title: 'v-pre', text: 'Пропускает компиляцию внутри элемента (отображает как есть)' },
    { title: 'v-cloak', text: 'Скрывает элемент до полной инициализации Vue (обычно с CSS)' },
    { title: 'v-once', text: 'Рендерит элемент только один раз и больше не обновляет его' },
  ]
  ,
  [keysMap.Nuxt]: [
    {title: '', text: ''},
  ],
  [keysMap.Links]: [
    // 📦 CSS & JS: библиотеки, шпаргалки, инструменты
    { title: 'Tailwind Docs', text: 'https://tailwindcss.com/docs/text-align' },
    { title: 'Sprite Generator', text: 'https://svgsprit.es' },
    { title: 'Favicon Generator', text: 'https://realfavicongenerator.net' },
    { title: 'CSS Cheatsheet', text: 'https://htmlcheatsheet.com/css/' },
    { title: 'JS Cheatsheet (OverAPI)', text: 'https://overapi.com/javascript' },
    { title: 'HTML Cheatsheet (OverAPI)', text: 'https://overapi.com/html' },
    { title: 'CSS Cheatsheet (OverAPI)', text: 'https://overapi.com/css' },
    { title: 'Doka JS Guide', text: 'https://doka.guide/js/' },
    { title: 'CSS Grid Guide', text: 'https://grid.malven.co' },
    { title: 'CSS Snippets', text: 'https://my-js.org/docs/other/snippets-css' },
    { title: 'CSS Animation Easing', text: 'https://easings.net/en#/' },
    { title: 'Base64 Image Converter', text: 'https://www.base64-image.de' },
    { title: 'JS Обфускация (Habr)', text: 'https://habr.com/ru/post/533954/' },
    { title: 'JS Обфускатор Webfanat', text: 'https://webfanat.com/obfuscator/' },

    // ⚙️ Инструменты и тулзы
    { title: 'CSS Easing Generator', text: 'https://tools.webdevpuneet.com/css-easing-generator/' },
    { title: 'Настройка VS Code', text: 'https://webdesign-master.ru/blog/tools/vscode.html' },
    { title: 'Оптимизация видео для сайтов', text: 'https://www.comss.ru/page.php?id=6780' },

    // 📈 Метрики и аналитика
    { title: 'Google Analytics Setup', text: 'https://support.google.com/analytics/answer/10269537?ref_topic=1009620' },
    { title: 'Яндекс Метрика через GTM', text: 'https://ppc.world/articles/kak-ustanovit-schetchik-metriki-na-sayt-s-pomoschyu-google-tag-manager/' },

    // 🎠 Слайдеры, анимации и UI
    { title: 'Подборка слайдеров (3D и др.)', text: 'https://atuin.ru/blog/slajdery-i-karuseli/' },
    { title: 'Интересное по тегу 3D', text: 'https://atuin.ru/blog/tag/3d/' },
    { title: 'Плавное появление страницы', text: 'https://snipp.ru/jquery/smooth-pages' },
    { title: 'Слайдер без JS (Scroll Snap)', text: 'https://tproger.ru/articles/css-scroll-snap-moshhnoe-svojstvo-dlja-sozdanija-prokruchivaemyh-kontejnerov-bez-javascript/' },
    { title: 'Popup на чистом JS', text: 'https://webdevtips.pro/js/pure-js-popup/' },

    // 💠 Прелоадеры и курсоры
    { title: 'Простой прелоадер', text: 'https://smartlanding.biz/kak-sdelat-preloader.html' },
    { title: 'Коллекция прелоадеров (Spinkit)', text: 'https://tobiasahlin.com/spinkit/' },
    { title: 'Как изменить курсор (Pandoge)', text: 'https://www.pandoge.com/stati-i-sovety/kak-izmenit-standartnyy-kursor-na-sayte' },
    { title: 'Изменение курсора (mojwp)', text: 'https://mojwp.ru/cursor-css.html' },

    // 🧩 Стилизация элементов
    { title: 'Стилизация Checkbox', text: 'https://computy.ru/blog/ispolzovanie-i-stilizacziya-input-checkbox/' },

    // 🧠 ИИ, генераторы, помощники
    { title: 'DuckDuckGo Chat AI', text: 'https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1' },
    { title: 'GPT China (HuggingFace)', text: 'https://huggingface.co/spaces/Qwen/Qwen2.5-Coder-Artifacts' }
  ],
  [keysMap.Hotkeys]: [
    // 🔄 Редактирование и работа с кодом
    { title: 'Дублировать строку/блок', text: 'Ctrl + D' },
    { title: 'Удалить строку', text: 'Ctrl + Y' },
    { title: 'Переместить строку вверх/вниз', text: 'Shift + Alt + ↑ / ↓' },
    { title: 'Форматировать код', text: 'Ctrl + Alt + L' },
    { title: 'Закомментировать строку', text: 'Ctrl + /' },
    { title: 'Закомментировать блок', text: 'Ctrl + Shift + /' },
    { title: 'Выделить следующую/предыдущую часть кода', text: 'Ctrl + W / Ctrl + Shift + W' },

    // ✏️ Рефакторинг и переименование
    { title: 'Переименовать файл, переменную, функцию', text: 'Shift + F6' },
    { title: 'Безопасное удаление (с поиском использований)', text: 'Alt + Delete' },
    { title: 'Переместить файл/класс', text: 'F6' },
    { title: 'Показать рефакторинги', text: 'Ctrl + Alt + Shift + T' },

    // 💻 Терминал, окна, вкладки
    { title: 'Открыть терминал', text: 'Alt + F12' },
    { title: 'Переключить вкладку (вперёд/назад)', text: 'Alt + ← / →' },
    { title: 'Закрыть вкладку', text: 'Ctrl + F4' },

    // 🔍 Навигация
    { title: 'Переход к файлу', text: 'Ctrl + Shift + N' },
    { title: 'Переход к символу (функция, переменная)', text: 'Ctrl + Alt + Shift + N' },
    { title: 'Переход к определению', text: 'Ctrl + B' },
    { title: 'Поиск использования', text: 'Alt + F7' },
    { title: 'Недавние файлы', text: 'Ctrl + E' },
    { title: 'Последнее место редактирования', text: 'Ctrl + Shift + Backspace' },

    // 🚀 Навигация по структуре
    { title: 'Показать структуру файла', text: 'Ctrl + F12' },
    { title: 'Открыть быстрые действия', text: 'Alt + Enter' },
    { title: 'Быстрая документация', text: 'Ctrl + Q' },

    // 🧠 Поиск
    { title: 'Поиск по проекту', text: 'Ctrl + Shift + F' },
    { title: 'Поиск и замена', text: 'Ctrl + R' },
    { title: 'Поиск в файле', text: 'Ctrl + F' },

    // 🧪 Запуск и дебаг
    { title: 'Запустить', text: 'Shift + F10' },
    { title: 'Остановить', text: 'Ctrl + F2' },
    { title: 'Перезапустить', text: 'Shift + F9' },

    // 🌈 Прочее
    { title: 'Показать все доступные горячие клавиши', text: 'Ctrl + Shift + A' },
    { title: 'Переопределить шорткаты (Find Action)', text: 'Ctrl + Shift + A' }
  ],
}

// const gitContent = content[keysMap.GIT] // Массив объектов по GIT
// const jsContent = content[keysMap.JS] // Массив объектов по JS
// const objectsContent = content[keysMap.Objects] // Массив объектов по objects
// const arraysContent = content[keysMap.Arrays] // Массив объектов по Arrays
// const stylesContent = content[keysMap.Styles] // Массив объектов по Styles
// const vueContent = content[keysMap.Vue] // Массив объектов по Vue
// const nuxtContent = content[keysMap.Nuxt] // Массив объектов по Nuxt
// const linksContent = content[keysMap.Links] // Массив объектов по Links
// const hotkeysContent = content[keysMap.Links] // Массив объектов по Hotkeys

</script>

<template>
  <div :class="$style.container">
    <Memory class="mb8"/>

    <AppMenu :content="content" />
  </div>
</template>

<style lang="scss" module>

body {

  font-family: "JetBrains Mono";
  background: linear-gradient(
          to bottom,
          rgb(15, 13, 25) 0%,
          rgb(20, 17, 30) 35%,
          rgb(24, 20, 32) 50%,
          rgb(18, 15, 28) 65%,
          rgb(10, 10, 20) 100%
  );
  min-height: 100vh;

  // Блокируем селект текста
  user-select: none;       /* стандарт */
  -webkit-user-select: none; /* для Safari */
  -moz-user-select: none;    /* для Firefox */
  -ms-user-select: none;     /* для старого IE/Edge */
}

.container {
  text-align: center;
}

</style>
