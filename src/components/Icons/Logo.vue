<script setup lang="ts">

</script>

<template>
<div>
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <!-- 外边框渐变效果 -->
    <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#29a9df;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#244399;stop-opacity:1" />
    </linearGradient>

    <!-- 炫酷的多边形，颜色：外边框渐变 -->
    <polygon points="25,10 75,10 90,50 75,90 25,90 10,50" fill="url(#outerGradient)" class="hover-effect" />

    <!-- 内部图案渐变效果 -->
    <radialGradient id="innerGradient" cx="50%" cy="50%" r="70%">
      <stop offset="0%" style="stop-color:#ff9a8b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ff6b7c;stop-opacity:1" />
    </radialGradient>

    <!-- 字母 "J"，颜色：内部渐变效果 -->
    <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="url(#innerGradient)" class="hover-effect">J</text>

    <!-- 阴影效果 -->
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
      <feOffset dx="5" dy="5" result="offsetblur" />
      <feFlood flood-color="black" />
      <feComposite in2="offsetblur" operator="in" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

  </svg>

</div>
</template>

<style scoped>

.hover-effect {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.hover-effect:hover {
  transform: scale(1.1);
  opacity: 0.9;
}
</style>
