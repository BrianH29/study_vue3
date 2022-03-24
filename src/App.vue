<script setup>
import StudyProps from './views/chapter/studyProps.vue';
import StudyAttr from './views/studyAttr.vue';

const name = "Brian"; 

async function pressed(info){
  alert('hello from pressed function' + info);
}
</script>

<template>
  <StudyProps :name="name" @pressed="pressed" />
  <router-link to="/study/ref">refs!!</router-link>
  <router-view></router-view>
  <br/><br/><br/><br/><br/><br/>
  
  <StudyAttr class="green"></StudyAttr>
</template>

