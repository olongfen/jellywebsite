<script setup lang="ts">
import {usePersonDetailStore} from "@/stores/personDetail";

const personDetail = usePersonDetailStore();
const openEmailClient = () => {
  window.location.href = `mailto:${personDetail.person?.email}`;
};
</script>

<template>
  <div class="contact-container">
    <h1 class="title-show">Get In Touch</h1>
    <p class="instruction">虽然我目前没有寻找任何新的机会，但我的收件箱始终打开。无论您有疑问还是只是想打个招呼，我都会尽力回复您！</p>
    <button  class="futuristic-button" @click="openEmailClient">发送邮件</button>
  </div>
</template>

<style scoped>
.contact-container {
  text-align: center;
}
.title-show {
  font-size: 3rem;
  color: var(--light-slate);
}
.instruction {
  font-size: 1.25rem;
}
.futuristic-button {
  display: inline-block;
  padding: 1rem 1.857rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  border: 2px solid #3498db;
  border-radius: 8px;
  background: linear-gradient(to right, #3498db, #2980b9);
  transition: background 0.3s, color 0.3s, transform 0.3s;
  overflow: hidden;
  position: relative;
}

.futuristic-button:hover {
  color: #3498db;
  background: linear-gradient(to right, #fff, #f4f4f4);
  border-color: #fff;
  transform: scale(1.1);
}

.futuristic-button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, #3498db, transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.futuristic-button:hover::before {
  opacity: 1;
}
</style>
