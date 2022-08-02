import Vue from 'vue'
import App from './App.vue'

//引入进度条组件
import progressUi from '@/components/Progress'
Vue.use(progressUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
