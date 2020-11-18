<template>
    <el-row>
        <el-col :span="24">
            <div class="grid-content">
                <xyscope
                    ref="scope"
                    limits="-40, -5, 40, 60"
                    @request-data="$emit('request-data')"
                ></xyscope>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    'methods': {
        'nextValue': function (nextValue) {
            this.$refs.scope.pushData({ 'x': nextValue.x, 'y': nextValue.z });
        }
    }
};
</script>

<!-- TODO: canvas should have a specific class or id to map this style to -->

<style lang="scss">
canvas {
    background-color: #000;
    color: #0f0;
}
</style>
