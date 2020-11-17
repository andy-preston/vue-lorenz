<template>
    <div id="app">
        <Toolbar></Toolbar>
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <xyscope
                        ref="scope"
                        limits="-40, -5, 40, 60"
                        @request-data="requestData"
                    ></xyscope>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Toolbar from './Toolbar.vue';

export default {
    name: 'App',
    components: { Toolbar },
    'methods': {
        'requestData': function () {
            console.log('request-data');
        }
    }
};
</script>

<style lang="scss">
#app {
    canvas {
        background-color: #000;
        color: #0f0;
    }
}
</style>
