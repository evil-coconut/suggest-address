<template>
    <v-form
        class="d-flex flex-row pr-1 pl-1"
        @submit.prevent="$emit('submit', query)">
            <v-text-field 
                class="mr-2"
                :label="labelName"
                variant="outlined"
                v-model.trim="query"
                :error-messages="error">
            </v-text-field>
            <v-btn 
                size="large"
                variant="outlined"
                type="submit">
                {{ buttonName }}
            </v-btn>
    </v-form>
    <v-list
        lines="one"
        class="d-flex flex-column mb-6">
        <v-list-item
            v-for="it in listItems">
            <v-list-item-title
                class="d-flex text-wrap">
                {{ it }}
            </v-list-item-title>
            <v-divider></v-divider>
        </v-list-item>
    </v-list>
</template>

<script setup>
    import { ref } from 'vue';

    defineProps(['buttonName', 'labelName', 'listItems', 'error']);
    defineEmits(['submit']);

    const query = ref("");
</script>