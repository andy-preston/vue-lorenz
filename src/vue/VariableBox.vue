<template>
    <el-tag>
        {{ label }}:&nbsp;{{ value }}
    </el-tag>
</template>

<script>
export default {
    'props': {
        'id': {
            'type': String,
            'required': true
        },
        'label': {
            'type': String,
            'required': true
        }
    },
    data() {
        return {
            'value': 0
        };
    }
};
</script>

<style lang="scss">
</style>
