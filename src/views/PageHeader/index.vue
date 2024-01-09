<script setup lang="ts">
import Logo from "@/components/Icons/IconLogo.vue";
import IconExpandLeft from "@/components/Icons/IconExpandLeft.vue";
import IconClose from "@/components/Icons/IconClose.vue";
import {ref} from "vue";
const openMobileMenu = () => {
  const mobileMenu = document.getElementById('mobile-menu-wrapper')
  if (mobileMenu) {
    mobileMenu.classList.toggle('show')
    isOpen.value=false
  }
  const bodyElement: HTMLElement | null = document.body;
  if (bodyElement) {
    bodyElement.style.overflow = 'hidden'
  }
}
const closeMobileMenu = () => {
  const mobileMenu = document.getElementById('mobile-menu-wrapper')
  if (mobileMenu) {
    mobileMenu.classList.remove('show')
    isOpen.value=true
  }
  const bodyElement: HTMLElement | null = document.body;
  if (bodyElement) {
    bodyElement.style.overflow = 'auto'
  }
}
const isOpen = ref(true)


</script>

<template>
<div class="page-header-wrapper">
  <div class="page-header-container">
<!--    logo -->
    <div class="logo">
      <Logo/>
    </div>
    <div class="person-line">
      <h1>创造着数字世界的交响曲</h1>
    </div>
<!--    菜单列表-->
    <div class="menu-container">
      <ul class="menu-list">
        <li class="menu">  <a href="#about"> About </a></li>
        <li class="menu">  <a href="#experience"> Experience</a></li>
        <li class="menu">  <a href="#work">Work </a></li>
        <li class="menu">  <a href="#contact"> Contact</a></li>
        <li class="resume"><a  href="resume">Resume</a></li>
      </ul>
    </div>
    <div class="open-mobile">
      <button v-if="isOpen" @click="openMobileMenu" >
        <icon-expand-left/>
      </button>
      <button v-else @click="closeMobileMenu" class="mobile-menu-close">
        <icon-close/>
      </button>
    </div>
  </div>
</div>
<!--移动端菜单-->
  <aside class="hidden" id="mobile-menu-wrapper">
    <button @click="closeMobileMenu" class="mobile-menu-close">
      <svg t="1704424516602" class="icon " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="35195" width="50" height="50"><path d="M548.992 503.744L885.44 167.328a31.968 31.968 0 1 0-45.248-45.248L503.744 458.496 167.328 122.08a31.968 31.968 0 1 0-45.248 45.248l336.416 336.416L122.08 840.16a31.968 31.968 0 1 0 45.248 45.248l336.416-336.416L840.16 885.44a31.968 31.968 0 1 0 45.248-45.248L548.992 503.744z" p-id="35196"></path></svg>
    </button>
    <nav>
      <ul class="mobile-menu-container">
        <li class="menu resume mobile-menu"><button @click="closeMobileMenu"><a href="#about"> About </a></button></li>
        <li class="menu resume mobile-menu"><button @click="closeMobileMenu"><a href="#experience"> Experience</a></button></li>
        <li class="menu resume mobile-menu"><button @click="closeMobileMenu"><a href="#work">Work </a></button></li>
        <li class="menu resume mobile-menu"><button @click="closeMobileMenu"><a href="#contact"> Contact</a></button></li>
        <li class="resume mobile-menu"><button @click="closeMobileMenu"><a  href="#resume">Resume</a></button></li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped lang="less">
.page-header-wrapper {
  padding: 0 3.125rem; /* 左右边距3.125rem */
  max-width: 100%; /* 宽度为100% */
  height: 100px; /* 高度为100px */
  border-bottom: 1px solid var(--tcolor); /* 底部边框 */
}
.page-header-container {
  display: flex; /* 弹性布局 */
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 水平间距 */
  height: 100%; /* 高度为100% */
  text-align: center;
}
.person-line{
  width: 30%;
  color: var(--tcolor);
  line-height: 3rem;
  min-width: 6rem;
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
  width: 5rem; /* 宽度为7.25rem */
  background:  linear-gradient(to bottom right, var(--tcolor), var(--text-color));
  border-radius: 10px; /* 圆角效果，可根据需要调整 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 初始阴影效果，可根据需要调整 */
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out; /* 动画效果，可根据需要调整 */
  line-height: 2rem; /* 使文本垂直居中 */
  text-align: center; /* 使文本水平居中 */
}

.resume:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4); /* 鼠标悬停时的阴影效果，可根据需要调整 */
  transform: translate(10px, 10px); /* 鼠标悬停时向左上角移动，可根据需要调整 */
}




.mobile-menu-close {
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 999;
}
.mobile-menu-container{
  position: absolute;
  background-color: #deecff;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: -10px 0 30px -15px var(--navy-shadow);
  width: 0;
  animation: expand .5s ease-in-out forwards;
}
.mobile-menu {
  line-height: 3rem;
  width: 100%;
  background:  linear-gradient(to bottom right, var(--tcolor), var(--text-color));
  margin: 2.25rem;
  border: 1px solid var(--tcolor);
  button {
    width: 100%;
  }
}
@keyframes expand {
  to {
    width: 50%;
  }
}

</style>
