import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '../components/page1/Page1.vue'
import Page2 from '../components/page2/Page2.vue'
import Page3 from '../components/page3/Page3.vue'
Vue.use(Router)

const router = new Router({
	mode: 'history',
    routes:[{
            path : '/Page1', component : Page1
        },
        {
            path : '/Page2', component : Page2
        },
        {
            path : '/Page3', component : Page3
        }]
})

export default router;