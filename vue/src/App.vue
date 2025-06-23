<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppContent from './components/AppContent.vue'
import HelloWorld from './components/HelloWorld.vue'

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
    {title: ''},
    {text: ''}
  ],
  [keysMap.Objects]: [
    {title: ''},
    {text: ''}
  ],
  [keysMap.Arrays]: [
    {title: ''},
    {text: ''}
  ],
  [keysMap.Styles]: [
    {title: ''},
    {text: ''}
  ],
  [keysMap.Vue]: [
    {title: ''},
    {text: ''}
  ],
  [keysMap.Nuxt]: [
    {title: ''},
    {text: ''}
  ],
  [keysMap.Links]: [
    {title: ''},
    {text: ''}
  ],
  [keysMap.Hotkeys]: [
    {title: ''},
    {text: ''}
  ],
}

const gitContent = content[keysMap.GIT] // Массив объектов по GIT
const jsContent = content[keysMap.JS] // Массив объектов по JS
const objectsContent = content[keysMap.Objects] // Массив объектов по objects
const arraysContent = content[keysMap.Arrays] // Массив объектов по Arrays
const stylesContent = content[keysMap.Styles] // Массив объектов по Styles
const vueContent = content[keysMap.Vue] // Массив объектов по Vue
const nuxtContent = content[keysMap.Nuxt] // Массив объектов по Nuxt
const linksContent = content[keysMap.Links] // Массив объектов по Links
const hotkeysContent = content[keysMap.Links] // Массив объектов по Hotkeys

</script>

<template>
  <div :class="$style.container">
    <HelloWorld class="mb8"/>

    <AppContent :content="content" />
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
