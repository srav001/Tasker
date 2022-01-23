<script setup lang="ts">
/* eslint import/no-unresolved: [2, { ignore: ['\.vue$'] }] */

import { reactive } from 'vue';

import { storeToRefs } from 'pinia';

import { IonFab, IonFabButton, IonButton } from "@ionic/vue";
import BaseView from 'core/BaseView.vue';

import Tasks from 'components/Tasks.vue';
// eslint-disable-next-line
import useStore from 'stores/main';
const mainStore = useStore();
const {  } = storeToRefs(mainStore);

const data = reactive({
    tasks: mainStore.getTasks
});

</script>

<template>
    <base-view id="home-page">
        <template #default-view-body>
            <ion-fab slot="fixed" vertical="bottom" horizontal="end">
                <ion-fab-button color="dark">
                    <i class="material-icons">add</i>
                </ion-fab-button>
            </ion-fab>
            <div class="header">
                <div class="text-left pl-8">
                    <b style="font-size: 3rem;">To-Do</b>
                </div>
                <ion-button mode="ios" shape="round">
                    <i class="material-icons">done_all</i>
                    <span class="hidden md:inline md:pl-2">All Done</span>
                </ion-button>
            </div>
            <div class="row py-2 px-2">
                <div
                    v-for="(task, taskIndex) in data.tasks"
                    :key="taskIndex"
                    class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                    <tasks :key="taskIndex" :sl="taskIndex + 1" :task="task"></tasks>
                </div>
            </div>
        </template>
    </base-view>
</template>
