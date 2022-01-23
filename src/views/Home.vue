<script setup lang="ts">
/* eslint import/no-unresolved: [2, { ignore: ['\.vue$'] }] */
import { onMounted, computed } from 'vue';

import { IonFab, IonFabButton, IonButton } from "@ionic/vue";
import BaseView from 'core/BaseView.vue';

import Tasks from 'components/Tasks.vue';
import AddTask from 'components/AddTask.vue';
// eslint-disable-next-line import/no-unresolved
import useStore from '../stores/main';

const mainStore = useStore();

onMounted(() => {
    mainStore.setTasks();
});

const tasks = computed(() => mainStore.getTasks);

</script>

<template>
    <base-view id="home-page">
        <template #default-view-body>
            <ion-fab slot="fixed" vertical="bottom" horizontal="end">
                <ion-fab-button color="dark">
                    <i class="material-icons">add</i>
                </ion-fab-button>
            </ion-fab>
            <!-- HEADER -->
            <div class="header">
                <div class="text-left pl-8">
                    <b style="font-size: 3rem;">To-Do</b>
                </div>
                <ion-button
                    v-if="tasks.length > 1"
                    mode="ios"
                    shape="round"
                    fill="outline"
                    @click="mainStore.completeAll()">
                    <i class="material-icons">done_all</i>
                    <span class="responsive md:pl-2">All Done</span>
                </ion-button>
            </div>
            <!-- BODY -->
            <add-task class="responsive"></add-task>
            <div class="row py-2 px-2">
                <div
                    v-for="(task, taskIndex) in tasks"
                    :key="taskIndex"
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <tasks :key="taskIndex" :sl="taskIndex + 1" :task="task"></tasks>
                </div>
                <p v-if="tasks.length === 0" class="text-center text-xl text-gray-500 py-5 mt-11">No tasks to do!</p>
            </div>
        </template>
    </base-view>
</template>
