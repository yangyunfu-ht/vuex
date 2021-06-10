import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/A'
import moduleB from './modules/B'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      name: '杨云福',
      age: 24,
      address: '云南省昆明市官渡区官南大道',
      phone: 17695510310,
      family: ['mother', 'father', 'bother']
    }
  },
  getters: {
    getMother (state) {
      return state.userInfo.family[0].toLocaleUpperCase()
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    moduleA,
    moduleB
  }
})
