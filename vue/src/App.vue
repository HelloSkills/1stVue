<script setup>
import {computed, onMounted, ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

import Memory from '/components/memory.vue'
import AppMenu from '/components/AppMenu.vue'
import AppContent from '/components/AppContent.vue'

import { keysMap, keys } from "../constants/keysMap.ts"
import { content } from "../constants/content.ts"

import { useSelectedMenu } from "../composables/useActiveIndex.ts" // композабл и логика работы меню
const { activeIndex, selectedMenu, handleChangeActiveIndex } = useSelectedMenu(keys, content) // деструктуризация комопзабла

</script>

<template>
  <div :class="$style.container" class="text-center pt-16">
    <Memory class="mb-16"/>
    <AppMenu
        :items="keys"
        :activeIndex="activeIndex"
        @changeActiveIndex="handleChangeActiveIndex"
    />
    <AppContent :selectedMenu="selectedMenu" />
  </div>
</template>

<style lang="scss" module>
//.container {
//
//}
</style>
