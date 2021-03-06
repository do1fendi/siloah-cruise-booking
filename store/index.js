export const state = () => ({
  userName: 'siloahapiweb',
  password: '4qe3aI1!XSZA)Q^mR*wIChEE',
  token: '',
  groupNumber: '',
  tourPackage: '',
  departureDate: '',
  orderCode:''
})

export const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload
  },
  SET_GROUPNUMBER(state, payload) {
    state.groupNumber = payload
  },
  SET_TOURPACKAGE(state, payload) {
    state.tourPackage = payload
  },
  SET_ORDERCODE(state, payload) {
    state.orderCode = payload
  },
}

export const getters = {
  GET_USERNAME: (state) => state.userName,
  GET_PASSWORD: (state) => state.password,
  GET_TOKEN: (state) => state.token,
  GET_GROUPNUMBER: (state) => state.groupNumber,
  GET_TOURPACKAGE: (state) => state.tourPackage,
  GET_ORDERCODE: (state) => state.orderCode,
}
