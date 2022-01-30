<script setup lang="ts">
import { reactive } from 'vue';

import { task as taskType } from 'modules/TaskType';

import { IonButton, IonInput, IonList, IonItem, IonLabel, IonRadio, IonRadioGroup, IonListHeader } from '@ionic/vue';

import useStore from 'stores/main';

const mainStore = useStore();

const initTask: taskType = {
    id: '',
    name: '',
    priority: 3
};
let task: taskType = reactive({ ...initTask });

const addNewTask = () => {
    mainStore.addTask(task);
    task = Object.assign(task, initTask);
};

</script>

<template>
    <div class="add-new-task">
        <ion-input v-model="task.name" class="task-input-2 col-md-10 col-12" type="string" placeholder="Enter Task"></ion-input>

        <ion-list class="col-md-10 col-10 priority-list">
            <ion-radio-group v-model="task.priority" class="row">
                <ion-list-header class="col-12 text-center">
                    <ion-label class="font-bold">Choose priority</ion-label>
                </ion-list-header>

                <ion-item class="col-md-3 col-12 p-0 mx-3 rounded-full">
                    <ion-label>High</ion-label>
                    <ion-radio slot="start" :value="1"></ion-radio>
                </ion-item>

                <ion-item class="col-md-4 col-12 p-0 mx-3 rounded-full">
                    <ion-label>Medium</ion-label>
                    <ion-radio slot="start" :value="2"></ion-radio>
                </ion-item>

                <ion-item class="col-md-3 col-12 p-0 mx-3 rounded-full">
                    <ion-label>Low</ion-label>
                    <ion-radio slot="start" :value="3"></ion-radio>
                </ion-item>
            </ion-radio-group>
        </ion-list>

        <ion-button class="col-md-6 col-11 mt-4 px-3" mode="ios" shape="round" @click="addNewTask()">
            <i class="material-icons">add</i>
            <span class="ml-2">Add Task</span>
        </ion-button>
    </div>
</template>
