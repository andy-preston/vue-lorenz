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
var running = false;
var waitingForData = false;

export default {
    name: 'App',
    components: { Toolbar, TheScope },
    'methods': {
        'getData': function () {
            if (running && waitingForData) {
                waitingForData = false;
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
