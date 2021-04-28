<template>
  <div>
    <b-alert
      variant="success"
      show
      v-if="GET_FORM.traveler.length > 0"
      class="submit"
    >
      <h3>訂單資訊</h3>
      <hr />
      <p class="mb-2">房型: {{ GET_FORM.roomType }}</p>

      <!-- if only one traveler (adult) -->
      <div v-if="GET_FORM.adultNum == 1 && GET_FORM.kidNum == 0">
        <p>
          1. Adult: {{ GET_PACKAGE_PRICE[GET_FORM.roomType].singleRoom }} +
          {{ GET_PACKAGE_PRICE.portFee }} (港務税) +
          {{ GET_PACKAGE_PRICE[GET_FORM.roomType].serviceTax }} (服務費) =
          {{
            (
              GET_PACKAGE_PRICE[GET_FORM.roomType].singleRoom +
              GET_PACKAGE_PRICE.portFee +
              GET_PACKAGE_PRICE[GET_FORM.roomType].serviceTax
            )
              .toString()
              .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
          }}
        </p>
      </div>
      <!-- if only adult (more than one) -->
      <div v-else-if="GET_FORM.adultNum > 1 && GET_FORM.kidNum == 0">
        <p v-for="item in GET_FORM.traveler" :key="item.index">
          {{ item.index + 1 }}.
          {{ item.status.replace(/^./, item.status[0].toUpperCase()) }} (成人):
          {{
            item.index == 0 || item.index == 1
              ? GET_PACKAGE_PRICE[GET_FORM.roomType].doubleRoom
              : GET_PACKAGE_PRICE[GET_FORM.roomType].tripleRoom
          }}
          +
          {{ GET_PACKAGE_PRICE.portFee }} (港務税) +
          {{ GET_PACKAGE_PRICE[GET_FORM.roomType].serviceTax }} (服務費) =
          {{
            (
              (item.index == 0 || item.index == 1
                ? GET_PACKAGE_PRICE[GET_FORM.roomType].doubleRoom
                : GET_PACKAGE_PRICE[GET_FORM.roomType].tripleRoom) +
              GET_PACKAGE_PRICE.portFee +
              GET_PACKAGE_PRICE[GET_FORM.roomType].serviceTax
            )
              .toString()
              .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
          }}
        </p>
      </div>
      <!-- if one adult and more than zero kid -->
      <div
        v-else-if="
          (GET_FORM.adultNum == 1 && GET_FORM.kidNum > 0) ||
          (GET_FORM.adultNum == 2 && GET_FORM.kidNum > 0)
        "
      >
        <p v-for="item in GET_FORM.traveler" :key="item.index">
          {{ item.index + 1 }}.
          {{ item.status.replace(/^./, item.status[0].toUpperCase()) }}
          {{ item.status == 'adult' ? '(成人)' : '(小孩)' }}:
          {{
            item.status == 'adult' || (item.status == 'kid' && item.index == 1)
              ? GET_PACKAGE_PRICE[GET_FORM.roomType].doubleRoom
              : GET_PACKAGE_PRICE[GET_FORM.roomType].kidRoom
          }}
          + {{ GET_PACKAGE_PRICE.portFee }} (港務税) +
          {{
            item.status == 'adult'
              ? GET_PACKAGE_PRICE[GET_FORM.roomType].serviceTax
              : 0
          }}
          (服務費) =
          {{
            (
              (item.status == 'adult' ||
              (item.status == 'kid' && item.index == 1)
                ? GET_PACKAGE_PRICE[GET_FORM.roomType].doubleRoom
                : GET_PACKAGE_PRICE[GET_FORM.roomType].kidRoom) +
              GET_PACKAGE_PRICE.portFee +
              (item.status == 'adult'
                ? GET_PACKAGE_PRICE[GET_FORM.roomType].serviceTax
                : 0)
            )
              .toString()
              .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
          }}
        </p>
      </div>
      <!-- if adult == 3 and kid > 0 -->
      <div v-else-if="GET_FORM.adultNum == 3 && GET_FORM.kidNum > 0">
        <p v-for="item in GET_FORM.traveler" :key="item.index">
          {{ item.index + 1 }}.
          {{ item.status.replace(/^./, item.status[0].toUpperCase()) }}
          {{ item.status == 'adult' ? '(成人)' : '(小孩)' }}:
          {{
            item.status == 'adult'
              ? item.index == 0 || item.index == 1
                ? GET_PACKAGE_PRICE[GET_FORM.roomType].doubleRoom
                : GET_PACKAGE_PRICE[GET_FORM.roomType].tripleRoom
              : GET_PACKAGE_PRICE[GET_FORM.roomType].kidRoom
          }}
          + {{ GET_PACKAGE_PRICE.portFee }} (港務税) +
          {{
            item.status == 'adult'
              ? GET_PACKAGE_PRICE[GET_FORM.roomType].serviceTax
              : 0
          }}
          (服務費) =
          {{
            (
              (item.status == 'adult'
                ? item.index == 2
                  ? GET_PACKAGE_PRICE[GET_FORM.roomType].doubleRoom
                  : GET_PACKAGE_PRICE[GET_FORM.roomType].tripleRoom
                : GET_PACKAGE_PRICE[GET_FORM.roomType].kidRoom) +
              GET_PACKAGE_PRICE.portFee +
              (item.status == 'adult'
                ? GET_PACKAGE_PRICE[GET_FORM.roomType].serviceTax
                : 0)
            )
              .toString()
              .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
          }}
        </p>
      </div>
      <div class="mt-5 mb-2">
        <h5>
          Total Price:
          {{
            this.GET_FORM.totalPrice
              .toString()
              .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
          }}
          NTD
        </h5>
      </div>
    </b-alert>
    <div class="submit text-center mt-4">
      <b-button variant="warning" @click="onSubmit">Submit / 送出</b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('form', ['GET_FORM', 'GET_FORMVALIDITY']),
    ...mapGetters('roomtype', ['GET_PACKAGE_PRICE']),
    ...mapGetters(['GET_TOKEN', 'GET_TOURPACKAGE']),
    ...mapMutations('form', ['SET_FORMVALIDITY']),
    ...mapMutations(['SET_ORDERCODE']),
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
        if (
          el.birthday === '' ||
          !pattern.test(el.birthday) ||
          el.status != this.ageCalculator(el.birthday)
        ) {
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
        // alert(this.GET_TOKEN)
        const tempCode = Date.now().toString()
        const orderCode = 'ORC' + tempCode.slice(tempCode.length - 7)
        this.$store.commit('SET_ORDERCODE', orderCode)
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

<style scoped>
p {
  margin-bottom: 0rem;
}
</style>