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

<style scoped lang="scss">
</style>
