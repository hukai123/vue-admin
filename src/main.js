import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueQr from 'vue-qr';            //带图像的二维码

Vue.use(ElementUI);
Vue.prototype.$axios = axios;


Vue.config.productionTip = false       //阻止vue在启动时产生提示

/* eslint-disable no-new */
new Vue({
  // el: '#root',                      //挂载元素 root,这种写法方便
  router,
  store,
  components: { App, VueQr },
  // template: '<App/>',               //效果都是为乐在root下实例化一个app组件
  render: h => h(App)                  //render效率高，template书写方便
}).$mount('#root')                     //挂载元素 root,这种写法更友好
