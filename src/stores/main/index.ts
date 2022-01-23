import { defineStore } from 'pinia';

// https://pinia.esm.dev/introduction.html
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application

const useStore = defineStore('main', {
    state: () => ({
        tasks: [
            { id: '1', name: 'Task 1', description: 'Task 1 to do', priority: 1 },
            { id: '2', name: 'Task 2', description: 'Task 2 to do', priority: 2 },
            { id: '3', name: 'Task 3', description: 'Task 3 to do', priority: 3 },
            { id: '4', name: 'Task 4', description: 'Task 4 to do', priority: 2 },
            { id: '5', name: 'Task 5', description: 'Task 5 to do', priority: 3 },
            { id: '6', name: 'Task 6', description: 'Task 6 to do', priority: 1 }
        ]
    }),
    getters: {
        getTasks: state => state.tasks
    }

});

export default useStore;
