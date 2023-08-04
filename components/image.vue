<template>
  <div class="image-nav">
    <div v-for="name in names" :key="name" class="image-item">
      <img :src="useStaticImage(name)" />
      <div class="name">{{ name }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  list: {
    type: Array,
    default: [],
  },
});
console.log("props.list :>> ", props.list);

const names = ref(
  props.list.length > 0
    ? props.list
    : [
        "euler-a",
        "euler",
        "lms",
        "heun",
        "dpm2",
        "dpm2-a",
        "dpm2sa",
        "dpm2m",
        "dpmsde",
        "dpm-fast",
        "dpm-adaptive",
        "lms-karras",
        "dpm2-karras",
        "dpm2-a-karras",
        "dpm-2s-karras",
        "dpm-2m-karras",
        "dpm-sde-karras",
        "ddim",
        "plms",
      ]
);

const useStaticImage = (name) => {
  return new URL(`../docs/assets/${name}.png`, import.meta.url).href;
};
</script>

<style scoped>
.image-nav {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

.image-nav img {
  width: 200px;
  height: 200px;
  border-radius: 8px;
  margin-right: 10px;
  object-fit: contain;
}

.image-item {
  display: inline-block;
  text-align: center;
}

.name {
  margin: 5px 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.image-nav::-webkit-scrollbar {
  height: 6px;
}

.image-nav::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: #ddd;
}

.image-nav::-webkit-scrollbar-track {
  background-color: #f9f9f9;
}

.image-nav::-webkit-scrollbar-button {
  display: none;
}
</style>
