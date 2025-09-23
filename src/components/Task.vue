<template>
  <div class="task-card" 
     :style="{ 
       border: `2px solid ${color}`, 
       boxShadow: `0 2px 6px ${color}33` /* 33 = ~20% прозрачности */
     }">
    <!-- декоративная полоска слева -->
    <div class="task-decor" :style="{ backgroundColor: color }"></div>

    <div class="task-content">
      <header>
        <h3 >{{ title }}</h3>
        <div class="buttons">
          <button @click="$emit('editTask', id)"><img src="@/components/assets/edit.svg" alt=""></button>
          <button id="delete-task-button" @click="useCurrentTasks().deleteTask(id)"><img src="@/components/assets/delete.svg" alt=""></button>
        </div>
      </header>
      <div class="category-container">
          <Category
          v-for="category in categories.Categories"
          :key="category.id"
          :title="category.title"
          :color="category.color"
        />
      </div>

      <p v-if="description">{{ description }} </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCurrentTasks } from '@/app/stores/TasksStore';
import Category from './UI kit/Category.vue';
import { useCategory } from '@/app/stores/CategoryStore';

const props = defineProps<{
  id: number
  title: string
  description?: string
  color?: string   
}>()

const categories = useCategory()

</script>

<style scoped>
.task-card {
  display: flex;
  align-items: stretch;
  background: #fff;
  border-radius: 12px;
  width: 30%;
  overflow: hidden; /* чтобы decor выглядел аккуратно */
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}

/* левая цветная полоска */
.task-decor {
  width: 8px;
  flex-shrink: 0;
}

.task-content {
  display: flex;
  flex-direction: column;
  gap:20px;
  flex: 1;
  padding: 20px;
}


header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 25px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.category-container{
  display: flex;
  gap:10px;
  flex-wrap: wrap;
}

.buttons {
  display: flex;
  gap:20px;
  align-items: center;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}
#delete-task-button:hover {
  filter: brightness(0) saturate(100%) invert(19%) sepia(74%) saturate(6315%) hue-rotate(355deg) brightness(97%) contrast(120%);
}

p {
  max-width: 90%;
  font-size: 14px;
  color: #555;
  margin-top: 8px;
}
</style>
