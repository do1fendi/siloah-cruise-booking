<template>
  <div class="top">
    <b-alert show variant="success">
      <b-row>
        <b-col cols="8">
          <p>團名: {{ tourPackage.tourSubject }}</p>
          <p>出發日期: {{ tourPackage.departureDate }}</p>
        </b-col>
        <!-- <b-col cols="4" class="avSeat">
          <p>
            Available Seats:
            <span
              ><b-avatar class="avFontSize"
                :variant="variant"
                :text="String(available_seat)"
              ></b-avatar
            ></span>
          </p>
        </b-col> -->
      </b-row>
    </b-alert>
    <b-alert show variant="danger">
      <b-row>
        <b-col>
          <p>
            Note: An order is limited to four travelers (or one room). If you
            want to register for more than four travelers (or more than one
            room), please register on seperate order.
          </p>
          <p>
            訂房方式：一間房為一張訂單，如需訂購第二間房，請再建立新訂單，以此類推。
          </p>
          <p>※訂購郵輪費用與機票銷售模式相同為浮動價格※</p>
          <p>※填妥以上需求單不保證訂房成功，本行程費用與機票銷售模式相同為浮動價格，業務人員將儘快為您確認訂房狀況及需補訂房差額，確認報價後，會盡快與您聯繫，謝謝您的報名 !!※</p>
        </b-col>
      </b-row>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: ['tourPackage'],
  data() {
    return {
      //variant: '',
      available_seat: '0',
    }
  },
  computed: {
    variant() {
      this.available_seat = this.tourPackage.seat_available
        ? this.tourPackage.seat_available
        : '0'
      switch (true) {
        case this.available_seat > 10:
          return 'primary'
          break
        case this.available_seat < 10 && this.available_seat > 0:
          return 'warning'
          break
        default:
          return 'danger'
      }
    },
  },
}
</script>

<style scoped>
.top {
  padding: 0;
  font-weight: 600;
}
.avSeat {
  text-align: right;
}
.avFontSize {
  font-weight: 700;
}
</style>