import Vue from 'vue'
import * as constants from '@/store/constants'
import FormData from 'form-data'

const state = {
  hash: {
    hash: null,
    tx: null
  },
  file: null,
  validate: {
    hash: null,
    fileName: null
  },
  notValid: {
    Error: null
  }
}

const actions = {
  [constants.TOOLKIT_UPLOAD_FILE]: ({commit}, data) => {
    const formData = new FormData()
    formData.append('file', data)
    Vue.axios.post('/document', formData, {headers: {'Content-Type': `multipart/form-data; boundary=${formData.boundary}`}})
      .then(response => response.data.result)
      .then(hash => {
        commit(constants.TOOLKIT_SET_PROPERTY, {hash})
      })
  },
  [constants.TOOLKIT_VERIFIED_FILE]: ({commit}, data) => {
    const formData = new FormData()
    formData.append('file', data)
    Vue.axios.post('/validate', formData, {headers: {'Content-Type': `multipart/form-data; boundary=${formData.boundary}`}})
      .then(response => response.data.result)
      .then(validate => {
        commit(constants.TOOLKIT_SET_PROPERTY, {validate})
      })
      .catch(notValid => {
        commit(constants.TOOLKIT_SET_PROPERTY, {notValid})
      })
  },
  [constants.TOOLKIT_DOWNLOAD_FILE]: ({commit}, hash) => {
    Vue.axios.get(`/document/${hash}`, {responseType: 'blob'})
      .then(response => response.data)
      .then(fileRaw => new Blob([fileRaw], {type: fileRaw.type}))
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