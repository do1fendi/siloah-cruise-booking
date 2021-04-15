<template>
  <div class="travelerForm" v-if="this.GET_FORM.adultNum">
    <div v-for="obj in this.GET_FORM.traveler" :key="obj.index" class="mt-4">
      <b-card>
        <b-badge variant="primary" class="p-2"
          >{{ obj.index }} {{ obj.status }}</b-badge
        >
        <b-form class="mt-2">
          <b-form-row>
            <b-col>
              <label for="">Full Name</label>
              <b-form-input
                placeholder="Full Name"
                @change="setTraveler(obj.index, $event, 'name')"
                ref="name"
              ></b-form-input>
            </b-col>
            <b-col>
              <label for="">Birthday</label>
              <b-form-input
                placeholder="YYYY/MM/DD"
                @change="setTraveler(obj.index, $event, 'birthday')"
                ref="birthday"
              ></b-form-input>
            </b-col>
          </b-form-row>
        </b-form>
      </b-card>
    </div>

    {{ this.GET_FORM }}
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('form', ['GET_FORM']),
    // validation: function(){
    //     return true
    // }
  },
  methods: {
    setTraveler(ind, val, input) {
      const index = ind
      const field = input
      const value = val
      const combine = { index, field, value }
      this.$store.commit('form/SET_TRAVELER', combine)
      this.checkValidity(ind, input)
    },

    checkValidity(ind, input) {
      // alert(this.GET_FORM.traveler[ind][input].length)
      if (input == 'name' && this.GET_FORM.traveler[ind][input].length <= 2) {
        this.$refs.name[ind].$el.classList.add('invalid')
        this.$refs.name[ind].focus()
        // this.$refs.name[ind].$el.state = false
      } else {
        this.$refs.name[ind].$el.classList.remove('invalid')
        this.$refs.name[ind].$el.classList.add('valid')
        
      }

      if (input == 'birthday') {
        var pattern = /^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/
        if (pattern.test(this.GET_FORM.traveler[ind][input]) == false) {
          this.$refs.birthday[ind].$el.classList.add('invalid')
          this.$refs.birthday[ind].focus()
        } else {
          this.$refs.birthday[ind].$el.classList.remove('invalid')
          this.$refs.birthday[ind].$el.classList.add('valid')
        }
      }
    },
  },
}
</script>

<style scoped>
.form {
  padding: 5px;
  border: solid thin #000;
}
.invalid {
  border-color: red;
}
.valid {
  border-color: #28a745;
}
</style>