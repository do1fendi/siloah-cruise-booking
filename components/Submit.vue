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
    ...mapGetters(['GET_TOKEN','GET_TOURPACKAGE']),
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
        if (el.birthday === '' || !pattern.test(el.birthday) || el.status != this.ageCalculator(el.birthday)) {
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
      if (!invalid) {
        alert(this.GET_TOKEN)
        this.$router.push('thank')
      }
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
      else if (yearAge == 0 && monthAge < 6) return 'baby'
      else if (yearAge < 2) return 'kid'
    },
  },
}
</script>

<style>
</style>