export const state = () => ({
  form: {
    roomType: '',
    adultNum: 0,
    kidNum: 0,
    totalPrice: 0,
    register: {
      firstname: '',
      lastname: '',
      email: '',
      phoneCode: '+886',
      phoneNumber: '',
      country: 'Taiwan',
      address: '',
    },
    traveler: [],
  },
  regValidity: false,
})

export const mutations = {
  SET_REGFORM(state, { field, value }) {
    switch (field) {
      case 'regFirstname':
        state.form.register.firstname = value
        break
      case 'regLastname':
        state.form.register.lastname = value
        break
      case 'regEmail':
        state.form.register.email = value
        break
      case 'regPhoneCode':
        state.form.register.phoneCode = value
        break
      case 'regPhoneNumber':
        state.form.register.phoneNumber = value
        break
      case 'regCountry':
        state.form.register.country = value
        break
      case 'regAddress':
        state.form.register.address = value
        break
    }
  },
  SET_FORM(state, { field, value }) {
    switch (field) {
      case 'roomType':
        state.form.roomType = value
        break
      case 'adultNum':
        state.form.traveler = []
        if (value > 0) {
          for (let i = 0; i < value; i++) {
            state.form.traveler.push({
              index: i,
              chname: '',
              enLastName: '',
              enFirstName: '',
              country: 'Taiwan',
              idNumber: '',
              status: 'adult',
              birthday: '',
              gender: 'male',
              phoneCode: '+886',
              phoneNumber: '',
            })
          }
        }
        state.form.adultNum = value
        break
      case 'kidNum':
        if (value > 0) {
          for (let i = 0; i < value; i++) {
            state.form.traveler.push({
              index: i + state.form.adultNum,
              chname: '',
              enLastName: '',
              enFirstName: '',
              country: 'Taiwan',
              idNumber: '',
              status: 'kid',
              birthday: '',
              gender: 'male',              
            })
          }
        }
        state.form.kidNum = value
        break
      case 'totalPrice':
        state.form.totalPrice = value
        break
    }
  },
  SET_TRAVELER(state, { index, field, value }) {
    state.form.traveler[index][field] = value
  },
  DELETE_TRAVELER(state, index) {
    state.form.traveler.splice(index, 1)
  },
  SET_REGVALIDITY(state, payload) {
    state.regValidity = payload
  },
}

export const getters = {
  GET_FORM: (state) => state.form,
  GET_TRAVELER: (state) => state.form.traveler,
  GET_TRAVELERNUMBER: (state) => state.form.traveler.length,
  GET_REGVALIDITY: (state) => state.regValidity,
}
