<template>
    <v-sheet
        max-width="500"
        class="d-flex flex-column justify-center pt-5 ml-auto mr-auto">
        <Input
            @submit="sendRequest"
            labelName="Подсказки по адресам"
            buttonName="Поиск"
        />
        <v-list 
            max-width="500"
            lines="one"
            class="d-flex flex-column mb-6">
            <v-list-item 
                v-for="it in items"
                :title="it">
            </v-list-item>
        </v-list>
        <div>{{ error }}</div>
    </v-sheet>
</template>

<script setup>
    import Input from './components/Input.vue'
    import {error, items, sendRequest} from './js/Request.js'
</script>

<style>

</style>