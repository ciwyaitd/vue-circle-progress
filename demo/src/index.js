import Vue from 'vue'
import App from './app.vue'
import CircleProgress from 'circle-progress'

Vue.use(CircleProgress, {
    tagName: 'circle-progress'
})

new Vue({
    el: '#app',
    render: h => h(App)
})
