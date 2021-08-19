
<template>
    <header>
        <h1>{{ $t('header.title') }}</h1>

        <div>
            <base-link v-for="locale in availableLocales"
                       :key="locale.code"
                       :to="switchLocalePath(locale.code)"
                       :label="locale.name" />
        </div>
    </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    computed: {
        availableLocales() {
            return (this.$i18n.locales as (string | number)[]).filter(
                (i: any) => i.code !== this.$i18n.locale
            );
        },
    },
});
</script>

<style lang="scss" scoped>
header {
    background-color: var(--white);
    padding: 2rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 2rem;
        text-align: center;
    }

    a {
        span {
            position: relative;

            &::after {
                content: "";
                position: absolute;
                height: 0.2rem;
                left: 50%;
                bottom: -0.5rem;
                transform: scaleX(0) translate3d(-50%, 0, 0);
                transform-origin: 0 0;
                transition: transform 0.5s;
                width: 100%;
                background: var(--black);
            }
        }

        &:hover,
        &:focus {
            span::after {
                transform: scaleX(1) translate3d(-50%, 0, 0);
            }
        }
    }
}
</style>