import { defineStore } from 'pinia';

// eslint-disable-next-line import/no-unresolved
import { task as taskType } from 'modules/TaskType';

const useStore = defineStore('main', {
    state: () => ({
        tasks: [
            // { id: '1', name: 'Task 1', priority: 1 },
            // { id: '2', name: 'Task 2', priority: 2 },
            // { id: '3', name: 'Task 3', priority: 3 },
            // { id: '4', name: 'Task 4', priority: 2 },
            // { id: '5', name: 'Task 5', priority: 3 },
            // { id: '6', name: 'Task 6', priority: 1 },
        ],
    }),
    actions: {
        setTasks() {
            const localTasks: string | null = localStorage.getItem('tasks')
            this.tasks = JSON.parse(localTasks);
        },
        addTask(newTask: taskType ) {
            const task = {...newTask };
            task.id = `${ this.tasks.length }`;
            this.tasks.push(task);
            this.updatedLocalTasks();
        },
        removeTask(id: string) {
            let taskIndex = 0;
            this.tasks.forEach((task, index) => {
                if (task.id === id) {
                    taskIndex = index;
                    return false;
                }
                return true;
            });
            this.tasks.splice(taskIndex, 1);
            this.updatedLocalTasks();
        },
        completeAll() {
            this.tasks.splice(0, this.tasks.length);
            this.updatedLocalTasks();
        },
        updatedLocalTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    },
    getters: {
        getTasks: state => state.tasks.sort((task1, task2) => task1.priority - task2.priority),
    },
});

export default useStore;
