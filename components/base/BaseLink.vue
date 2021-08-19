
<template>
    <nuxt-link :to="to">
        <span>{{ label }}</span>
    </nuxt-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        to: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
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
        color: var(--black);
        text-decoration: none;

        span::after {
            transform: scaleX(1) translate3d(-50%, 0, 0);
        }
    }
}
</style>