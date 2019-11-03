import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Navi from './components/Navi/Navi.vue'
import router from './router/index'
import store from './store'

Vue.use(ElementUI)


new Vue({
        el: '#app',
        store,
        router,
        render: h => h(Navi)
})