<template>
    <div>
        <app-header />
        <main>
            <section class="categories-section">
                <base-button class="badge"
                             :class="{ 'is-active': !selectedCategory }"
                             label="random"
                             @click="resetCategoryAndGetRandomJoke()" />
                <base-button v-for="category in categories"
                             :key="category"
                             class="badge"
                             :class="{ 'is-active': selectedCategory === category }"
                             :label="category"
                             @click="getRandomJokeFromCategory(category)" />
            </section>
            <section class="joke-section">
                <header>
                    <h2>{{ $t('homepage.title') }}</h2>
                </header>
                <article>
                    <div v-if="isLoading">{{ $t('homepage.jokeIsLoading') }}</div>

                    <div v-if="joke"
                         class="joke">
                        <p>{{ joke.value }}</p>

                        <img class="joke-img"
                             :src="joke.icon_url"
                             alt="" />
                    </div>
                </article>
                <footer>
                    <base-button icon="icon-random"
                                 class="primary random-joke-btn"
                                 :label="$t('homepage.getRandomJokeButtonLabel')"
                                 :isLoading="isLoading"
                                 @click="getRandomJoke()" />
                </footer>
            </section>

            <modal-example v-if="showExampleModal"
                           @close="closeExampleModal()" />
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
            showExampleModal: false,
            selectedCategory: null as string | null,
        };
    },

    mounted() {
        this.$store.dispatch("jokes/fetchCategories");
        this.getRandomJoke();

        setTimeout(this.openExampleModal, 25000);
    },

    computed: {
        categories() {
            return this.$store.getters["jokes/categories"];
        },
    },

    methods: {
        openExampleModal() {
            this.showExampleModal = true;
        },
        closeExampleModal() {
            this.showExampleModal = false;
        },
        resetCategoryAndGetRandomJoke() {
            this.selectedCategory = null;
            this.getRandomJoke();
        },
        getRandomJokeFromCategory(category: string) {
            this.selectedCategory = category;
            this.getRandomJoke();
        },
        async getRandomJoke() {
            this.isLoading = true;
            this.joke = null;
            this.joke = await ChuckNorrisService.getRandomJoke({
                ...(this.selectedCategory && {
                    category: this.selectedCategory,
                }),
            });

            this.isLoading = false;
        },
    },
});
</script>

<style lang="scss" scoped>
main {
    padding: 5rem;
}

.joke-section {
    max-width: 50vw;
    margin: 2rem auto;

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
            justify-content: space-between;

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

.categories-section {
    .badge {
        padding: 0.6rem 1.2rem;
        font-size: 1.4rem;
        border-radius: 999px;
        margin: 0.5rem 1rem;
        background-color: var(--white);

        &:hover,
        &:focus {
            box-shadow: inset 0 0 0 99999px rgba(255, 255, 255, 0.25);
        }

        &.is-active {
            background-color: var(--primary-color);
            color: var(--white);
        }
    }
}
</style>