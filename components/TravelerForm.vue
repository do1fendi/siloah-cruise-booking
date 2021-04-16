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
              <label for="">Full Chinese Name</label>
              <b-form-input
                placeholder="Full Chinese Name"
                name="chname"
                @change="setTraveler(obj.index, $event, 'chname')"
                ref="chname"
              ></b-form-input>
            </b-col>
            <b-col>
              <label for="">Birthday *</label>
              <b-form-input
                placeholder="YYYY/MM/DD"
                name="birthday"
                @change="setTraveler(obj.index, $event, 'birthday')"
                ref="birthday"
              ></b-form-input>
            </b-col>
          </b-form-row>
          <b-form-row class="mt-2">
            <b-col>
              <label for="">English Last Name *</label>
              <b-form-input
                placeholder="English Last Name"
                name="enLastName"
                @change="setTraveler(obj.index, $event, 'enLastName')"
                ref="enLastName"
              ></b-form-input>
            </b-col>
            <b-col>
              <label for="">English First Name *</label>
              <b-form-input
                placeholder="English First Name"
                name="enFirstName"
                @change="setTraveler(obj.index, $event, 'enFirstName')"
                ref="enFirstName"
              ></b-form-input>
            </b-col>
          </b-form-row>
          <b-form-row class="mt-2">
            <b-col>
              <label for="">Country *</label>
              <b-form-select
                :options="country"
                name="country"
                @change="setTraveler(obj.index, $event, 'country')"
                ref="country"
              >
              </b-form-select>
            </b-col>
            <b-col>
              <label for="">Gender *</label>
              <b-form-select
                :options="gender"
                name="gender"
                @change="setTraveler(obj.index, $event, 'gender')"
                ref="gender"
              >
              </b-form-select>
            </b-col>
            <b-col>
              <label for="">Id Number *</label>
              <b-form-input
                placeholder="Id Number / Passport"
                name="idNumber"
                @change="setTraveler(obj.index, $event, 'idNumber')"
                ref="idNumber"
              ></b-form-input>
            </b-col>
          </b-form-row>
        </b-form>
      </b-card>
    </div>
    <div class="mt-2 text-right">
      <h6>
        <b-badge
          class="showAgreement"
          variant="danger"
          @click="showAgreementModal"
          small
          >Show Agreement</b-badge
        >
      </h6>
    </div>
    <Submit />
    <Agreement ref="childAgreement" />
    {{ this.GET_FORM }}
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      gender: [
        { value: 'male', text: '男' },
        { value: 'female', text: '女' },
      ],
      country: [],
    }
  },
  computed: {
    ...mapGetters('form', ['GET_FORM']),
    ...mapGetters(['GET_TOURPACKAGE']),
    ...mapGetters('country', ['GET_COUNTRY']),
  },
  mounted() {
    this.$nextTick(() => {
      this.country = this.GET_COUNTRY
    })
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
        case 'enLastName':
          if (val.length < 2) {
            this.$refs.enLastName[ind].$el.classList.add('form-control')
            this.$refs.enLastName[ind].$el.classList.add('is-invalid')
            this.$refs.enLastName[ind].$el.focus()
          } else {
            this.$refs.enLastName[ind].$el.classList.remove('is-invalid')
            this.$refs.enLastName[ind].$el.classList.add('is-valid')
          }
          break
        case 'enFirstName':
          if (val.length < 2) {
            this.$refs.enFirstName[ind].$el.classList.add('form-control')
            this.$refs.enFirstName[ind].$el.classList.add('is-invalid')
            this.$refs.enFirstName[ind].$el.focus()
          } else {
            this.$refs.enFirstName[ind].$el.classList.remove('is-invalid')
            this.$refs.enFirstName[ind].$el.classList.add('is-valid')
          }
          break
        case 'birthday':
          const pattern = /^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/
          if (
            (val.length == 10 &&
              this.GET_FORM.traveler[ind].status != this.ageCalculator(val)) ||
            !pattern.test(val)
          ) {
            switch (this.GET_FORM.traveler[ind].status) {
              case 'adult':
                if (this.ageCalculator(val) != 'adult') {
                  alert('Age should older than 2 years old!')
                }
                break
              case 'kid':
                if (this.ageCalculator(val) != 'kid') {
                  alert('Age should younger than 2 years old!')
                }
                break
            }
            this.$refs.birthday[ind].$el.classList.add('form-control')
            this.$refs.birthday[ind].$el.classList.add('is-invalid')
            this.$refs.birthday[ind].$el.focus()
          } else {
            this.$refs.birthday[ind].$el.classList.remove('is-invalid')
            this.$refs.birthday[ind].$el.classList.add('is-valid')
          }
          break
        case 'gender':
          if (val == '') {
            this.$refs.gender[ind].$el.classList.add('form-control')
            this.$refs.gender[ind].$el.classList.add('is-invalid')
            this.$refs.gender[ind].$el.focus()
          } else {
            this.$refs.gender[ind].$el.classList.remove('is-invalid')
            this.$refs.gender[ind].$el.classList.add('is-valid')
          }
          break
        case 'idNumber':
          if (val.length < 5) {
            this.$refs.idNumber[ind].$el.classList.add('form-control')
            this.$refs.idNumber[ind].$el.classList.add('is-invalid')
            this.$refs.idNumber[ind].$el.focus()
          } else {
            this.$refs.idNumber[ind].$el.classList.remove('is-invalid')
            this.$refs.idNumber[ind].$el.classList.add('is-valid')
          }
          break
      }
    },
    defaultFields() {
      setTimeout(() => {
        if (this.$refs.gender != 'undefined') {
          for (let i = 0; i < this.GET_FORM.traveler.length; i++) {
            this.$refs.gender[i].$el.value = 'male'
            this.$refs.country[i].$el.value = 'Taiwan'
          }
        }
      }, 500)
    },
    showAgreementModal() {
      this.$refs.childAgreement.showAgreement()
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
.showAgreement:hover {
  cursor: pointer;
  color: #fff;
}
</style>