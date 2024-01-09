<script setup lang="ts">
import {useJobExperienceStore} from "@/stores/jobExperience";
import IconRightArrow from "@/components/Icons/IconRightArrow.vue";

const workExperience = useJobExperienceStore();

const highlight =(company: string,index: number)=> {
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, i) => {
    if (i  === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  workExperience.getJobExperience(company)
}

const getCompanyURL = ()=>{
  if(workExperience.jobDetail?.companyAddress){
    return `${workExperience.jobDetail?.companyAddress}`
  }else {
    return `javascript:void(0);`
  }

}
</script>

<template>
<div class="experience-container">

  <ul class="experience-list">
    <li v-for="(item, index) in workExperience.jobExperienceList" :key="item.company">
      <div class="timeline" id="timeline">
        <div class="timeline-item" @click="highlight(item.company,index)">
          <div class="timeline-content">
            <h3>{{item.company}}</h3>
          </div>
        </div>
      </div>
    </li>
  </ul>
  <div v-if="workExperience.jobDetail" class="experience-detail">
    <h3  class="head">
      <span>{{workExperience.jobDetail?.position}}</span>
      <span class="company">
        &nbsp;@&nbsp;
      <a :href="getCompanyURL()">{{workExperience.jobDetail?.company}}</a>
      </span>
    </h3>
    <p class="date">{{workExperience.jobDetail?.startTime}} &nbsp;-&nbsp; {{workExperience.jobDetail?.endTime}}</p>
    <div class="description-container">
      <p class="description" v-for="(item,index) in workExperience.jobDetail?.descriptions" :key="index">
        <icon-right-arrow/>
        <span>{{item}}</span>
      </p>
    </div>
  </div>
</div>
</template>

<style scoped lang="less">
.experience-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 1rem;
}
// date
.date  {
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--light-slate);
}

.experience-detail {
  flex-basis: 70%;
}
// 设置头部样式
.head {
  font-size: 1.375rem;
  margin: 1.25rem 0;
}
.description-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto; /* 设置溢出部分可以滚动 */
}
.description {
  display: flex;
  justify-content: flex-start;
  span{
    margin-left: 1rem;
  }
}
// 设置时间线样式
.experience-list {
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}


// 时间轴
.timeline {
  position: relative;
  //width: 50%;
}
#timeline:hover  {
  color: var(--tcolor);
  cursor: pointer;
  .timeline-item {
    .timeline-content {
      border:1px solid var(--tcolor);
    }
  }
}
.timeline-item {
  position: relative;
  margin: 1.25rem 0;
  cursor: pointer; /* Add cursor pointer on hover */
}

.timeline-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -0.25rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--tcolor);
  border-radius: 50%;
  z-index: 1;
}

.timeline-item::after {
  content: "";
  position: absolute;
  top:0.5rem;
  left: -0.125rem;
  width: 0.25rem;
  height: 100%;
  background: linear-gradient(to bottom,  var(--tcolor), transparent);
  z-index: 0;
}

.timeline-content {
  margin-left: 1.25rem;
  padding: 0.625rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.timeline-item.active::before {
  background-color: #e74c3c; /* Highlight color */
}

.timeline-item.active::after {
  background: linear-gradient(to bottom, #e74c3c, transparent);
}
.company{
  color: var(--tcolor);
  a {
    transition: var(--transition);
  }
}
</style>
