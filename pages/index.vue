<template>
    <div>
        <header>Welcome to the Chuck Norris App!</header>
        <main>
            <div v-if="isLoading">Joke is loading, please wait...</div>
            <div v-if="joke">{{ joke.value }}</div>
        </main>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

import ChuckNorrisService from "~/services/chuck-norris.service";
import { Joke } from "~/models/joke";

export default Vue.extend({
    data() {
        return {
            joke: null as Joke | null,
            isLoading: true,
        };
    },

    async mounted() {
        this.joke = await ChuckNorrisService.getRandomJoke();
        this.isLoading = false;
    },
});
</script>
