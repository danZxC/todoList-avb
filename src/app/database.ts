
import Dexie, { Table } from "dexie"
import Task from "./types/TaskType";

export class MyLocalDB extends Dexie {
  tasks!: Table<Task>

  constructor() {
    super("MyLocalDB")
    this.version(1).stores({
      tasks: "++id, title, description, color"
    })
  }
}

export const db = new MyLocalDB()
export default db