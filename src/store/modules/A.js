const moduleA = {
  namespaced: true,
  state: {
    name: '我是A的名字',
    count: 200
  },
  getters: {},
  mutations: {
    changeCount (state) {
      state.count += 50
    }
  },
  actions: {}
}

export default moduleA
