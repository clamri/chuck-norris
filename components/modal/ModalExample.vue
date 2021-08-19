<template>
    <base-modal name="exampleModal"
                @close="close()">
        <template slot="body">
            <div class="row content">
                <p>{{ $t('exampleModal.content') }}</p>
            </div>

            <div class="row buttons">
                <base-button :label="$t('exampleModal.closeButtonLabel')"
                             class="primary close-btn"
                             @click="close()" />
            </div>
        </template>
    </base-modal>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    methods: {
        close() {
            this.$emit("close");
        },
    },
});
</script>

<style lang="scss" scoped>
.buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
}
</style>