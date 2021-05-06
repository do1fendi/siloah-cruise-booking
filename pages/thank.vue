<template>
  <b-container class="text-center mt-3">
    <b-overlay
      :show="busy"
      rounded
      opacity="0.6"
      spinner-big
      spinner-variant="primary"
      class="d-inline-block w-100"
    >
      <div class="thank p-5">
        <b-alert variant="success" show>
          <h1>需求單</h1>
        </b-alert>
        <div class="detail mt-5 text-left w-75">
          <h4 class="mb-4">Detail / 訂單資訊</h4>
          <p>Order / 訂單編號: {{ GET_ORDERCODE }}</p>
          <p>Adult / 成人: {{ GET_FORM.adultNum }}</p>
          <p>Kid / 小孩: {{ GET_FORM.kidNum }}</p>
          <!-- <p>
            Total Price / 總額:
            {{
              GET_FORM.totalPrice
                .toString()
                .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
            }}
            TWD
          </p> -->
          <p>Room Type / 要求的房型: {{GET_ROOM[GET_FORM.roomType]}}</p>
          <p>Departure Date / 出發日期及行程: {{`${new Date(GET_TOURPACKAGE.departureDate).getFullYear()}/${new Date(GET_TOURPACKAGE.departureDate).getMonth()+1}/${new Date(GET_TOURPACKAGE.departureDate).getDate()}`}}</p>
          <!-- Open this for payment -->
          <!-- <h4 class="mt-5">
            Payment Link (點選連結付款): 
            <a :href="paymentLink">{{ paymentLink }}</a>
          </h4> -->
         
        </div>
        
         <b-alert variant="danger w-75" class="m-auto" show>
            <h5>
              ★
              填妥以上需求單不保證訂房成功，本行程費用與機票銷售模式相同為浮動價格，業務人員將儘快為您確認訂房狀況及需補訂房差額，確認報價後，會盡快與您聯繫，謝謝您的報名
              !!
            </h5>
          </b-alert>
        
      </div>
    </b-overlay>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      busy: true,
      paymentLink: '',
    }
  },
  computed: {
    ...mapGetters('form', ['GET_FORM']),
    ...mapGetters(['GET_TOKEN', 'GET_GROUPNUMBER', 'GET_ORDERCODE' , 'GET_TOURPACKAGE']),
    ...mapGetters('roomtype',['GET_ROOM'])
  },
  mounted() {
    if (this.GET_FORM.traveler.length > 0) {
      // const tempCode = Date.now().toString()
      // const orderCode = 'ORC'+ tempCode.slice(tempCode.length - 7)
      const query = JSON.stringify({
        fieldData: {
          RS_salesNumber: this.GET_ORDERCODE,
          json_byNumber: `${JSON.stringify(this.GET_FORM)}`,
        },
        script: 'order_create',
        'script.param': this.GET_ORDERCODE,
      })

      //   console.log(query)
      const config = {
        method: 'POST',
        url:
          'https://ofc.taiwanviptravel.com/fmi/data/v1/databases/TVT/layouts/DATA_API_SALESORDER/records',
        headers: {
          Authorization: `Bearer ${this.GET_TOKEN}`,
          'Content-Type': 'application/json',
        },
        data: query,
      }
      const apiStore = async () => {
        const res = await this.$axios(config)
        const data = await res.data.response
        this.getPaymentLink()
      }
      apiStore()
    }
  },
  methods: {
    getPaymentLink() {
      const query = JSON.stringify({
        query: [
          {
            RS_salesNumber: this.GET_ORDERCODE,
          },
        ],
      })
      const config = {
        method: 'POST',
        url:
          'https://ofc.taiwanviptravel.com/fmi/data/v1/databases/TVT/layouts/DATA_API_SALESORDER/_find',
        headers: {
          Authorization: `Bearer ${this.GET_TOKEN}`,
          'Content-Type': 'application/json',
        },
        data: query,
      }

      const getLink = async () => {
        const res = await this.$axios(config)
        const data = await res.data.response.data[0].fieldData
        this.paymentLink = data.paymentLink
        this.busy = false
      }
      getLink()
    },
  },
}
</script>

<style scoped>
.detail {
  margin-left: auto;
  margin-right: auto;
}
p {
  font-size: 18px;
  font-weight: 600;
}
</style>