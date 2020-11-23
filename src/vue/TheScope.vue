<template>
    <div
        ref="container"
        class="scope-container"
    >
        <x-y-scope
            ref="scope"
            limits="-40, -5, 40, 60"
            @request-data="$emit('request-data')"
        ></x-y-scope>
    </div>
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
            container.style.height = (
                window.innerHeight - 8 - container.getBoundingClientRect().top
            ) + 'px';
            this.$refs.scope.rescale();
        }
    }
};
</script>

<style lang="scss">
.scope-container {
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
}

.xyscope-canvas {
    background-color: #000;
    color: #0f0;
}
</style>
