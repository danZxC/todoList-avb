<template>
  <div class="wrapper">
    <SideBar />

    <main class="router-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Funnel+Sans:wght@300..800&display=swap');

$background-color: white;
$accent-color: #2c3e50;
$hover-color: #2980b9;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>

<style scoped>

.wrapper {
   font-family: "Funnel Sans", sans-serif;
  display: flex;
  justify-content: space-between;
}
.router-content{
flex:1;
padding: 0 100px;
}
</style>