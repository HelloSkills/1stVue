<script setup>
import {computed, onMounted, ref} from 'vue'
import AppContent from './AppContent.vue'

const props = defineProps({
  items: Array,
  activeIndex: Number | null
})

const emit = defineEmits(['changeActiveIndex'])
function onClick(index) {
  emit('changeActiveIndex', index)
}

</script>

<template>
  <div :class="$style.container" class="gap-16 mb-24">
    <div v-for="(item, index) in items"
         :key="index"
         :class="[$style.navigation, activeIndex === index ? $style.active : '']"
         @click="onClick(index)"
    >
      {{item}}
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.navigation {
  padding: 8px;
  width: 80px;
  cursor: pointer;
  border-radius: 8px;
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
</style>