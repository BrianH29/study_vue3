<script setup>
import { customRef } from "vue";

// let count = ref(1);
//
// function double(){
//   count.value = unref(count) * 2;
//   isRef(count) ? alert(0) : alert(1);
// }

// const cube = reactive({
//   length : 10,
//   width: 20,
//   height: 30,
// })

// const length = toRef(cube, 'length');
// const {length, width, height} = toRefs(cube);
function useDebouncedRef(value, delay = 1000) {
  let timeout;
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}

const test = useDebouncedRef('hello');

function change(){
  test.value = 'kevin';
}
</script>

<template>
  <h1>{{ test }}</h1>
  <button @click="change">PRESS</button>
</template>


<style scoped>

</style>
