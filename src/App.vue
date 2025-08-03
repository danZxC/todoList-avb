<template>
  <div class="wrapper" theme = 'white'>
    <header>
      <h1>Список задач</h1>
      <button id="change-theme-button" @click="SwitchTheme">Сменить тему</button>
    </header>   
    <div class="add-task-container">
      <input type="text" v-model="message" id="add-task-input">
      <button id="add-task-button" @click="CreateTask">Добавить</button>
    </div>

    <div class="task-container">
      <Task :text ="task.text" :id = "task.id" v-for="task in taskArray" :key="task.id" @Delete = 'DeleteTask'/>
    </div>

  </div>
  
</template>

<script setup>
import Task from './components/Task.vue';
import { ref, onMounted } from 'vue'

// reactive state
let currentId = ref(0)

const message = ref('')
let currentText = ref('')
let tempObj = ref({
  id:0,
  text:''
})

let taskArray = ref([])

function CreateTask()  {
  tempObj.value.id=currentId.value
  tempObj.value.text=message.value
  message.value=''
  
  taskArray.value.push(tempObj.value)

  currentId.value++
  tempObj.value = {}
}

function DeleteTask (id) {
 let deletedTask = taskArray.value.find((task)=> task.id == id)
 taskArray.value = taskArray.value.filter((task) => task!=deletedTask)
}

function SwitchTheme() {

  let currentTheme = document.querySelector('.wrapper').getAttribute('theme')
  const root = document.documentElement
  if(currentTheme == 'white') {
    root.style.setProperty('--background-color', 'white')
    root.style.setProperty('--accent-color', 'black')
    root.style.setProperty('--additional-color', '#F9F9F9')
    root.style.setProperty('--button-color', 'green')
    document.querySelector('.wrapper').setAttribute('theme','black')
  }
  else if ('black') {
    root.style.setProperty('--background-color', 'black')
    root.style.setProperty('--accent-color', 'white')
    root.style.setProperty('--additional-color', '#F9F9F9')
    root.style.setProperty('--button-color', 'yellow')
    document.querySelector('.wrapper').setAttribute('theme','white')

  }
}


document.addEventListener('keyup', event => {
  if( event.code === 'Enter' )
  CreateTask()
})


onMounted(() => {
  SwitchTheme()
})
</script>


<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>

<style scoped lang="scss">

  :root {
    --background-color: white,
    --accent-color:black,
    --additional-color: #F9F9F9,
    --button-color: green,
  }


  .wrapper {
    overflow: hidden;
    width: 40%;
    height: 90vh;
    padding:40px 100px;
    margin: auto;
    background-color: var(--background-color);
  }
  header  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:40px;
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
      padding:40px ;
    }
  }
  @media (max-width:500px) {
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


