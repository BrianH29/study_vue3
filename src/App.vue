<script setup>
import {ref, isRef, unref} from "vue";

let count = ref(1);

function double(){
  count.value = unref(count) * 2;
  isRef(count) ? alert(0) : alert(1);
}
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="double">round up</button>
</template>

