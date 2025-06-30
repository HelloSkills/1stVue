<script setup>
import {computed, ref, watch} from "vue"
import { useMarkdownIt } from "../composables/useMarkdown.ts"

const md = useMarkdownIt()

function rendered(text) {
  return md.render(text || '')
}

const props = defineProps({
  selectedMenu: Array | null,
})

console.log('selectedMenu', props.selectedMenu)

// Следим за состоянием открытых вкладок и сбрасываем их при изменении в меню
watch(
    () => props.selectedMenu,
    (newVal, oldVal) => {
      if (newVal !== oldVal) {
        activeText.value.clear()
      }
    }
)

// Скрытие text по клику на title
const activeText = ref(new Set())
function toggleText(index) {
  if (activeText.value.has(index)) {
    activeText.value.delete(index)
  } else {
    activeText.value.add(index)
  }
}
</script>

<template>
  <div :class="$style.wrap" class="flex-col">
    <div
        v-for="(content, index) in selectedMenu"
        :key="index"
        :class="[$style.content, activeText.has(index) && content.items ? $style.active : '', !content.items ? '' : $style.contentTextOnly]"
    >
      <div
          :class="$style.title"
          class="text-green"
          @click="toggleText(index)"
      >
        {{ content.title }}
      </div>

      <div v-show="activeText.has(index)" :class="$style.text">
        <AppContent v-if="content.items" :selectedMenu="content.items" :class="$style.items" class="mt-16 mb-24"/>
        <div v-else class="text-left ml-16" :class="$style.markdown" v-html="rendered(content.text)" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.wrap {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;

  //margin: auto;
  //width: 100%;
}

.content {
  background: rgb(28, 24, 40); // тёмно-фиолетовый, чуть светлее фона
  border: 1px solid rgba(255, 255, 255, 0.05); // мягкая граница
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 16px;
  padding: 16px;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
}

.contentTextOnly {
  background: none;
  //border: none;
}

.markdown li {
  margin-bottom: 8px;
}

.markdown strong {
  color: #35ded0;
}

.markdown code {
  display: block;
  background: rgb(38, 34, 54);
  border: 1px solid #3a3553;
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9em;
  color: #3586de;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 8px;
  white-space: pre;     /* сохранить пробелы без сжатия */
}

.markdown a {
  display: flex;
  justify-content: center;
  text-align: center;
}

.markdown a:hover {
  color: #35ded0;
  transform: scale(1.03);
  transition: 0.3s;
}
</style>