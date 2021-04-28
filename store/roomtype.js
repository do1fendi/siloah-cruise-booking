export const state = () => ({
  roomType: [
    { value: '', text: 'Room / 選擇房' },
    { value: 'Inside_StateRoom', text: '內側客房' },
    { value: 'Porthole_StateRoom', text: '舷窗客房' },
    { value: 'OceanView_StateRoom', text: '海景客房' },
    { value: 'Balcony_StateRoom', text: '露台客房' },
    { value: 'Palace_Suite', text: '皇宮套房' },
    { value: 'Palace_Deluxe_Suite', text: '皇宮豪華套房' },
    { value: 'Palace_Penthouse', text: '皇宮行政套房' },
    { value: 'Palace_Villa', text: '皇宮庭院別墅' },
  ],
  roomPerson: [
    { value: '', text: 'Select Room Person' },
    { value: 'singleRoom', text: '單人一室' },
    { value: 'doubleRoom', text: '兩人一室' },
    { value: 'tripleRoom', text: '三人一室' },
    { value: 'quadRoom', text: '四人一室' },
    { value: 'kidRoom', text: '兒童' },
  ],
  // room price
  packagePrice: {    
    Inside_StateRoom: {
      singleRoom: 0,
      doubleRoom: 0,
      tripleRoom: 0,
      quadRoom: 0,
      kidRoom: 0,
      serviceTax: 0,
    },
    Porthole_StateRoom: {
      singleRoom: 0,
      doubleRoom: 0,
      tripleRoom: 0,
      quadRoom: 0,
      kidRoom: 0,
      serviceTax: 0,
    },
    OceanView_StateRoom: {
      singleRoom: 0,
      doubleRoom: 0,
      tripleRoom: 0,
      quadRoom: 0,
      kidRoom: 0,
      serviceTax: 0,
    },
    Balcony_StateRoom: {
      singleRoom: 0,
      doubleRoom: 0,
      tripleRoom: 0,
      quadRoom: 0,
      kidRoom: 0,
      serviceTax: 0,
    },
    Palace_Suite: {
      singleRoom: 0,
      doubleRoom: 0,
      tripleRoom: 0,
      quadRoom: 0,
      kidRoom: 0,
      serviceTax: 0,
    },
    Palace_Deluxe_Suite: {
      singleRoom: 0,
      doubleRoom: 0,
      tripleRoom: 0,
      quadRoom: 0,
      kidRoom: 0,
      serviceTax: 0,
    },
    Palace_Penthouse: {
      singleRoom: 0,
      doubleRoom: 0,
      tripleRoom: 0,
      quadRoom: 0,
      kidRoom: 0,
      serviceTax: 0,
    },
    Palace_Villa: {
      singleRoom: 0,
      doubleRoom: 0,
      tripleRoom: 0,
      quadRoom: 0,
      kidRoom: 0,
      serviceTax: 0,
    },
    portFee: 0,
  },
})

export const mutations = {
  SET_ROOMTYPE(state, payload) {
    state.roomType = payload
  },
  SET_PACKAGE_PRICE(state, payload) {
    state.packagePrice = payload
  },
  //   SET_INSIDE_ROOM(state, payload) {
  //     state.Inside_room = []
  //     state.Inside_room.push(payload)
  //   },
  //   SET_PORTHOLE_ROOM(state, payload) {
  //     state.Porthole_Room = []
  //     state.Porthole_Room.push(payload)
  //   },
  //   SET_SEA_VIEW_ROOM(state, payload) {
  //     state.Sea_view_room = []
  //     state.Sea_view_room.push(payload)
  //   },
}

export const getters = {
  GET_ROOMTYPE: (state) => state.roomType,
  GET_ROOMPERSON: (state) => state.roomPerson,
  GET_PACKAGE_PRICE: (state) => state.packagePrice,
}
