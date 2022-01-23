<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from "@ionic/vue";
import { withDefaults, defineProps, reactive } from 'vue';

interface Props {
    sl: number,
    task: {
        id: string,
        name: string,
        priority: number,
        description?: string
    }
};

const props = withDefaults(defineProps<Props>(), {
    sl: 1,
    task: () => ({
        id: '',
        name: '',
        priority: 3,
        description: ''
    })
});

// eslint-disable-next-line no-unused-vars
const data = reactive({
    select: false
});

</script>

<template>
    <ion-card
        class="task-card"
        :class="{ 'high': task.priority === 1, 'medium': task.priority === 2, 'low': task.priority === 3 }">
        <ion-card-header>
            <ion-card-title>
                <span class="mr-2">#{{ props.sl }}</span>
                <b>{{ props.task.name }}</b>
            </ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <div class="col-12 text-center text-right">
                <ion-button color="danger" shape="round" fill="outline" mode="ios">
                    <i class="material-icons">delete</i>
                     <span class="hidden md:inline md:pl-2">Delete</span></ion-button>
                <ion-button class="ml-2" color="primary" shape="round" mode="ios">
                    <i class="material-icons">done</i>
                     <span class="hidden md:inline md:pl-2">Done</span>
                    </ion-button>
            </div>
        </ion-card-content>
    </ion-card>
</template> 