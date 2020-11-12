<template>
    <b-form-group>
        <label for="input">{{ label }}: {{ value }}</label>
        <b-form-input
            id="input"
            v-model="value"
            type="range"
            :min="min"
            :max="max"
        >
        </b-form-input>
    </b-form-group>
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
        }
    },
    data() {
        return {
            'value': 0
        };
    }
};
</script>

<style scoped lang="scss">
</style>
