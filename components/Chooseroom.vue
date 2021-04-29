<template>
  <div class="chooseroom mt-5">
    <b-form>
      <b-form-row>
        <b-col>
          <label for="">選擇房</label>
          <b-form-select
            v-model="form.roomType"
            :options="roomOption"
            ref="room"
          ></b-form-select>
        </b-col>
        <b-col>
          <label for="">大人</label>
          <b-form-select
            v-model="form.adultNum"
            :options="adult"
            @change="onChangeAdult"
            ref="adultNum"
          ></b-form-select>
        </b-col>
        <b-col>
          <label for="">小孩 (六個月-兩歲)</label>
          <b-form-select
            v-model="form.kidNum"
            :options="kid"
            @change="onChangeKid"
          ></b-form-select>
        </b-col>
      </b-form-row>
      <b-col class="text-right mt-2 pr-0">
        <b-button variant="primary" class="pl-5 pr-5" @click="onClickSet"
          >Set / 確定</b-button
        >
      </b-col>
    </b-form>
    <Price ref="elPrice" />
    <TravelerForm ref="defaultGender" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      form: {
        roomType: '',
        adultNum: 0,
        kidNum: 0,
      },
      adult: [
        { value: 0, text: '0' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
      ],
      kid: [
        { value: 0, text: '0' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
      ],
    }
  },
  computed: {
    ...mapGetters('roomtype', ['GET_ROOMTYPE']),
    ...mapGetters('form', ['GET_FORM']),
    ...mapMutations('form', ['SET_FORM', 'SET_GROUPNUMBER']),
    roomOption: function () {
      return this.GET_ROOMTYPE
    },
  },
  created() {},
  methods: {
    onChangeAdult() {
      switch (this.form.adultNum) {
        case 0:
          this.kid = [
            { value: 0, text: '0' },
            { value: 1, text: '1' },
            { value: 2, text: '2' },
            { value: 3, text: '3' },
            { value: 4, text: '4' },
          ]
          break
        case 1:
          this.kid = [
            { value: 0, text: '0' },
            { value: 1, text: '1' },
            { value: 2, text: '2' },
            { value: 3, text: '3' },
          ]
          break
        case 2:
          this.kid = [
            { value: 0, text: '0' },
            { value: 1, text: '1' },
            { value: 2, text: '2' },
          ]
          break
        case 3:
          this.kid = [
            { value: 0, text: '0' },
            { value: 1, text: '1' },
          ]
          break
        case 4:
          this.kid = [{ value: 0, text: '0' }]
          break
      }
    },
    onChangeKid() {
      switch (this.form.kidNum) {
        case 0:
          this.adult = [
            { value: 0, text: '0' },
            { value: 1, text: '1' },
            { value: 2, text: '2' },
            { value: 3, text: '3' },
            { value: 4, text: '4' },
          ]
          break
        case 1:
          this.adult = [
            { value: 0, text: '0' },
            { value: 1, text: '1' },
            { value: 2, text: '2' },
            { value: 3, text: '3' },
          ]
          break
        case 2:
          this.adult = [
            { value: 0, text: '0' },
            { value: 1, text: '1' },
            { value: 2, text: '2' },
          ]
          break
        case 3:
          this.adult = [
            { value: 0, text: '0' },
            { value: 1, text: '1' },
          ]
          break
        case 4:
          this.adult = [{ value: 0, text: '0' }]
          break
      }
    },
    onClickSet() {
      if (
        this.GET_FORM.register.lastname == '' ||
        this.GET_FORM.register.firstname == '' ||
        this.GET_FORM.register.email == '' ||
        this.GET_FORM.register.phoneNumber == '' ||
        this.GET_FORM.register.address == ''
      ) {
        alert('請填寫訂購人所有欄位')
      } else if (this.form.roomType == '') {
        this.$refs.room.$el.focus()
      } else if (this.form.adultNum == 0) {
        this.$refs.adultNum.$el.focus()
      } else {
        let field = 'roomType'
        let value = this.form.roomType
        let combine = { field, value }
        this.$store.commit('form/SET_FORM', combine)
        field = 'adultNum'
        value = this.form.adultNum
        combine = { field, value }
        this.$store.commit('form/SET_FORM', combine)
        field = 'kidNum'
        value = this.form.kidNum
        combine = { field, value }
        this.$store.commit('form/SET_FORM', combine)

        this.$store.commit('form/SET_GROUPNUMBER', this.$route.query.groupNumber)

        this.$refs.elPrice.calPrice()
        this.$refs.defaultGender.defaultFields()
      }
    },
  },
}
</script>

<style>
</style>