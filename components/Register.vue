<template>
  <div class="register p-2 mb-2">
    <div class="mb-3 text-center">
      <h4>訂購人</h4>
    </div>

    <!-- <b-form @submit="onSubmit"> -->
    <b-form class="form">
      <b-col class="">
        <b-form-input
          :class="setFieldBorder"
          v-model="regLastname"
          :state="valRegLNState"
          placeholder="Enter your Last name / 姓氏"
          required
          ref="ln"
        ></b-form-input>
      </b-col>
      <b-col class="mt-2">
        <b-form-input
          :class="setFieldBorder"
          v-model="regFirstname"
          :state="valRegFNState"
          placeholder="Enter your first name / 名字"
          required
          ref="fn"
        ></b-form-input>
      </b-col>

      <b-col class="mt-2">
        <b-form-input
          :class="setFieldBorder"
          v-model="regEmail"
          :state="valRegEmailState"
          type="email"
          placeholder="Email / 信箱"
          required
          ref="email"
        ></b-form-input>
      </b-col>

      <b-col class="mt-2">
        <b-form-select v-model="regPhoneCode" :options="phoneCode">
        </b-form-select>
      </b-col>
      <b-col class="mt-2">
        <b-form-input
          :class="setFieldBorder"
          v-model="regPhoneNumber"
          type="number"
          :state="valRegPhoneNumberState"
          placeholder="Phone Number / 聯絡電話"
          required
          ref="phone"
        >
        </b-form-input>
      </b-col>

      <b-col class="mt-2">
        <b-form-select v-model="regCountry" :options="country"></b-form-select>
      </b-col>
      <b-col class="mt-2">
        <b-form-input
          :class="setFieldBorder"
          v-model="regAddress"
          placeholder="Enter Address / 地址"
          :state="valRegAddressState"
          required
          ref="address"
        ></b-form-input>
      </b-col>      
    </b-form>

    <div></div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapMutations('form', [
      'SET_REGFORM', 'SET_REGVALIDITY'
    ]),
    ...mapGetters('country', ['GET_COUNTRY', 'GET_PHONECODE']),
    ...mapGetters('form', [
      'GET_FORM'
    ]),
    
    valRegLNState() {
      return this.GET_FORM.register.lastname.length >= 1
    },
    valRegFNState() {
      return this.GET_FORM.register.firstname.length >= 1
    },
    valRegEmailState() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.GET_FORM.register.email.toLowerCase())
    },
    valRegPhoneNumberState() {
      return this.GET_FORM.register.phoneNumber.length >= 5
    },
    valRegAddressState() {
      return this.GET_FORM.register.address.length >= 10
    },
    // bind form fields to form store
    regLastname: {
      get() {
        return this.GET_FORM.register.lastname
      },
      set(value) {
        const field = 'regLastname'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    regFirstname: {
      get() {
        return this.GET_FORM.register.firstname
      },
      set(value) {
        const field = 'regFirstname'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    regEmail: {
      get() {
        return this.GET_FORM.register.email
      },
      set(value) {
        const field = 'regEmail'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    regPhoneCode: {
      get() {
        return this.GET_FORM.register.phoneCode
      },
      set(value) {
        const field = 'regPhoneCode'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    regPhoneNumber: {
      get() {
        return this.GET_FORM.register.phoneNumber
      },
      set(value) {
        const field = 'regPhoneNumber'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    regCountry: {
      get() {
        return this.GET_FORM.register.country
      },
      set(value) {
        const field = 'regCountry'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
    regAddress: {
      get() {
        return this.GET_FORM.register.address
      },
      set(value) {
        const field = 'regAddress'
        const combine = { field, value }
        this.$store.commit('form/SET_REGFORM', combine)
      },
    },
  },
  data() {
    return {
      setFieldBorder: 'setFieldBorder',
      country: [],
      phoneCode: [],
    }
  },
  methods: {   
    onstart() {
      this.onStart = 'setField'
    },
    formValidation() {
      if (!this.valRegLNState) {
        this.$refs.ln.$el.focus()
        return false
      } else if (!this.valRegFNState) {
        this.$refs.fn.$el.focus()
        return false
      } else if (!this.valRegEmailState) {
        this.$refs.email.$el.focus()
        return false
      } else if (!this.valRegPhoneNumberState) {
        this.$refs.phone.$el.focus()
        return false
      } else if (!this.valRegAddressState) {
        this.$refs.address.$el.focus()
        return false
      } else        
        return true
    },
  },
  created() {    
    this.country = this.GET_COUNTRY
    this.phoneCode = this.GET_PHONECODE
  },
}
</script>

<style scoped>
.register {
  border-radius: 3px;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
.showAgreement:hover {
  cursor: pointer;
  color: #fff;
}
/* Override Bootstrap */
.form {
  margin: auto;
  width: 50%;
}
@media (max-width: 600px) {
  .form {
    width: 100%;
  }
}
.col {
  padding-right: 0;
  padding-left: 0;
}
.setFieldBorder {
  border: 1px solid #ced4da;
}
</style>