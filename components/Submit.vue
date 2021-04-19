<template>
  <div class="submit">
    <h4 class="mt-5 mb-5">
      Total Price:
      {{
        this.GET_FORM.totalPrice
          .toString()
          .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
      }}
      NTD
    </h4>
    <div class="submit text-center mt-4">
      <b-button variant="warning" @click="onSubmit">Submit</b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('form', ['GET_FORM', 'GET_FORMVALIDITY']),
    ...mapMutations('form', ['SET_FORMVALIDITY']),
  },
  methods: {
    onSubmit() {
      
      //a= index, b=value, c=fieldname
      let invalid = 0
      this.GET_FORM.traveler.forEach((el) => {
        const pattern = /^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/
        
        if (el.enLastName === '' || el.enLastName.length < 2) {
          this.$emit('checkForm', {
            a: el.index,
            b: '',
            c: 'enLastName',
            d: 'submit',
          })
          invalid += 1
        } 
        if (el.enFirstName === '' || el.enFirstName.length < 2) {
          this.$emit('checkForm', {
            a: el.index,
            b: '',
            c: 'enFirstName',
            d: 'submit',
          })
          invalid += 1
        } 
        if (el.birthday === '' || !pattern.test(el.birthday)) {
          this.$emit('checkForm', {
            a: el.index,
            b: '',
            c: 'birthday',
            d: 'submit',
          })
          invalid += 1
        }
        if (el.idNumber === '' || el.idNumber.length < 5) {
          this.$emit('checkForm', {
            a: el.index,
            b: '',
            c: 'idNumber',
            d: 'submit',
          })
          invalid += 1
        } 
      })

      

      // alert(invalid)
      if (!invalid){
        alert('ok')
      }
    },
  },
}
</script>

<style>
</style>