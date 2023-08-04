<template>
  <div class="concat">
    <p>
      <span>微信</span>
      <img src="../docs/assets/wx.jpeg" alt="wx" title="wx" />
    </p>
    <p>
      <span>QQ</span>
      <img src="../docs/assets/qq.jpeg" alt="qq" title="qq" />
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.concat {
  display: flex;
  align-items: center;
}
.concat p {
  padding: 10px;
  margin: 20px;
  text-align: center;
  border-radius: 8px;
}
.concat p span {
  display: block;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;
}
.light .concat p {
  background-color: var(--vp-custom-block-info-bg);
}
.dark .concat p {
  background-color: var(--vp-custom-block-info-bg);
}
.concat img {
  width: 140px;
  height: 140px;
  border-radius: 8px;
}
</style>
