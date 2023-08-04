<template></template>

<script setup>
function isClient() {
  return typeof document !== "undefined";
}
const client = isClient();
console.log("client :>> ", client);

if (client) {
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?68856d7179a81e5d0961e3feade3dfbb";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
}
</script>

<style scoped></style>
