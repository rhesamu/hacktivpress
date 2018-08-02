import Vue from 'vue'
import App from './App.vue'
import router from './router'

// // Require Froala Editor js file.
// require('froala-editor/js/froala_editor.pkgd.min')

// // Require Froala Editor css files.
// require('froala-editor/css/froala_editor.pkgd.min.css')
// require('font-awesome/css/font-awesome.css')
// require('froala-editor/css/froala_style.min.css')

// // Import and use Vue Froala lib.
// import VueFroala from 'vue-froala-wysiwyg'
// Vue.use(VueFroala)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
