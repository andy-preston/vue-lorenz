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
    'mounted': function () {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },
    'methods': {
        'nextValue': function (nextValue) {
            this.$refs.scope.pushData({ 'x': nextValue.x, 'y': nextValue.z });
        },
        'onResize': function () {
            // Force the scope canvas to fill the ramaining screen under the
            // toolbar
            const theCanvas = document.getElementById('canvas');
            theCanvas.style.height = (
                window.innerHeight - 16 -
                theCanvas.getBoundingClientRect().top
            ) + 'px';
            this.$refs.scope.rescale();
        }
    }
};
</script>

<style lang="scss">
#canvas {
    background-color: #000;
    color: #0f0;
}
</style>
