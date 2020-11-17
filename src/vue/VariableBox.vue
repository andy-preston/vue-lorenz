<template>
    <el-tag>
        {{ label }}:&nbsp;{{ value }}
    </el-tag>
</template>

<script>
export default {
    'props': {
        'label': {
            'type': String,
            'required': true
        },
        'value': {
            'type': Number,
            'required': false
        }
    }
};
</script>

<style lang="scss">
</style>
