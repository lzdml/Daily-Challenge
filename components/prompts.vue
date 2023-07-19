<template>
  <div style="position: relative">
    <div class="title-container ">
      <div
        class="btn"
        v-for="item in allPrompts"
        :class="{ active: item.title === checkedKeyword }"
        :key="item.id"
        @click="select(item)"
      >
        {{ item.title.substring(1) }}
      </div>

      <div class="reset" @click="checkedKeyword = ''">重置</div>
    </div>
    <div class="grid-container">
      <prompt-item
        class="item"
        v-for="item in filterPrompts"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import promptItem from "./prompt-item.vue";
import { allPrompts } from "./constant";
import { computed, onMounted, ref } from "vue";

const checkedKeyword = ref("");
const select = (item) => {
  checkedKeyword.value = item.title;
};

const filterPrompts = computed(() =>
  allPrompts.filter((item) => item.title.includes(checkedKeyword.value))
);

console.log("filterPrompts :>> ", filterPrompts.value);

// 示例使用
onMounted(() => {
  // const waterfall = new Waterfall(".grid-container", ".item", 300, 10);
});
</script>

<style scoped>
.grid-container {
  width: 100%;
  margin: 20px 0;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px; */
}

.title-container {
  display: flex;
  flex-wrap: wrap;
  max-height: 200px;
  overflow-y: auto;
  column-gap: 10px;
  row-gap: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 16px;
}

.title-container .btn {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
}

.reset {
  position: absolute;
  right: 16px;
  top: 10px;
  cursor: pointer;
}

/* 滚动槽 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.06);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}

.active {
  background: #F02D2D;
  color: #fff;
  border-color: #F02D2D !important;
}

/* @media only screen and (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 600px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
} */
</style>
