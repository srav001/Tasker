<script setup lang="ts">
import { onBeforeMount, computed, ref } from 'vue';

import { IonFab, IonFabButton, IonButton, IonModal, IonContent, IonProgressBar } from "@ionic/vue";
import BaseView from 'core/BaseView.vue';
import TaskCard from 'components/TaskCard.vue';
import AddTask from 'components/AddTask.vue';

import useStore from 'stores/main';

const mainStore = useStore();

const loading = ref(true);

onBeforeMount(async () => {
    const tasksFetchd = await mainStore.getTasks();
    if (tasksFetchd === true)
        loading.value = false;
})

const isOpen = ref(false);

const tasks = computed(() => mainStore.getTasksInOrderByPriority);

</script>

<template>
    <base-view id="home-page">
        <template #body>
            <ion-fab slot="fixed" class="visibele md:invisible" vertical="bottom" horizontal="end">
                <ion-fab-button color="dark" @click="isOpen = true">
                    <i class="material-icons">add</i>
                </ion-fab-button>
            </ion-fab>
            <!-- HEADER -->
            <div class="text-center header">
                <b class="pl-8" style="font-size: 3rem;">To-Do</b>
                <ion-button
                    v-if="tasks.length > 1"
                    class="float-right"
                    mode="ios"
                    shape="round"
                    fill="outline"
                    @click="mainStore.completeAll()">
                    <i class="material-icons">done_all</i>
                    <span class="responsive md:pl-2">All Done</span>
                </ion-button>
            </div>
            <ion-progress-bar v-if="loading === true" class="mt-4" type="indeterminate" reversed="true"></ion-progress-bar>
            <template v-if="loading === false">
                <!-- NEW TASK MODAL FOR MOBILE-->
                <ion-modal :is-open="isOpen">
                    <ion-content>
                        <ion-fab slot="fixed" vertical="bottom" horizontal="end">
                            <ion-fab-button color="dark" @click="isOpen = false">
                                <i class="material-icons">close</i>
                            </ion-fab-button>
                        </ion-fab>
                        <div class="div-center">
                            <p class="text-center font-bold mt-5" style="font-size: 2rem;">Add New Task</p>
                            <add-task class="mt-1"></add-task>
                        </div>
                    </ion-content>
                </ion-modal>
                <!-- BODY -->
                <add-task class="responsive"></add-task>
                <div class="row py-2 px-2">
                    <div
                        v-for="(task, taskIndex) in tasks"
                        :key="taskIndex"
                        class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                        <task-card :key="taskIndex" :sl="taskIndex + 1" :task="task"></task-card>
                    </div>
                    <p v-if="tasks.length === 0" class="no-tasks-found">No tasks to do!</p>
                </div>
            </template>
            <div v-else class="text-center py-5 my-5 text-blue-300">Loading ...</div>
        </template>
    </base-view>
</template>
