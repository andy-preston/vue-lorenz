<template>
    <div id="app">
        <Toolbar
            ref="toolbar"
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

export default {
    name: 'App',
    components: { Toolbar, TheScope },
    'methods': {
        'rhoChange': function (newValue) {
            lorenz.rho(newValue);
        },
        'requestData': function () {
            console.log('request-data');
        }
    }
};
</script>
