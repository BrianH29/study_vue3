<template>
      <h3>hello world!!!</h3>
      <h5>received name : {{ props.name }}</h5>
      <button @click="getAlert">press me</button>
</template>

<script setup lang="ts">
const emits = defineEmits(['pressed'])

function getAlert(){
  emits('pressed', 'test 123')
}

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
