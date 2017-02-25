// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import NProgress from '../static/javascripts/vendor/nprogress.js'

import '../static/stylesheets/pure-min.css'
import '../static/stylesheets/grids-responsive-min.css'
import '../static/fonts/fontello/css/fontello.css'
import '../static/stylesheets/nprogress.css'
import '../static/stylesheets/style.css'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(route => {
  NProgress.done()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
