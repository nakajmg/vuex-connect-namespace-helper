const TEST = 'TEST'
const Vuex = require('vuex')

function createStore() {
  return new Vuex.Store({
    state: {
      foo: 'foo',
    },
    mutations: {
      [TEST](state, payload) {
        state.foo = payload
      },
    },
    actions: {
      [TEST]({ commit }, payload) {
        commit(TEST, payload)
      },
    },
    getters: {
      foo: state => state.foo,
    },
    modules: {
      module: {
        namespaced: true,
        state: {
          bar: 'bar',
        },
        mutations: {
          [TEST](state, payload) {
            state.bar = payload
          },
        },
        actions: {
          [TEST]({ commit }, payload) {
            commit(TEST, payload)
          },
        },
        getters: {
          bar: state => state.bar,
        },
      },
    },
  })
}

module.exports = createStore
