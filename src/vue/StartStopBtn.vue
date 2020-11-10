<template>
    <b-button :variant="variant" v-on:click="btnClick">
        {{ caption }}
    </b-button>
</template>

<script>
export default {
    data() {
        return {
            'caption': 'Start',
            'variant': 'success',
        };
    },
    'methods': {
        'btnClick': function () {
            if (this.caption == 'Start') {
                this.caption = 'Stop';
                this.variant = 'danger';
            } else {
                this.caption = 'Start';
                this.variant = 'success';
            }
        },
    },
};
</script>

<style scoped lang="scss">
</style>
