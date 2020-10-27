import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgObj: {},
    rows: {}
  },
  mutations: {
    SET_IMG_URL: (state, obj) => {
      state.imgObj = { ...obj }
    },
    CLEAR_URL: state => {
      state.imgObj.url = ''
    },
    GET_ATTR: (state, obj) => {
      state.rows = { ...obj }
    }
  },
  actions: {
    ChangeImg({ commit }, obj) {
      commit('SET_IMG_URL', obj)
    },
    /** 清楚图片路径 */
    ClearImg({ commit }) {
      commit('CLEAR_URL')
    },
    /** 获取属性 */
    ChangeAttr({ commit }, obj) {
      commit('GET_ATTR', obj)
    }
  }
})
