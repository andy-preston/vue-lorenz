<template>
    <b-card>
        {{ label }}:&nbsp;{{ value }}
    </b-card>
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

<style scoped lang="scss">
</style>
