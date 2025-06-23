<script setup>
import { ref } from 'vue'
const props = defineProps({
  content: Object,
})

const keys = Object.keys(props.content)
console.log('keys', keys)
const activeIndex = ref(null)
</script>

<template>
  <div :class="$style.container">
    <div v-for="(menu, index) in keys"
         :key="index"
         :class="[$style.navigation, activeIndex === index ? $style.active : '']"
         @click="activeIndex = activeIndex === index ? null : index"
    >
      {{menu}}
    </div>
  </div>
  <!--<div :class="$style.temp" v-for="content in props.content" :key="index" > {{content.title}} | {{content.text}} </div>-->
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  color: white;
  width: max-content;
  margin: auto;
}

.navigation {
  padding: 0.6em 1.2em;
  color: #bbb;
  font-weight: 600;
  //font-family: 'JetBrains Mono', monospace;
  cursor: pointer;
  border-radius: 8px;
  user-select: none;
  transition:
      background-color 0.3s ease,
      color 0.3s ease,
      transform 0.2s ease,
      box-shadow 0.3s ease;

  &:hover,
  &:focus-visible {
    color: #ddd;
    background-color: rgba(45, 42, 70, 0.6);
    box-shadow: 0 0 6px rgba(100, 90, 160, 0.6);
    transform: scale(1.05);
    outline: none;
  }
}

.active {
  color: #b8a8ff;
  background-color: rgba(70, 65, 110, 0.8);
  box-shadow: 0 0 10px rgba(120, 110, 180, 0.9);
  transform: scale(1.07);
}

.temp {
  background: rgb(28, 24, 40); // тёмно-фиолетовый, чуть светлее фона
  border: 1px solid rgba(255, 255, 255, 0.05); // мягкая граница

  width: 100%;
  padding: 10px;
  border-radius: 10px;
}
</style>