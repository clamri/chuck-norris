<template>
    <div :id="name"
         class="modal-container"
         @click="closeOnClickOutside($event)">
        <div class="modal">
            <div class="modal-header">
                <slot name="header" />
            </div>
            <div class="modal-body">
                <slot name="body" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        name: {
            type: String,
            required: true,
        },
        closable: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        closeOnClickOutside(event: Event) {
            if ((<HTMLInputElement>event?.target)?.id === this.name) {
                this.$emit("close");
            }
        },
    },
});
</script>

<style lang="scss" scoped>
.modal-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .modal {
        background-color: white;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1rem;
        min-width: 30rem;
        border-radius: 0.5rem;
        z-index: 11;
        max-height: 90vh;
        overflow: auto;
        max-width: 90vw;

        .modal-body {
            padding: 2rem 1.4rem 2rem;
        }
    }

    &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000000;
        opacity: 0.5;
        z-index: 10;
    }
}
</style>
