<template>
    <div id="app">
        <Toolbar
            ref="toolbar"
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
        'requestData': function () {
            console.log('request-data');
        }
    }
};
</script>

<style lang="scss">
</style>
