<script setup lang="ts">
import {useAboutMeStore} from "@/stores/abountMe";
import RightArrow from "@/components/Icons/IconRightArrow.vue";
const aboutMe = useAboutMeStore();
</script>

<template>
<div class="about-me-container">
  <p class="introduction" v-for="(item,index) in aboutMe.data.introduction" :key="index">{{item}}<br></p>
  <div class="skill-container">
    <div class="skill" v-for="(item,index) in aboutMe.data.skills" :key="index">
      <right-arrow/>
      <span>
      {{item}}
    </span>
    </div>
  </div>
</div>
</template>

<style scoped>
.about-me-container {
  padding: 0 1rem;
}
.introduction {
  font-size: 1.25rem;
}
.skill-container {
  display: flex;
  flex-wrap: wrap;
}
.skill {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0.5rem 0.5rem 0;
  width: 30%;
  span{
    margin-left: 1rem;
  }
}
</style>
