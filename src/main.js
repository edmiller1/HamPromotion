import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js";
import "./assets/css/tailwind.css";
import * as firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBus_mQbDBgZyDIfu35NTYSTQxXzBQZSSY",
      authDomain: "ham-promotion.firebaseapp.com",
      databaseURL: "https://ham-promotion.firebaseio.com",
      projectId: "ham-promotion",
      storageBucket: "ham-promotion.appspot.com",
      messagingSenderId: "1093538367536",
      appId: "1:1093538367536:web:bac760f3e844f2dc8f45f5"
    });
  }
}).$mount("#app");