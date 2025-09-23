
import Dexie, { Table } from "dexie"
import Task from "./types/TaskType";
import Category from "./types/CategoryType";

export class MyLocalDB extends Dexie {
  tasks!: Table<Task>
  categories!: Table<Category>

  constructor() {
    super("MyLocalDB")
    this.version(1).stores({
      tasks: "++id, title, description, color",
      categories:'++id, title, color, icon' 
    })
  }
}

export const db = new MyLocalDB()
export default db