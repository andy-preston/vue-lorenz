<template>
    <el-input-number
        v-model="val"
        :min="12"
        :max="28"
        @change="$emit('change', $event)"
    >
    </el-input-number>
</template>

<script>
export default {
    data() {
        return {
            'val': 12
        };
    }
};
</script>
