<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2>Меню</h2>
    </div>

    <nav class="sidebar-nav">
      <ul>
        <li><router-link :to="{ name: 'main' }">Главная</router-link></li>
        <li><router-link :to="{ name: 'tasks' } ">Задачи</router-link></li>

        <li><router-link :to="{ name: 'statistic' } ">Статистика</router-link></li>
        <li><a href="#">Режим фокуса</a></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
// пока без логики, просто статичное меню
</script>

<style scoped>
.sidebar {
  width: 220px;
  height: 100vh; /* на всю высоту экрана */
  background-color: #2c3e50;
  color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
}

.sidebar-header {
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-nav {
  flex: 1; /* займёт оставшееся место */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* не слишком высоко */
  padding: 30px 0; /* немного отступим вниз */
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  margin: 12px 0;
}

.sidebar-nav a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 20px;
  display: block;
  border-radius: 6px;
  transition:  0.2s;
}

.sidebar-nav a:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
