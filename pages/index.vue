<template>
    <div>
        <app-header />
        <main>
            <section>
                <header>
                    <h2>The joke!</h2>
                </header>
                <article>
                    <div v-if="isLoading">Joke is loading, please wait...</div>

                    <div v-if="joke"
                         class="joke">
                        <p>{{ joke.value }}</p>

                        <img class="joke-img"
                             :src="joke.icon_url"
                             alt="" />
                    </div>
                </article>
                <footer>
                    <base-button label="I want another joke"
                                 icon="icon-random"
                                 class="primary random-joke-btn"
                                 :isLoading="isLoading"
                                 @click="getRandomJoke()" />
                </footer>
            </section>
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

    mounted() {
        this.getRandomJoke();
    },

    methods: {
        async getRandomJoke() {
            this.isLoading = true;
            this.joke = await ChuckNorrisService.getRandomJoke();
            this.isLoading = false;
        },
    },
});
</script>

<style lang="scss" scoped>
main {
    padding: 5rem;
}

section {
    max-width: 50vw;
    margin: 0 auto;

    h2 {
        text-align: center;
        margin-bottom: 2rem;
        text-transform: uppercase;
        font-size: 1.8rem;
        letter-spacing: 0.048rem;
    }

    article {
        padding: 2rem 5rem;
        background-color: var(--white);
        border-radius: 1rem;

        .joke {
            display: flex;
            align-items: center;

            .joke-img {
                width: 5rem;
                height: 5rem;
                object-fit: contain;
                margin-left: 2rem;
            }
        }
    }

    .random-joke-btn {
        margin: 2rem auto;
    }
}
</style>