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
                name="name"
                @keyup="
                  setTraveler(
                    obj.index,
                    $event.target.value,
                    $event.target.name
                  )
                "
                ref="name"
              ></b-form-input>
            </b-col>
            <b-col>
              <label for="">Birthday</label>
              <b-form-input
                placeholder="YYYY/MM/DD"
                name="birthday"
                @keyup="
                  setTraveler(
                    obj.index,
                    $event.target.value,
                    $event.target.name
                  )
                "
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
    ...mapGetters(['GET_TOURPACKAGE']),
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
      this.checkValidity(ind, val, input)
    },

    checkValidity(ind, val, input) {
      switch (input) {
        case 'name':
          if (val.length < 2) {
            this.$refs.name[ind].$el.classList.add('form-control')
            this.$refs.name[ind].$el.classList.add('is-invalid')
          } else {
            this.$refs.name[ind].$el.classList.remove('is-invalid')
            this.$refs.name[ind].$el.classList.add('is-valid')
          }
          break
        case 'birthday':
          const pattern = /^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/
          if (
            val.length == 10 &&
            this.GET_FORM.traveler[ind].status != this.ageCalculator(val)
          ) {
            this.$refs.birthday[ind].$el.classList.add('form-control')
            this.$refs.birthday[ind].$el.classList.add('is-invalid')
          } else {
            this.$refs.birthday[ind].$el.classList.remove('is-invalid')
            this.$refs.birthday[ind].$el.classList.add('is-valid')
          }
          break
      }

      // if (input == 'name' && this.GET_FORM.traveler[ind][input].length <= 2) {
      //   this.$refs.name[ind].$el.classList.add('form-control')
      //   this.$refs.name[ind].$el.classList.add('is-invalid')
      //   this.$refs.name[ind].focus()
      // } else {
      //   this.$refs.name[ind].$el.classList.remove('is-invalid')
      //   this.$refs.name[ind].$el.classList.add('is-valid')
      // }

      // if (input == 'birthday') {
      //   var pattern = /^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/
      //   if (pattern.test(this.GET_FORM.traveler[ind][input]) == false) {
      //     this.$refs.birthday[ind].$el.classList.add('is_invalid')
      //     this.$refs.birthday[ind].focus()
      //   } else {
      //     this.$refs.birthday[ind].$el.classList.remove('is_invalid')
      //     this.$refs.birthday[ind].$el.classList.add('is_valid')
      //   }
      // }
    },

    ageCalculator(born) {
      let sp = born.split('/')
      let arranged = sp[1] + '/' + sp[2] + '/' + sp[0]

      var dob = new Date(arranged)
      //extract the year, month, and date from user date input

      var dobYear = dob.getYear()
      var dobMonth = dob.getMonth()
      var dobDate = dob.getDate()

      //get departure date
      // alert(this.GET_TOURPACKAGE.departureDate)
      var departure = new Date(this.GET_TOURPACKAGE.departureDate)
      //extract the year, month, and date from departure date
      var currentYear = departure.getYear()
      var currentMonth = departure.getMonth()
      var currentDate = departure.getDate()

      //declare a variable to collect the age in year, month, and days
      var age = {}
      var ageString = ''
      var yearAge = 0

      //get years
      yearAge = currentYear - dobYear

      //get months
      if (currentMonth >= dobMonth)
        //get months when current month is greater
        var monthAge = currentMonth - dobMonth
      else {
        yearAge--
        var monthAge = 12 + currentMonth - dobMonth
      }

      //get days
      if (currentDate >= dobDate)
        //get days when the current date is greater
        var dateAge = currentDate - dobDate
      else {
        monthAge--
        var dateAge = 31 + currentDate - dobDate

        if (monthAge < 0) {
          monthAge = 11
          yearAge--
        }
      }
      //group the age in a single variable
      age = {
        years: yearAge,
        months: monthAge,
        days: dateAge,
      }

      //display the calculated age
      if (yearAge >= 2) return 'adult'
      else if (yearAge < 2 && yearAge >= 0 && monthAge >= 6) return 'kid'
      else if (yearAge == 0 && monthAge < 6) return 'baby'
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