import { defineStore } from 'pinia';

import services from 'services';

import { task as taskType } from 'modules/TaskType';

import openToast from 'core/Toast';

const useStore = defineStore('main', {
    state: () => ({
        tasksObj: Object.create({}),
        userId: 1
    }),
    actions: {
        getTasks() {
            const tasksObj: string | null = localStorage.getItem('tasksObj');
            this.tasksObj = tasksObj !== null ? JSON.parse(tasksObj) : {};
            this.getTasksFromDb();
        },
        async getTasksFromDb() {
            const tasksData = await services.select('tasks', 'fetching tasks');
            let tasksObj = {};
            if ( tasksData !== null ) tasksObj = { ...tasksData[0]?.tasks }
            this.tasksObj = tasksObj !== null ? tasksObj : {};
        },

        updatedLocalTasks(msg: string, color = 'primary') {
            openToast(msg, color);
            localStorage.setItem('tasksObj', JSON.stringify(this.tasksObj));
        },
        updateTasksInDb( value: { id: number, tasks: Record<string, unknown>}, userId: number ) {
            const update = services.update('tasks', value, { userId }, 'updating tasks');
            return Promise.resolve(update);
        },

        async addTask(newTask: taskType) {

            const task = { ...newTask };
            task.id = Math.random().toString(36).substring(2);

            const tasksForUpdating = { ...this.tasksObj };
            tasksForUpdating[task.id] = task;

            if( this.getTasksInOrderByPriority.length > 0 )
                this.updateTasksInDb({ id: 1, tasks: tasksForUpdating }, this.userId)
                .then(() => { 
                    this.tasksObj[task.id] = task;
                    this.updatedLocalTasks(`${task.name} added`);
                });
                // .catch(() => {
                //     delete this.tasksObj[task.id];
                // });
            else { 
                this.addTasksInDb({
                    id: 1,
                    tasks: tasksForUpdating,
                    userId: this.userId
                })
                .then(() => { 
                    this.tasksObj[task.id] = task;
                    this.updatedLocalTasks(`${task.name} added`);
                });
            }
        },
        addTasksInDb(value: { id: number; tasks: Record<string, unknown>; userId: number; }) {
            const add = services.insert('tasks', [ value ], 'creating tasks');
            return Promise.resolve(add)
        },

        removeTask(task: taskType) {
            const taskName = task.name;
            delete this.tasksObj[task.id];
            this.updatedLocalTasks(`${taskName} removed`, 'danger');
        },
        completeAll() {
            this.tasksObj = {};
            this.updatedLocalTasks(`All tasks completed!`);
        }
    },
    getters: {
        getTasksInOrderByPriority: (state) => {
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
