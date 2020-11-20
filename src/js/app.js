import Vue from 'vue';
import ElementUI from 'element-ui';
import App from '../vue/App.vue';
import '../sass/app.scss';

Vue.use(ElementUI);

new Vue({
    'el': '#app',
    'render': h => h(App)
});
