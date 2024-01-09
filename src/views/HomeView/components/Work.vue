<script setup lang="ts">
import IconRightArrow from "@/components/Icons/IconRightArrow.vue";
import {useWorkStore} from "@/stores/work";
const workStore = useWorkStore();

</script>

<template>
<div class="work-container">
  <ul class="work-list">
    <li class="work" v-for="(item,index) in workStore.workList" :key="index">
      <h3 class="project-name">{{item.name}}</h3>
      <p class="description" v-for="(desc,index1) in item.descriptions" :key="index1">
        <icon-right-arrow/>
        <span>{{desc}}</span>
      </p>
      <div class="skill-container">
        <p class="skill" v-for="(skill,index2) in item.skills" :key="index2">
        {{skill}}
      </p>
      </div>
    </li>
  </ul>
</div>
</template>

<style scoped lang="less">

.work-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}
.work {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid var(--tcolor);
  padding: 0 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 5px var(--tcolor);
}
.project-name{
  text-align: center;
  margin-top: 1rem;
  font-size: 1.375rem;
}
.project-name:hover {
  color: var(--tcolor);
}
.description {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span{
    margin-left: 1rem;
  }
}
.skill-container {
  display: flex;
  flex-wrap: wrap ;
  justify-content: space-evenly;
  align-items: center;
}
.skill {
  flex: 1 0 20%;
  color: var(--text-color);
  min-width: calc(33.33% - 20px); /* 控制每个子项的最小宽度，可以根据需要调整 */
  margin: 10px; /* 设置间距，可以根据需要调整 */
  box-sizing: border-box;
  background-color: lightblue;
  padding: 10px;
  text-align: center;
}

</style>
