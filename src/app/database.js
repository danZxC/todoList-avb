
import Dexie from "dexie";

export const db = new Dexie("MyLocalDB");

db.version(1).stores({
  users: "++id, name, email", // id автоинкремент, индекс по name и email
  tasks: "++id, title, description, color"
});


export default db