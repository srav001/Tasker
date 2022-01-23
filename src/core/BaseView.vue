<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
</script>

<template>
    <ion-page>
        <slot name="default-view-title"></slot>
        <ion-content>
            <slot name="default-view-body"></slot>
        </ion-content>
    </ion-page>
</template>
