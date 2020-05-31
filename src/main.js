import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Swal from './util/sweetAlert'

require('./bootstrap')

window.Swal = Swal

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  render: (h) => h(App),
})
