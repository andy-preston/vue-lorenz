<template>
    <div id="app">
        <b-container>
            <b-button-toolbar>
                <b-button>Edit</b-button>
                <b-button>Undo</b-button>
                <b-button>Redo</b-button>
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
export default {
    name: 'app',
    data() {
        return {};
    },
};
</script>

<style lang="scss">
#app {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 20px;
}
</style>
