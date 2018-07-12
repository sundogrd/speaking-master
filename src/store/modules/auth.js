import Vue from 'vue'
import { getUserInfo as getUserInfoAPI, getToken as getTokenAPI } from 'api/auth'

const OAUTH_STATE_EXPIRES_IN = 1000 * 60 * 5// 5 minutes

function isExpired (time) {
  return Date.now() > time
}

const auth = {
  state: {
    user: {
      id: null
    },
    token: {
      accessToken: null,
      refreshToken: null,
      tokenType: null,
      expiresAt: null
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      for (const key in token) {
        state.token[key] = token[key]
      }
    },
    CLEAR_TOKEN: (state) => {
      for (const key in state.token) {
        state.token[key] = null
      }
    },
    SET_USER: (state, userInfo) => {
      for (const key in userInfo) {
        if (key in state) {
          state.user[key] = userInfo[key]
        } else {
          Vue.set(state.user, key, userInfo[key])
        }
      }
    },
    CLEAR_USER: state => {
      for (const key in state.user) {
        state.user[key] = null
      }
    }
  },

  actions: {
    async getToken ({commit}, {code, state}) {
      // TODO: 这个State需要研究一下
      const oauthState = {
        // state: `os-${Math.floor(Math.random() * 100000000)}`,
        state: 'fuck',
        expiresAt: Date.now() + OAUTH_STATE_EXPIRES_IN
      }
      if (code && state && oauthState &&
          oauthState.state === state &&
          !isExpired(oauthState.expiresAt)) {
        // confirm that this request is valid (not forged)
        // use the code to request for an access token

        const resp = await getTokenAPI({'code': code})

        commit('SET_TOKEN', {
          'accessToken': resp.access_token,
          'refreshToken': resp.refresh_token,
          'tokenType': resp.token_type,
          'expiresAt': Date.now() + resp.expires_in * 1000// when the access token will expire
        })

        const tokenPayload = JSON.parse(atob(resp.access_token.split('.')[1]))

        commit('SET_USER', {
          username: tokenPayload.username
        })

        return true
      }
      return false
    },
    async getUserInfo ({commit, state}) {
      const user = await getUserInfoAPI(state.user.username)
      commit('SET_USER', {
        ...user
      })
      return user
    },
    async signoutAction ({commit, state}) {
      commit('CLEAR_USER')
      commit('CLEAR_TOKEN')
    }
  }
}

export default auth
