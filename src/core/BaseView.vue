<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
</script>

<template>
    <ion-page>
        <slot name="header"></slot>
        <ion-content>
            <slot name="body"></slot>
        </ion-content>
    </ion-page>
</template>
