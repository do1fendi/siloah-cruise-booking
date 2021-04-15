export const state = () => ({
  form: {
    roomType: '',
    adultNum: 0,
    kidNum: 0,
    totalPrice: 0,
    traveler: [],
  },
  formValidity: false,
})

export const mutations = {
  SET_FORM(state, { field, value }) {
    switch (field) {
      case 'roomType':
        state.form.roomType = value
        break
      case 'adultNum':
        state.form.traveler=[]
        if(value>0){          
          for(let i=0; i< value; i++){
            state.form.traveler.push({name:'',status:'adult'})
          }
        }        
        state.form.adultNum = value
        break
      case 'kidNum':
        if(value>0){          
          for(let i=0; i< value; i++){
            state.form.traveler.push({name:'',status:'kid'})
          }
        }   
        state.form.kidNum = value
        break
      case 'totalPrice':
        state.form.totalPrice = value
        break
    }
  },
  SET_TRAVELER(state, { index, form }) {
    switch (index) {
      case null:
        state.form.traveler.push(form)
        break
      default:
        state.form.traveler[index] = form
        //push empty to make table reactive
        state.form.traveler.push()
        break
    }
  },
  DELETE_TRAVELER(state, index) {
    state.form.traveler.splice(index, 1)
  },
  SET_FORMVALIDITY(state, payload) {
    state.formValidity = payload
  },  
}

export const getters = {
  GET_FORM: (state) => state.form,
  GET_TRAVELER: (state) => state.form.traveler,
  GET_TRAVELERNUMBER: (state) => state.form.traveler.length,
  GET_FORMVALIDITY: (state) => state.formValidity,
}
