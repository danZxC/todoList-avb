import {defineStore} from 'pinia'
import Category from '../types/CategoryType';
import db from '@/app/database.js'

export let useCategory = defineStore('category', {
  state: () => ({
    Categories: [
      { id: 1, title: 'Работа',     color: '#e74c3c', icon: 'briefcase' },  
      { id: 2, title: 'Учёба',      color: '#3498db', icon: 'book' },       
      { id: 3, title: 'Дом',        color: '#2ecc71', icon: 'home' },       
      { id: 4, title: 'Спорт',      color: '#e67e22', icon: 'dumbbell' },   
      { id: 5, title: 'Путешествия',color: '#9b59b6', icon: 'plane' },      
      { id: 6, title: 'Хобби',      color: '#1abc9c', icon: 'palette' }     
    ] as Category[],
  }),
})

