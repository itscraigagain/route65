import Vue from 'nativescript-vue';

var firebase = require("nativescript-plugin-firebase");
firebase.init().then(function(instance) {
  console.log("firebase init");
},function(error){console.log("firebase error");});

Vue.prototype.$firebase = firebase;

Vue.registerElement("RadSideDrawer", () => require("nativescript-ui-sidedrawer").RadSideDrawer);

import { TNSFontIcon, fonticon } from "nativescript-fonticon";

TNSFontIcon.paths = {
  'fa': './FontAwesome.css',
}

TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

import Home_page from './components/Home_page';
import product from './components/product';
import specials from './components/specials';


import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

render: h => h(Home_page),
  
  
}).$start();
