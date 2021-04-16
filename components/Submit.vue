<template>
  <div class="submit">
    <h4 class="mt-5 mb-5">Total Price: {{ this.GET_FORM.totalPrice}} NTD</h4>
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