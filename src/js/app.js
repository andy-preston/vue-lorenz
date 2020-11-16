import Vue from 'vue';
import ElementUI from 'element-ui';
import App from '../vue/App.vue';
import '../../node_modules/xyscope/src/vue-xyscope';
import '../sass/app.scss';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App)
});
