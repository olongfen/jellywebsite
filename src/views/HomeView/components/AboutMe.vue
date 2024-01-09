<script setup lang="ts">
import {usePersonDetailStore} from "@/stores/personDetail";
import RightArrow from "@/components/Icons/IconRightArrow.vue";
const personDetail = usePersonDetailStore();
</script>

<template>
<div class="about-me-container">
  <p class="introduction" v-for="(item,index) in personDetail.person?.aboutMeIntroduction" :key="index">{{item}}<br></p>
  <div class="skill-container">
    <div class="skill" v-for="(item,index) in personDetail.person?.aboutMeSkills" :key="index">
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
