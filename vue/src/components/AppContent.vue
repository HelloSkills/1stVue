<script setup>
import {computed, ref, watch} from "vue";
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

function rendered(text) {
  return md.render(text || '')
}

const props = defineProps({
  selectedMenu: Array | null,
})

watch(
    () => props.selectedMenu,
    (newVal, oldVal) => {
      // console.log(props.selectedMenu, newVal, oldVal)
      // console.log('props.selectedMenu', props.selectedMenu[0].title.length)
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
  <div :class="$style.wrap" class="flex-col mt-16">
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
        <RecursiveContent v-if="content.items" :selectedMenu="content.items" :class="$style.items" class="mt-16 mb-24"/>
        <div v-else class="text-left ml-16" :class="$style.markdown" v-html="rendered(content.text)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecursiveContent'
}
</script>

<style lang="scss" module>
.wrap {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  color: white;
  margin: auto;
  width: 100%;

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

.text {
  white-space: pre-line;
}

.contentTextOnly {
  background: none;
  border: none;
  padding: 0;
}

.markdown {
  ul {
    list-style-type: none; /* убирает точки у списка */
    padding: 0;
    margin: 0;
  }
  li {
    margin: 0;
    padding: 0;
    line-height: 1;
    height: 1em;
  }
  strong {
    color: #3586de;        /* цвет для выделенного текста (жирного) */
  }
  code {
    //background-color: #2d2d2d;
    color: #f8f8f2;
    //padding: 2px 6px;
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9em;
  }
  //p {
  //  margin-bottom: 1em;    /* отступ между параграфами */
  //}
}

</style>