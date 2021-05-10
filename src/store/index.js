import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/token'
import { userLogin,  getUserInfo } from '@/api/auth'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo: {}
  }
}

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  login({ commit }, userInfo){
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      userLogin({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          const { data } = response
  
          if (!data) {
            return reject('Verification failed, please Login again.')
          }
          commit('SET_USER_INFO', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
}


export default new Vuex.Store({
  state: {
    token:getToken(),
    userInfo:{}
  },
  mutations: mutations,
  actions: actions,
  modules: {
  }
})
