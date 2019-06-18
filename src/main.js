import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAY2fh6N00thwRp3j--Q-fsDdwxKNq4-YY",
  authDomain: "cs260final.firebaseapp.com",
  databaseURL: "https://cs260final.firebaseio.com",
  projectId: "cs260final",
  storageBucket: "cs260final.appspot.com",
  messagingSenderId: "369787875398",
  appId: "1:369787875398:web:4aa46b3bee15fc48"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});
