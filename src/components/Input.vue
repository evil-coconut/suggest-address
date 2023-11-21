<template>
    <v-form
        class="d-flex flex-row align-center"
        @submit.prevent="$emit('submit', query)">
        <v-text-field 
            :label="labelName"
            variant="outlined"
            hide-details="auto"
            v-model.trim="query">
        </v-text-field>
        <v-btn 
            class="ml-2"
            size="large"
            variant="outlined"
            type="submit">
            {{ buttonName }}
        </v-btn>
    </v-form>
</template>

<script setup>
    defineProps(['buttonName', 'labelName']);
    defineEmits(['submit']);

    let query = "";
</script>

<style>

</style>