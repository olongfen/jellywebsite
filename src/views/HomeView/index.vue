<script setup lang="ts">
import AboutMe from "@/views/HomeView/components/AboutMe.vue";
import IconAboutMe from "@/components/Icons/IconAboutMe.vue";
import IconExperience from "@/components/Icons/IconExperience.vue";
import IconWork from "@/components/Icons/IconWork.vue";
import IconContact from "@/components/Icons/IconContact.vue";
import Experience from "@/views/HomeView/components/Experience.vue";
import Work from "@/views/HomeView/components/Work.vue";
import Contact from "@/views/HomeView/components/Contact.vue";
import {usePersonDetailStore} from "@/stores/personDetail";
import {onMounted} from "vue";
import {useJobExperienceStore} from "@/stores/jobExperience";
import {useWorkStore} from "@/stores/work";

const personDetail = usePersonDetailStore();
const jobExperience = useJobExperienceStore();
const work = useWorkStore();
onMounted(async ()=>{
  await personDetail.getPerson('olongfen@gmail.com')
  await jobExperience.getJobExperienceList()
  await work.getWorkList()
})

</script>

<template>
<div  class="person-container">
  <div class="person-show common ">
    <h1 class="person">Hi, 我的英文名字是</h1>
    <h2 class="name">{{personDetail.person?.name}}.</h2>
    <p class="detail">{{personDetail.person?.introduction}}
    </p>
  </div>
  <div id="about" class="common">
    <div class="person-title">
    <icon-about-me/>
      <h1 >简介</h1>
    </div>
    <about-me/>
  </div>
  <div id="experience" class="common">
    <div class="person-title">
    <icon-experience/>
      <h1 >经历</h1>
    </div>
    <experience/>
  </div>
  <div id="work" class="common">
    <div class="person-title">
      <icon-work/>
      <h1 >项目</h1>
    </div>
    <work/>
  </div>
  <div id="contact" class="common">
    <div class="person-title">
      <icon-contact/>
      <h1 >联系</h1>
    </div>
    <contact/>
  </div>
</div>



</template>

<style scoped>
/* 人物容器 */
.person-container {
  width: 100%;
}
.person-show {
  width: 100%;
  margin: 12.25rem 0  ; /* 上下边距12.75rem 左边距1.25rem */
}
/* 人物 */
.person {
  width: 100%;
  color: var(--tcolor);
}
/* 名字 */
.name {
  font-size: 3.75rem;
}
.name:first-letter {
  text-transform: uppercase;
}
/* 详情 */
.detail {
  font-size: 1.25rem;
}

/* 图标大小 */
.icon {
  width: 3rem;
  height: 3rem;
}
/* 标题 */
.person-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: var(--tcolor);
  margin: 2.25rem 0   ; /* 上下边距6.25rem */
  h1{
    font-size: 1.5rem;
    margin-left: 1rem;
  }
}
.common {
  width: 100%;
  margin-top: 12.25rem;
  margin-bottom: 12.25rem;
  padding-left:   15%;
}
</style>
