import Vue from 'vue'
import * as constants from '@/store/constants'
import FormData from 'form-data'

const state = {
  hash: {
    hash: null,
    tx: null
  },
  file: null
}

const actions = {
  [constants.TOOLKIT_UPLOAD_FILE]: ({commit}, data) => {
    const formData = new FormData()
    formData.append('file', data)
    Vue.axios.post('/document', formData, { headers: {'Content-Type': `multipart/form-data; boundary=${formData.boundary}`}})
      .then(response => response.data.result)
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