<template>
    <el-button
        :type="variant"
        @click="btnClick"
    >
        {{ caption }}
    </el-button>
</template>

<script>
export default {
    data() {
        return {
            'caption': 'Start',
            'variant': 'success'
        };
    },
    'methods': {
        'btnClick': function () {
            if (this.caption == 'Start') {
                this.caption = 'Stop';
                this.variant = 'danger';
                this.$emit('start');
            } else {
                this.caption = 'Start';
                this.variant = 'success';
                this.$emit('stop');
            }
        }
    }
};
</script>
