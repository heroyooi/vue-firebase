import Vue from 'vue'
import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firebase-datebase'

firebase.initializeApp(config)
Vue.prototype.$firebase = firebase
