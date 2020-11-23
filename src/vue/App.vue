<template>
    <div id="app">
        <Toolbar
            ref="toolbar"
            @start="startScope"
            @stop="stopScope"
            @rho-change="rhoChange"
        ></Toolbar>
        <TheScope
            ref="scope"
            @request-data="requestData"
        ></TheScope>
    </div>
</template>

<script>
import Toolbar from './Toolbar.vue';
import TheScope from './TheScope.vue';
import Lorenz from '../js/lorenz';

var lorenz;
var running = false;
var waitingForData = false;

export default {
    name: 'App',
    components: { Toolbar, TheScope },
    'mounted': function () {
        lorenz = Lorenz({ 'rho': this.$refs.toolbar.rho() });
    },
    'methods': {
        'getData': function () {
            if (running && waitingForData) {
                waitingForData = false;
                let nextValue = lorenz.nextValue();
                this.$refs.toolbar.nextValue = nextValue;
                this.$refs.scope.nextValue(nextValue);
            }
        },
        'startScope': function () {
            running = true;
            this.getData();
        },
        'stopScope': function () {
            running = false;
        },
        'rhoChange': function (newValue) {
            lorenz.rho(newValue);
        },
        'requestData': function () {
            waitingForData = true;
            this.getData();
        }
    }
};
</script>

<style lang="scss">
html,
body,
#app {
    height: 100vh;
    margin: 0;
}
</style>