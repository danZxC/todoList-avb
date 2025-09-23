<template>
  <div class="wrapper" theme="white">
    <header>
      <h1>Список задач</h1>
      <AddTaskButton @click = 'ToggleAddTaskForm()'/>
    </header>

    <AddTaskForm
      :isOpen="isOpen"
      @close="ToggleAddTaskForm(null)"
      :title="editingTask?.title || ''"
      :description="editingTask?.description || ''"
      :action="editingTask ? 'Редактировать' : 'Создать'"
      :color="editingTask?.color || '#3498db'"
     :id="editingTask?.id ?? null"

    />

    <div class="task-display-wrapper">
      <Task
      v-for="task in taskArray.tasks"
        :key="task.id"
        :title="task.title"
        :id="task.id"
        :description="task.description"
        :color="task.color"
        @editTask="ToggleAddTaskForm"
      />
    </div>

  </div>
</template>

<script setup>
import AddTaskButton from '@/components/UI kit/AddTaskButton.vue'
import Task from '../Task.vue'
import AddTaskForm from '@/components/UI kit/AddTaskForm.vue'
import { onMounted, ref } from 'vue'
import { useCurrentTasks } from '../../app/stores/TasksStore'

let taskArray = useCurrentTasks()
let isOpen = ref(false)
// Добавьте ref для хранения редактируемой задачи
const editingTask = ref(null);

function ToggleAddTaskForm(id = null) {
  if (id !== null) {
    
    const task = taskArray.tasks.find(task => task.id === id);
    if (task) {
      editingTask.value = task; // Сохраняем задачу
    }
  } else {
    editingTask.value = null; // Сбрасываем
  }
  
  isOpen.value = !isOpen.value;
}
onMounted(() => {
  taskArray.loadTasks();
});
</script>


<style scoped lang="scss">

  :root {
    --background-color: white,
    --accent-color:black,
    --additional-color: #F9F9F9,
    --button-color: #2c3e50,
  }

.wrapper {
  height: 90vh;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  gap: 40px;
 border-right: 1px black solid;
  margin-top:50px;
  padding: 0 90px;
  box-sizing: border-box; /* Чтобы padding учитывался в ширине */
}
.task-display-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap:30px;
  
}

  header  {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header h1 {
    font-family: sans-serif;
    font-weight: 800;
    font-size: clamp(20px, 7vw, 40px);
    color: var(--accent-color)
  }
  #change-theme-button {
    width: 30%;
    height: 100%;
    border: 1px solid grey;
    
    color:var(--accent-color);
    background-color: var(--background-color);
    padding: 15px;
    transition: 1s;
  }
  #change-theme-button:hover {
    cursor: pointer;
    background-color: var(--accent-color);
    color:var(--background-color);
    transition: 1s;
  }


  .add-task-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-top: 30px;
  }
  #add-task-input {
    height: 100%;
    width: 69%;
    padding-left: 10px;
    border-radius: 5px;
    /* box-shadow: 0px 0px 4px 5px rgba(0,0,0,0.23); */
    box-sizing: border-box;
    background-color: var(--background-color); 
    color:var(--accent-color);
    border: 1px solid var(--accent-color)

  }
  #add-task-button {
    background-color: var(--button-color);
    color:var(--background-color);
    border-radius: 5px;
    border:none;
    font-weight: 600;
    font-size: 25px;
    height: 100%;
    width: 28%;
  }

  .task-container {
    display: flex;
    gap:10px;
    margin-top:20px;
    flex-direction: column;
  }


  @media (max-width:1024px) {
    .wrapper {
      width: 90%;
      padding:40px;
    }
  }
  @media (max-width:500px) {
    .wrapper {
      padding: 0;
    }
    .add-task-container {
      flex-direction: column;
      height: 150px;
      gap:10px;
    }
    #add-task-input {
      width: 100%;
    }
    #add-task-button {
      width: 100%;
    }
  }

</style>

