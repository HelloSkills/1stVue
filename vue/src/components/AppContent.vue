<script setup>
import {computed, ref} from "vue";
const props = defineProps({
  selectedMenu: Array | null,
})

computed(() => {
  console.log('props.selectedMenu', props.selectedMenu)
})
// const keys = Object.keys(props.content)
// const activeKey = computed(() => {
//   const activeIndex = props.activeIndex
//   const key = keys[activeIndex]
//   return key
// })

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
    <div v-if="selectedMenu" :class="[$style.content, activeText.has(index) == true ? $style.active : '']"
         v-for="(content, index) in props.selectedMenu"
         :key="index"
    >
      <div :class="$style.title" class="text-green" @click="toggleText(index)"> {{content.title}} </div>
      <div :class="$style.text" v-show="activeText.has(index)"> {{content.text}} </div>
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
  color: white;
  margin: auto;
  width: max-content;
}

.content {
  background: rgb(28, 24, 40); // тёмно-фиолетовый, чуть светлее фона
  border: 1px solid rgba(255, 255, 255, 0.05); // мягкая граница
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 10px;
  border-radius: 10px;
  width: 200px;
}

.active {
  width: 900px;
}
</style>