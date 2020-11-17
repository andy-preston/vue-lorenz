<template>
    <el-input-number
        v-model="val"
        :min="14"
        :max="28"
        @change="$emit('change', $event)"
    >
    </el-input-number>
</template>

<script>
export default {
    data() {
        return {
            'val': 28
        };
    }
};
</script>
