<script setup>
import {computed, ref} from "vue";
const props = defineProps({
  content: Object,
  activeIndex: Number | null
})

const keys = Object.keys(props.content)
const activeKey = computed(() => {
  const activeIndex = props.activeIndex
  const key = keys[activeIndex]
  return key
})

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
  <div v-if="activeKey" :class="$style.wrap" class="flex-col mt-16">
    <div :class="$style.content"
         v-for="(content, index) in props.content[activeKey]"
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
  width: 100%;
  padding: 10px;
  border-radius: 10px;
}
</style>