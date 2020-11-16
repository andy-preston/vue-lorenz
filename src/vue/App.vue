<template>
    <div id="app">
        <el-container>
            <el-header id="top-bar">
                <AdjustBox
                    id="rhoBox"
                    label="rho"
                    min="14"
                    max="28"
                    initial-value="28"
                ></AdjustBox>

                <StartStopBtn
                    @start="startScope"
                    @stop="stopScope"
                ></StartStopBtn>

                <VariableBox
                    id="xBox"
                    label="x"
                ></VariableBox>

                <VariableBox
                    id="yBox"
                    label="y"
                ></VariableBox>

                <VariableBox
                    id="zBox"
                    label="z"
                ></VariableBox>
            </el-header>
            <el-main>
                <xyscope
                    ref="scope"
                    limits="-40, -5, 40, 60"
                    @request-data="requestData"
                ></xyscope>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import StartStopBtn from './StartStopBtn.vue';
import VariableBox from './VariableBox.vue';
import AdjustBox from './AdjustBox.vue';

export default {
    name: 'App',
    components: { StartStopBtn, VariableBox, AdjustBox },
    'methods': {
        'startScope': function () {
        },
        'stopScope': function () {
        },
        'requestData': function () {
        }
    }
};
</script>

<style lang="scss">
#app {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    #top-bar {
        margin-top: 10px;
        margin-bottom: 5px;
        > * {
            margin-right: 5px;
        }
    }

    canvas {
        background-color: #000;
        color: #0f0;
    }
}
</style>
