/* eslint-disable import/no-unresolved */
import { defineStore } from 'pinia';

import { task as taskType } from 'modules/TaskType';

import openToast from '../../core/Toast';

const useStore = defineStore('main', {
    state: () => ({
        tasks: [
            { id: '', name: '', priority: 0 },
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
            this.tasks = localTasks !== null ? JSON.parse(localTasks) : [];
        },
        addTask(newTask: taskType ) {
            const task = {...newTask };
            task.id = `${ this.tasks.length }`;
            this.tasks.push(task);
            this.updatedLocalTasks(`${ task.name } added`);
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
            const task = {...this.tasks[taskIndex] };
            this.tasks.splice(taskIndex, 1);
            this.updatedLocalTasks(`${ task.name } removed`, 'danger');
        },
        completeAll() {
            this.tasks.splice(0, this.tasks.length);
            this.updatedLocalTasks(`All tasks completed!`);
        },
        updatedLocalTasks( msg: string, color = 'primary') {
            openToast(msg, color)
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    },
    getters: {
        getTasks: state => state.tasks.sort((task1, task2) => task1.priority - task2.priority),
    },
});

export default useStore;
