<script setup lang="ts">
import Logo from "@/components/Icons/IconLogo.vue";
</script>

<template>
<div class="page-header-wrapper">
  <div class="page-header-container">
<!--    logo -->
    <div class="logo">
      <Logo/>
    </div>
<!--    菜单列表-->
    <div class="menu-container">
      <ul class="menu-list">
        <li class="menu"><a href="#about"> About </a></li>
        <li class="menu"><a href="#experience"> Experience</a></li>
        <li class="menu"><a href="#work">Work </a></li>
        <li class="menu"><a href="#contact"> Contact</a></li>
      </ul>
      <div class="resume"><a  href="resume">Resume</a></div>
    </div>
  </div>
</div>
</template>

<style scoped lang="less">
.page-header-wrapper {
  padding: 0 3.125rem; /* 左右边距3.125rem */
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%; /* 宽度为100% */
  height: 100px; /* 高度为100px */
  border-bottom: 1px solid var(--tcolor); /* 底部边框 */
}
.page-header-container {
  display: flex; /* 弹性布局 */
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 水平间距 */
  height: 100%; /* 高度为100% */
}

.menu-container {
  display: flex; /* 弹性布局 */
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 水平间距 */
}
.menu-list {
  display: flex;
  justify-content: space-around;
  align-items: center;

}
.menu {
  text-align: center;
  margin: 0 1.25rem;
  a:hover {
    color: var(--tcolor);
  }
}
.resume {
  width: 7.25rem; /* 宽度为7.25rem */
  margin: 3.125rem 0 ; /* 上下边距3.125rem */
  height: 3.125rem; /* 高度为3.125rem */
  background:  linear-gradient(to bottom right, var(--tcolor), var(--text-color));
  border-radius: 10px; /* 圆角效果，可根据需要调整 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 初始阴影效果，可根据需要调整 */
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out; /* 动画效果，可根据需要调整 */
  line-height: 3.125rem; /* 使文本垂直居中 */
  text-align: center; /* 使文本水平居中 */
}

.resume:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4); /* 鼠标悬停时的阴影效果，可根据需要调整 */
  transform: translate(10px, 10px); /* 鼠标悬停时向左上角移动，可根据需要调整 */
}

</style>
