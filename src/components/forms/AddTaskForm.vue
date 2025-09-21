<template>
  <div v-show="isOpen" class="modal-overlay">
    <div class="modal-content">
      <h2>Новая задача</h2>
      <form @submit.prevent="addTask">
        <input
          v-model="title"
          type="text"
          placeholder="Введите название задачи"
          required
        />

        <textarea
          v-model="description"
          placeholder="Введите описание (необязательно)"
        ></textarea>

        <label>
          Цвет:
          <input v-model="color" class="color-picker" type="color" />
        </label>

        <div class="modal-actions">
          <button type="submit">Добавить</button>
          <button type="button" @click="close">Отмена</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCurrentTasks } from '@/app/stores/TasksStore'

const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()
let inputs: NodeListOf<HTMLInputElement | HTMLTextAreaElement>
const store = useCurrentTasks()

const title = ref('')
const description = ref('')
const color = ref('#3498db')

function close() {emit('close')}

function addTask() {
  store.addTask({
    id:Date.now() + Math.floor(Math.random() * 1000),
    title:title.value,
    description: description.value,
    color:color.value,
  })

  inputs.forEach(input=>{input.style.height='auto'})
  title.value = ''
  description.value = ''
  color.value = '#3498db'
  close()
}


onMounted(()=>{
  inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement; // приведение типа

      // Авто-ресайз для textarea
      if (target.tagName.toLowerCase() === 'textarea') {
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 2 + 'px';
      }
    });
  });
})

</script>

<style scoped>
/* затемнение фона */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

/* сама форма */
.modal-content {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.2s ease-in-out;
}

.modal-content h2 {
  margin-bottom: 15px;
}

form {
  display: flex;
  flex-direction: column;
  gap:20px;
}

.modal-content input,
.modal-content textarea {
  width: 90%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}


.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.modal-actions button {
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.modal-actions button[type="submit"] {
  background: #2c3e50;
  color: white;
}

.modal-actions button[type="submit"]:hover {
  background: #2980b9;
}

.modal-actions button[type="button"] {
  background: #eee;
}

.modal-actions button[type="button"]:hover {
  background: #ddd;
}


label {
  display: flex;
  gap:20px;
  width: 30%;
  justify-content: space-between;
  align-items: center;
}
.color-picker {
  border: none;
  width: 60% !important;
  height: 40px !important;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background: none;
}


input[type="text"],
textarea,
.color-picker {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  outline: none; /* убираем стандартную синюю обводку */
  transition: all 0.3s ease;
  font-size: 16px;
  background-color: var(--background-color);
  color: var(--accent-color);
}

/* Эффект при фокусе */
input[type="text"]:focus,
textarea:focus,
.color-picker:focus {
  border-color: var(--accent-color);
  transform: scale(1.01); /* чуть-чуть увеличиваем */
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
