<template>
    <h3 v-bind="$attrs">hello world!!!</h3>
    <h5>test !!!!</h5>
    <button>press me</button>
</template>

<script>
export default{
  inheritAttrs: false
}
</script>

<script setup>
// import { useAttrs } from "vue";

// const attrs = useAttrs();
</script>

<style scoped>
.green{
  background-color: green;
}
</style>