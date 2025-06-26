<script setup>
import {computed, ref, watch} from "vue";
const props = defineProps({
  selectedMenu: Array | null,
})

watch(
    () => props.selectedMenu,
    (newVal, oldVal) => {
      console.log(props.selectedMenu, newVal, oldVal)
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
        :class="[$style.content, activeText.has(index) ? $style.active : '']"
    >
      <div
          :class="$style.title"
          class="text-green"
          @click="toggleText(index)"
      >
        {{ content.title }}
      </div>

      <div v-show="activeText.has(index)" :class="$style.text">
        <!-- Если есть вложенные items — вызываем этот компонент рекурсивно -->
        <RecursiveContent v-if="content.items" :selectedMenu="content.items" :class="$style.items" />

        <!-- Если нет вложенных items — показываем текст -->
        <div v-else>{{ content.text }}</div>
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
  gap: 16px;
  padding: 16px;
  border-radius: 10px;
  width: 200px;

}

.text {
  white-space: pre;
}

//.items {
//  width: 100px;
//}

.active {
  min-width: 200px;
  width: 700px;
  //width: max-content;
}
</style>