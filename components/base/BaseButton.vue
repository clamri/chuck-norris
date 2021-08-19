<template>
    <button :type="type"
            :disabled="isLoading"
            @click="click($event)">
        <span class="label"
              :data-state="isLoading ? 'hidden' : ''">
            <i v-if="icon"
               :class="icon"
               aria-hidden="true"></i>
            <span>{{ label }}</span>
        </span>

        <base-loader v-if="isLoading"
                     class="loading" />
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "button"
        },
        icon: {
            type: String
        }
    },
    methods: {
        click() {
            this.$emit("click");
        }
    }
};
</script>

<style lang="scss" scoped>
button {
    position: relative;

    [data-state="hidden"] {
        visibility: hidden;
    }

    .label {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loading {
        position: absolute !important;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &.primary {
        background-color: var(--primary-color);
        color: var(--white);
        border-radius: 999px;
        text-transform: uppercase;
        font-weight: 600;
        padding: 1rem 3rem;
        display: flex;
        align-items: center;
        min-width: 20rem;
        justify-content: center;
        letter-spacing: 0.1rem;

        i {
            margin-right: 1rem;
            font-size: 1.5rem;
            color: inherit;
        }

        &:disabled {
            opacity: 0.5;
            color: var(--black);
            cursor: not-allowed;
        }

        &:hover {
            box-shadow: inset 0 0 0 99999px rgba(255, 255, 255, 0.25);
        }
    }
}
</style>
