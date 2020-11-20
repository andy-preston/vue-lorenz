<template>
    <el-row>
        <el-col :span="24">
            <div
                ref="container"
                class="grid-content"
            >
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
            var container = this.$refs.container;
            // The "16" here is the two margins on the top level components
            // see App.vue <style> - The OOP Gods would be happier if this
            // value was "better derived"
            const height = (
                window.innerHeight - 16 - container.getBoundingClientRect().top
            ) + 'px';
            do {
                container.style.height = height;
                container = container.parentElement;
                // The while condition here will anger the OOP Gods
                // As we're referencing a DIV that's outside this component
            } while (container.id != 'app');
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
