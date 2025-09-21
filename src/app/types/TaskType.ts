interface Task {
    id: number,
    title: string,
    description: string,
    color?:string,
    // status?: 'to-do' | 'in process' | 'done',
    // priority?: 'low' | 'medium' | 'high'
}

export default Task