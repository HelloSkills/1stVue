<script setup>
const props = defineProps({
  content: Object,
  navigation: Array,
})

console.log('props', props.navigation)
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.navigation" v-for="menu in navigation" :key="index">
      {{menu}}
    </div>
<!--<div :class="$style.temp" v-for="content in props.content" :key="index" > {{content.title}} | {{content.text}} </div>-->
  </div>
</template>

<style lang="scss" module>
.container {
  //background-color: darkblue;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  color: white;
  width: max-content;
  margin: auto;
}

.navigation {

}

.temp {
  background: rgb(28, 24, 40); // тёмно-фиолетовый, чуть светлее фона
  border: 1px solid rgba(255, 255, 255, 0.05); // мягкая граница

  width: 100%;
  padding: 10px;
  border-radius: 10px;
}
</style>