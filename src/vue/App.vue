<template>
    <div id="app">
        <b-container>
            <b-button-toolbar id="top-bar">
                <AdjustBox
                    id="rhoBox"
                    label="rho"
                    min="14"
                    max="28"
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
            </b-button-toolbar>
            <xyscope
                ref="scope"
                limits="-40, -5, 40, 60"
                @request-data="requestData"
            ></xyscope>
        </b-container>
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
    }
    canvas {
        background-color: #000;
        color: #0f0;
    }
}
</style>
