<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppContent from './components/AppContent.vue'
import HelloWorld from './components/HelloWorld.vue'

const keysMap = {
  'GIT': 'git',
  'JS': 'js',
  'Objects': 'objects',
  'Arrays': 'arrays',
  'Styles': 'styles',
  'Vue': 'vue',
  'Nuxt': 'nuxt',
  'Links': 'links',
}

const content = {
  [keysMap.GIT]: [
    { title: 'git clone <url>', text: 'Клонировать удалённый репозиторий на локальную машину' },
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
}

const gitConent = content[keysMap.GIT] // Массив объектов по GIT
const jsConent = content[keysMap.JS] // Массив объектов по JS
const objectsConent = content[keysMap.Objects] // Массив объектов по objects
const arraysConent = content[keysMap.Arrays] // Массив объектов по Arrays
const stylesConent = content[keysMap.Styles] // Массив объектов по Styles
const vueConent = content[keysMap.Vue] // Массив объектов по Vue
const nuxtConent = content[keysMap.Nuxt] // Массив объектов по Nuxt
const linksConent = content[keysMap.Links] // Массив объектов по Links

// console.log(content[keysMap.GIT])
</script>

<template>
  <div :class="$style.container">
    <HelloWorld class="mb8"/>

    <AppContent :content="gitConent" />
  </div>
</template>

<style lang="scss" module>

body {
  background: linear-gradient(
          to bottom,
          rgb(15, 13, 25) 0%,
          rgb(20, 17, 30) 35%,
          rgb(24, 20, 32) 50%,
          rgb(18, 15, 28) 65%,
          rgb(10, 10, 20) 100%
  );
  min-height: 100vh;
}

.container {
  text-align: center;
}

</style>
