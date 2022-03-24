<template>
  <div>
      <h3>hello world!!!</h3>
      <h5>received name : {{ props.name }}</h5>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
  // const props = defineProps({
  //   name: String
  // })

interface Name {
  name?: string
} 

//withDefault ts- only feature
  const props = withDefaults(defineProps<Name>(), {
    name : 'Jack',
  });
</script>

<style lang="scss" scoped>

</style>