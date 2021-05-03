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
          <p>※下訂付款後，將有專員與您聯絡需補之訂房差額※</p>
          <p>※如訂房差額無法接受，將全額退款※</p>
          <p>※此為特殊航次，一旦訂位完成，則為保證住房，若取消須收取消費用100%※</p>
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