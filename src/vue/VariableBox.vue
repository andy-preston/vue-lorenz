<template>
    <el-tag class="var-box">
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
.var-box {
    max-width: 140px;
    min-width: 140px;
}
</style>
