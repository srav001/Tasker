/* eslint-disable import/no-unresolved */
import { defineStore } from 'pinia';

import { task as taskType } from 'modules/TaskType';

import openToast from '../../core/Toast';

const useStore = defineStore('main', {
    state: () => ({
        tasksObj: Object.create({}),
    }),
    actions: {
        setTasks() {
            const localTasks: string | null = localStorage.getItem('tasksObj');
            this.tasksObj = localTasks !== null ? JSON.parse(localTasks) : {};
        },
        addTask(newTask: taskType) {
            const task = { ...newTask };
            task.id = Math.random().toString(36).substring(2);
            this.tasksObj[task.id] = task;
            this.updatedLocalTasks(`${task.name} added`);
        },
        removeTask(task: taskType) {
            const taskName = task.name;
            delete this.tasksObj[task.id];
            this.updatedLocalTasks(`${taskName} removed`, 'danger');
        },
        completeAll() {
            this.tasksObj = {};
            this.updatedLocalTasks(`All tasks completed!`);
        },
        updatedLocalTasks(msg: string, color = 'primary') {
            openToast(msg, color);
            localStorage.setItem('tasksObj', JSON.stringify(this.tasksObj));
        },
    },
    getters: {
        getTasks: (state) => {
            if (Object.keys(state.tasksObj).length > 0) {
                // const tasks: taskType[] = Object.entries(state.tasksObj).map((task) => task['1']);
                // tasks array type warning occuring
                
                // no warning solution
                const tasks: taskType[] = [];
                Object.keys(state.tasksObj).forEach((taskId) => {
                    tasks.push(state.tasksObj[taskId]);
                });
                return tasks.sort((task1, task2) => task1.priority - task2.priority);
            }
            return [];
        },
    },
});

export default useStore;
