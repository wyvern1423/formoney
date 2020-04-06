import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

// window.store = {
//   //record store
//   recordList: recordListModel.fetch(),
//   createRecord: (record) => recordListModel.create(record),
//
//   //tag store
//   tagList: tagListModel.fetch(),
//   findTag(id: string) {
//     return this.tagList.filter(t => t.id === id)[0];
//   },
//   createTag: (name: string) => {
//     if (name) {
//       const message = tagListModel.create(name);
//       if (message === 'duplicated') {
//         window.alert('标签名重复');
//       } else if (message === 'success') {
//         window.alert('添加成功');
//       }
//     }
//   },
//   removeTag(id: string) {
//     if (tagListModel.remove(id)) {
//       this.tagList = tagListModel.fetch();
//       return true;
//     } else {
//       return false;
//     }
//   },
//   updateTag : (id: string, name: string) => {
//     return tagListModel.update(id, name);
//   }
// };


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
