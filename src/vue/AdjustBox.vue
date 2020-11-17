<template>
    <span>
        <label for="input">{{ label }}</label>
        <el-input-number
            id="input"
            v-model="value"
            :min="min"
            :max="max"
        >
        </el-input-number>
    </span>
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
        },
        'min': {
            'type': Number,
            'required': true
        },
        'max': {
            'type': Number,
            'required': true
        },
        'initial-Value': {
            // TODO: a prop validator can't see other props.
            // But this value is dependent on the min and max props.
            'type': Number,
            'required': true
        }
    },
    data() {
        return {
            'value': this.initialValue
        };
    }
};
</script>

<style lang="scss">
</style>
