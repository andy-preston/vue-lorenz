<template>
    <div id="app">
        <b-container>
            <b-button-toolbar id="top-bar">
                <StartStopBtn></StartStopBtn>
            </b-button-toolbar>
            <xyscope
                ref="scope"
                limits="-40, -5, 40, 60"
                v-on:request-data="requestData"
            ></xyscope>
        </b-container>
    </div>
</template>

<script>
import StartStopBtn from './StartStopBtn.vue';

export default {
    name: 'app',
    components: {
        StartStopBtn,
    },
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
