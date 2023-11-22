<template>
    <v-sheet
        max-width="500"
        class="d-flex flex-column pt-5 ml-auto mr-auto">
        <Input
            @submit="sendRequest"
            labelName="Подсказки по адресам"
            buttonName="Поиск"
            :listItems="items"
            :error="error"
        />
    </v-sheet>
</template>

<script setup>
    import Input from './components/Input.vue'
    import {error, items, sendRequest} from './js/Request.js'
</script>