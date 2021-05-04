<template>
  <div class="travelerForm" v-if="this.GET_FORM.adultNum">
    <div v-for="obj in this.GET_FORM.traveler" :key="obj.index" class="mt-4">
      <b-card>
        <b-badge variant="primary" class="p-2"
          >{{ obj.index + 1 }}. {{ obj.status.toUpperCase() }}</b-badge
        >
        <b-form class="mt-2">
          <b-form-row>
            <b-col>
              <label for="">Chinese Name / 中文全名 </label>
              <b-form-input
                placeholder="Chinese Name / 中文全名"
                name="chname"
                @change="
                  setTraveler({
                    a: obj.index,
                    b: $event,
                    c: 'chname',
                    d: null,
                  })
                "
                ref="chname"
              ></b-form-input>
            </b-col>
            <b-col>
              <label for="">Birthday / 生日 * (YYYY/MM/DD)</label>
              <b-form-input
                placeholder="YYYY/MM/DD"
                name="birthday"
                @change="
                  setTraveler({
                    a: obj.index,
                    b: $event,
                    c: 'birthday',
                    d: null,
                  })
                "
                ref="birthday"
              ></b-form-input>
            </b-col>
          </b-form-row>
          <b-form-row class="mt-2">
            <b-col>
              <label for="">English Last Name / 英文姓 *</label>
              <b-form-input
                placeholder="English Last Name"
                name="enLastName"
                @change="
                  setTraveler({
                    a: obj.index,
                    b: $event,
                    c: 'enLastName',
                    d: null,
                  })
                "
                ref="enLastName"
              ></b-form-input>
            </b-col>
            <b-col>
              <label for="">English First Name / 英文名*</label>
              <b-form-input
                placeholder="English First Name"
                name="enFirstName"
                @change="
                  setTraveler({
                    a: obj.index,
                    b: $event,
                    c: 'enFirstName',
                    d: null,
                  })
                "
                ref="enFirstName"
              ></b-form-input>
            </b-col>
          </b-form-row>
          <b-form-row class="mt-2">
            <b-col>
              <label for="">Country / 國籍*</label>
              <b-form-select
                :options="country"
                name="country"
                @change="
                  setTraveler({
                    a: obj.index,
                    b: $event,
                    c: 'country',
                    d: null,
                  })
                "
                ref="country"
              >
              </b-form-select>
            </b-col>
            <b-col>
              <label for="">Gender / 性別 *</label>
              <b-form-select
                :options="gender"
                name="gender"
                @change="
                  setTraveler({
                    a: obj.index,
                    b: $event,
                    c: 'gender',
                    d: null,
                  })
                "
                ref="gender"
              >
              </b-form-select>
            </b-col>
          </b-form-row>
          <b-col class="pl-0 pr-0 mt-2">
            <label for="">Id Number / 身分證號碼 *</label>
            <b-form-input
              placeholder="Id Number / 身分證號碼"
              name="idNumber"
              @change="
                setTraveler({
                  a: obj.index,
                  b: $event,
                  c: 'idNumber',
                  d: null,
                })
              "
              ref="idNumber"
            ></b-form-input>
          </b-col>
          <b-form-row v-if="obj.status == 'adult'" class="mt-2">
            <b-col>
              <label for="">Phone Code / 國碼 *</label
              ><b-form-select
                :options="GET_PHONECODE"
                @change="
                  setTraveler({
                    a: obj.index,
                    b: $event,
                    c: 'phoneCode',
                    d: null,
                  })
                "
                ref="phoneCode"
              >
              </b-form-select
            ></b-col>
            <b-col>
              <label for="">Phone Number / 手機 *</label>
              <b-form-input
                placeholder="Phone Number"
                name="phoneNumber"
                type="number"
                @change="
                  setTraveler({
                    a: obj.index,
                    b: $event,
                    c: 'phoneNumber',
                    d: null,
                  })
                "
                ref="phoneNumber"
              ></b-form-input>
            </b-col>
          </b-form-row>
        </b-form>
      </b-card>
    </div>
    <div class="mt-2 text-right">
      <a href='/siloah-cruise-booking/cruiseAgreement.pdf' download>
      <h5>
        <b-badge
          class="showAgreement"
          variant="danger"         
          small
          >Agreement / 下載合約內容</b-badge
        >
      </h5>
      </a>
    </div>
    <Submit v-on:checkForm="checkValidity($event)" />
    <Agreement ref="childAgreement" />    
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
    ...mapGetters('country', ['GET_COUNTRY', 'GET_PHONECODE']),
  },
  mounted() {
    this.$nextTick(() => {
      this.country = this.GET_COUNTRY
    })
  },
  methods: {
    setTraveler(ev) {
      const ind = ev.a
      const val = ev.b
      const input = ev.c
      //store to vuex
      const index = ev.a
      const field = ev.c
      const value = ev.b
      const combine = { index, field, value }
      this.$store.commit('form/SET_TRAVELER', combine)
      this.checkValidity(ev)
    },

    checkValidity(ev) {
      const ind = ev.a
      const val = ev.b
      const input = ev.c
      const submit = ev.d
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
                  if (!submit) alert('年齡應大於兩歲')
                }
                break
              case 'kid':
                if (this.ageCalculator(val) == 'baby') {
                  if (!submit) alert('年齡應大於六個月')
                } else if (this.ageCalculator(val) == 'adult') {
                  if (!submit) alert('年齡應小於兩歲')
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
        case 'phoneNumber':
          if (val.length < 9) {
            this.$refs.phoneNumber[ind].$el.classList.add('form-control')
            this.$refs.phoneNumber[ind].$el.classList.add('is-invalid')
            this.$refs.phoneNumber[ind].$el.focus()
          } else {
            this.$refs.phoneNumber[ind].$el.classList.remove('is-invalid')
            this.$refs.phoneNumber[ind].$el.classList.add('is-valid')
          }
          break
      }
    },
    defaultFields() {
      // for (let i = 0; i <= this.GET_FORM.traveler.length; i++) {
      //   this.$refs.gender[i].value = 'male'
      //   this.$refs.country[i].value = 'Taiwan'
      //   this.$refs.phoneCode[i].value = '+886'
      // }
      setTimeout(() => {
        if (this.$refs.gender != 'undefined') {
          //set focus after set button pressed
          this.$refs.chname[0].$el.focus()
          for (let i = 0; i < this.GET_FORM.traveler.length; i++) {
            this.$refs.gender[i].$el.value = 'male'
            this.$refs.country[i].$el.value = 'Taiwan'
            if (this.GET_FORM.traveler[i].status == 'adult')
              this.$refs.phoneCode[i].$el.value = '+886'
          }
        }
      }, 200)
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
      else if (yearAge == 0 && monthAge < 6) return 'baby'
      else if (yearAge < 2) return 'kid'
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