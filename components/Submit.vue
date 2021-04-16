<template>
  <div class="submit">
    <h4 class="mt-5 mb-5">Total Price: {{ this.GET_FORM.totalPrice.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}} NTD</h4>
    <div class="submit text-center mt-4">
      <b-button variant="warning" @click="onSubmit">Submit</b-button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters('form', ['GET_FORM'])
    },
    methods:{
        // onSubmit(){
            
        // }
    }
    
}
</script>

<style>
</style>