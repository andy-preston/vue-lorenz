<template>
    <el-row>
        <el-col :span="24">
            <div class="grid-content">
                <x-y-scope
                    ref="scope"
                    limits="-40, -5, 40, 60"
                    @request-data="$emit('request-data')"
                ></x-y-scope>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import XYScope from 'xyscope/src/XYScope.vue';

export default {
    'components': { XYScope },
    'mounted': function () {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },
    'methods': {
        /**
         * @function nextValue Insert the next value into the scope
         * @param {object} nextValue with 'x', 'y' and 'z' properties
         */
        'nextValue': function (nextValue) {
            this.$refs.scope.pushData({ 'x': nextValue.x, 'y': nextValue.z });
        },

        /**
         * @function onResize Force the scope to fill the remaining screen
         */
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
.xyscope-canvas {
    background-color: #000;
    color: #0f0;
}
</style>
