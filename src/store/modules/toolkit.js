import Vue from 'vue'
import * as constants from '@/store/constants'

const state = {
  hash: {
    ipfs: null,
    eth: null
  },
  file: null
}

const actions = {
  [constants.TOOLKIT_UPLOAD_FILE]: ({commit}, file) => {
    Vue.axios.post('/document', file)
      .then(response => response.data)
      .then(hash => {
        commit(constants.TOOLKIT_SET_PROPERTY, {hash})
      })
  },
  [constants.TOOLKIT_DOWNLOAD_FILE]: ({commit}, hash) => {
    Vue.axios.get(`/document/hash=${hash}`)
      .then(response => response.data)
      .then(file => {
        commit(constants.TOOLKIT_SET_PROPERTY, {file})
      })
  }
}

const mutations = {
  [constants.TOOLKIT_SET_PROPERTY]: (state, data) => {
    const [k, v] = Object.entries(data)[0]
    state[k] = v
  }
}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}