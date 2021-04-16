<template>
  <div class="price">  
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters('form', ['GET_FORM']),
    ...mapGetters('roomtype', ['GET_PACKAGE_PRICE']),
    ...mapMutations('form', ['SET_FORM']),
  },

  methods: {
    calPrice() {
      let totalPrice = 0
      let subTotal = 0
      const adult = parseInt(this.GET_FORM.adultNum)
      const kid = parseInt(this.GET_FORM.kidNum)
      const portFee = this.GET_PACKAGE_PRICE.portFee * (adult + kid)
      const serviceTax =
        this.GET_PACKAGE_PRICE[this.GET_FORM.roomType]['serviceTax'] * adult
      
    
      //count all adult
      if ((adult == 1 && kid == 0) || (adult == 2 && kid == 0)) {
        subTotal =
          this.GET_PACKAGE_PRICE[this.GET_FORM.roomType]['singleRoom'] 
      } else if (adult == 3 && kid == 0) {
        let a = this.GET_PACKAGE_PRICE[this.GET_FORM.roomType]['singleRoom']
        let b = this.GET_PACKAGE_PRICE[this.GET_FORM.roomType]['tripleRoom']
        subTotal = a + b
      } else if (adult == 4 && kid == 0) {
        let a = this.GET_PACKAGE_PRICE[this.GET_FORM.roomType]['singleRoom']
        let b = this.GET_PACKAGE_PRICE[this.GET_FORM.roomType]['tripleRoom']
        subTotal = a + b * 2
      }
      //adult + kid
      else if ((adult == 1 && kid > 0) || (adult == 2 && kid > 0)) {
        let a = this.GET_PACKAGE_PRICE[this.GET_FORM.roomType]['singleRoom']
        let b = this.GET_PACKAGE_PRICE[this.GET_FORM.roomType]['kidRoom']
        subTotal = a + b * kid
      } else if (adult == 3 && kid > 0) {
        let a = this.GET_PACKAGE_PRICE[this.GET_FORM.roomType]['singleRoom']
        let b = this.GET_PACKAGE_PRICE[this.GET_FORM.roomType]['tripleRoom']
        let c = this.GET_PACKAGE_PRICE[this.GET_FORM.roomType]['kidRoom']
        subTotal = a + b + c
      }
      const field = 'totalPrice'
      const value = subTotal + portFee + serviceTax
      const combine = { field, value }
      this.$store.commit('form/SET_FORM', combine)
        
    },
  },
}
</script>

<style scoped>

</style>