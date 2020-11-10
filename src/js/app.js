import Vue from 'vue';
import { BootstrapVue/*, IconsPlugin*/ } from 'bootstrap-vue';
import App from '../vue/App.vue';
import '../../node_modules/xyscope/src/vue-xyscope';
import '../sass/app.scss';

Vue.use(BootstrapVue);
//Vue.use(IconsPlugin);

new Vue({
    el: '#app',
    render: h => h(App)
});
