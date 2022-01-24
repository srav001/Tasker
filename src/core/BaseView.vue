<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
</script>

<template>
    <ion-page>
        <slot name="title"></slot>
        <ion-content>
            <slot name="header"></slot>
        </ion-content>
    </ion-page>
</template>
