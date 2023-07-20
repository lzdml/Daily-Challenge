<template>
  <div class="grid-item">
    <div class="title">
      <span>{{ chooseItem.title }}</span>
      <div class="copy-container" @click="copy(chooseItem.desc)">
        <img class="copy-item" src="/copy.png" alt="" />
        <img class="copy-item-active" src="/copy-active.png" alt="" />
      </div>
    </div>
    <div class="desc">{{ chooseItem.desc }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const props = defineProps(["item"]);

const chooseItem = ref({
  ...props.item,
  checked: false,
});


const copy = (targetValue: string) => {
  const textInput = document.createElement("input");
  textInput.value = targetValue;
  document.body.appendChild(textInput);
  textInput.select();
  document.execCommand("copy");
  document.body.removeChild(textInput);
  chooseItem.value.checked = !chooseItem.value.checked;
};
</script>

<style scoped>
.grid-item {
  /* width: 300px; */
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
}

.grid-item:not(:last-child) {
  margin-bottom: 12px;
}

/* @media only screen and (max-width: 800px) {
  .grid-item {
    width: 280px;
  }
}

@media only screen and (max-width: 700px) {
  .grid-item {
    width: 100%;
  }
} */

.title {
  padding: 16px 10px;
  text-align: left;
  font-weight: bold;
  box-shadow: inset 0px -1px 1px -1px black;
  position: relative;
}

.desc {
  padding: 16px;
  text-align: left;
}

.copy-container {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.copy-item-active,
.copy-item {
  width: 20px;
  height: 20px;
}

.copy-container .copy-item-active {
  display: none;
}

.title:hover .copy-item-active {
  display: block;
}

.title:hover .copy-item {
  display: none;
}

.ui-message {
  font-family: "ZI_M";
  font-weight: bold;
  border-width: 1px;
  border-style: solid;
  border-color: #ebeef5;
  background-color: #edf2fc;
  transform: translateX(-50%);
  position: fixed;
  left: 50%;
  top: 20px;
  transition: opacity 0.3s, transform 0.4s, top 0.5s;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
}

.ui-message-center {
  justify-content: center;
}

.ui-message .message-content {
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1;
}

.ui-message .close-button {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  width: 12px;
  height: 12px;
  background-size: 100% 100%;
}

.ui-message-leave {
  opacity: 0;
  transform: translate(-50%, -100%);
}

.ui-message-enter {
  opacity: 1;
  transform: translate(-50%, -100%);
}

.ui-message-info .message-content {
  color: #909399;
}

.ui-message-success {
  background-color: #7cae4d;
  border-color: transparent;
}

.ui-message-success .message-content {
  color: #fff;
}

.ui-message-warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.ui-message-warning .message-content {
  color: #e6a23c;
}

.ui-message-error {
  background-color: #ff4445;
  border-color: transparent;
}

.ui-message-error .message-content {
  color: #fff;
}
</style>
