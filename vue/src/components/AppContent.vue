<script setup>
const props = defineProps({
  content: Array,
})

console.log('props', props)
</script>

<template>
  <div :class="$style.container">
<div :class="$style.temp" v-for="content in props.content" :key="index" > {{content.title}} - {{content.text}} </div>
  </div>
</template>

<style lang="scss" module>
.container {
  //background-color: darkblue;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  color: white;
  width: max-content;
  margin: auto;
}

.temp {
  background-color: darkgreen;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
}
</style>