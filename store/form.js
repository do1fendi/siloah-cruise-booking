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
            state.form.traveler.push({index:i, name:'',status:'adult', birthday:''})
          }
        }        
        state.form.adultNum = value
        break
      case 'kidNum':
        if(value>0){          
          for(let i=0; i< value; i++){
            state.form.traveler.push({index: i + state.form.adultNum, name:'',status:'kid', birthday:''})
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
