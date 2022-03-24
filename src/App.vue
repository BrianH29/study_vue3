<script setup>
import StudyProps from './views/chapter/studyProps.vue';
const name = "Brian"; 
</script>

<template>
  <StudyProps />
  <router-link to="/study/ref">refs!!</router-link>
  <router-view></router-view>
</template>

