<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  width: {
    type: Number,
    default: 1, // 单位rem
  },
  height: {
    type: Number,
    default: 1, // 单位rem
  },
  fill: {
    type: String,
    default: 'var(--text-color)',
  }
})
// 获取body元素
const bodyElement: HTMLElement | null = document.body;

const fontSizeValue = ref(0)
if (bodyElement) {
  // 获取body元素的font-size属性
  const bodyFontSize: string = window.getComputedStyle(bodyElement).getPropertyValue('font-size');
  fontSizeValue.value = parseFloat(bodyFontSize);
}

</script>

<template>
<div>
  <svg t="1704336911470" id ="right-arrow" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18170" :width="props.width*fontSizeValue" :height="props.height*fontSizeValue" >
    <path d="M288.791335 65.582671l446.41733 446.417329-446.41733 446.417329z" p-id="18171"></path></svg>
</div>
</template>

<style scoped>

</style>
