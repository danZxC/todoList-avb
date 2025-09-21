import {defineStore} from 'pinia'
import Task from '@/app/types/TaskType'
import db from '@/app/database.js'

export let useCurrentTasks = defineStore('currentTasks', {
    state:()=>({
        tasks:  [] as Task [],
        editedIdTask: null as number | null
    }),
    

    actions: {
        async addTask(task: Task) {
            const id = await db.tasks.add(task);
            this.tasks.push({ ...task, id });
        },

        async editTask(newTask:Task,id:number){
            const index = this.tasks.findIndex(task => task.id === id);
            if (index !== -1) {
                this.tasks[index] = { ...this.tasks[index], ...newTask };
            }

            await db.tasks.update(id, {
                title: newTask.title,
                description: newTask.description,
                color: newTask.color
            });
        },

        async deleteTask(id: number) {
            await db.tasks.delete(id);
            this.tasks = this.tasks.filter(task => task.id !== id)
        },
        async loadTasks() {
            this.tasks = await db.tasks.toArray();
            console.log("Задачи из IndexedDB:", this.tasks);
        }

        
    }
})

