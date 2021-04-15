<template>
  <div class="travelerForm" v-if="this.GET_FORM.adultNum">        
    <b-form>
      <b-form-row>
        <b-col>
          <label for="Name">Name</label>
          <b-form-input v-model="form.id"></b-form-input>
        </b-col>
      </b-form-row>
    </b-form>
    {{this.GET_FORM}}
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  data() {
    return {
      form: {
        name: '',
      },
    }
  },
  computed:{
      ...mapGetters('form',['GET_FORM']),
    //   getAdultNum: () => this.GET_FORM.adultNum
  }
}
</script>

<style>
</style>