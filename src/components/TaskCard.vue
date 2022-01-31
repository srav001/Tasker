<script setup lang="ts">
import { withDefaults } from 'vue';

import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from "@ionic/vue";

import { task as taskType } from 'modules/TaskType';

import useStore from 'stores/main';

interface Props {
    sl: number,
    task: taskType
};

// eslint-disable-next-line no-undef
const props = withDefaults(defineProps<Props>(), {
    sl: 1
});

const mainStore = useStore();

</script>

<template>
    <ion-card 
        class="task-card"
        :class="{
            'high': props.task.priority === 1,
            'medium': props.task.priority === 2,
            'low': props.task.priority === 3
        }">
        <ion-card-header>
            <ion-card-title>
                <span class="mr-2">#{{ props.sl }}</span>
                <b>{{ props.task.name }}</b>
            </ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <div class="col-12 text-right">
                <ion-button 
                    color="danger" shape="round" 
                    fill="outline" mode="ios"
                    @click="mainStore.removeTask(props.task)">
                    <i class="material-icons">delete</i>
                    <span class="responsive md:pl-2">Delete</span>
                </ion-button>
                <ion-button 
                    class="ml-2" color="primary" 
                    shape="round" mode="ios" fill="outline"
                    @click="mainStore.removeTask(props.task)">
                    <i class="material-icons">done</i>
                    <span class="responsive md:pl-2">Done</span>
                </ion-button>
            </div>
        </ion-card-content>
    </ion-card>
</template> 
