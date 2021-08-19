<template>
    <div class="field">
        <label v-if="label"
               :for="name">{{ label }}</label>

        <input v-bind="$attrs"
               :id="name"
               :type="type"
               :aria-label="label"
               :placeholder="placeholder"
               :value="value"
               @input="$emit('input', $event.target.value)"
               @click="$emit('click')"
               @keyup="$emit('keyup', $event)"
               @keydown.tab="$emit('keydowntab')"
               @blur="$emit('blur')"
               @keyup.enter="$emit('enter')" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    inheritAttrs: false,
    props: {
        value: {
            required: true,
        },
        type: {
            type: String,
            default: "text",
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
        },
    },
});
</script>

<style lang="scss" scoped>
.field {
    margin: 0 0 2rem;
    position: relative;

    &:focus-within {
        label {
            color: var(--primary-color);
            opacity: 1;
        }
        input {
            border-bottom: 2px solid var(--primary-color);
        }
    }

    label {
        color: rgba(0, 0, 0, 0.87);
        opacity: 0.6;
        font-size: 1.2rem;
        letter-spacing: 0.4px;
        margin-left: 1.2rem;
    }

    input {
        display: block;
        width: 100%;
        border: none;
        padding: 1.5rem;
        box-sizing: border-box;
        font-size: 1.5rem;
        flex: 1;
        background-color: var(--white);

        &:focus {
            outline: dotted thin var(--black);
        }
    }
}
</style>
