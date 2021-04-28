<template>
  <b-container class="text-center mt-3">
    <div class="thank">
      <b-alert variant="success" show>
        <h1>Booking Success / 成功</h1>
      </b-alert>
      <div class="detail mt-5 text-left w-75">
        <h4 class="mb-4">Detail / 訂單資訊</h4>
        <p>Order / 訂單編號: {{ GET_ORDERCODE }}</p>
        <p>Adult / 成人: {{ GET_FORM.adultNum }}</p>
        <p>Kid / 小孩: {{ GET_FORM.kidNum }}</p>
        <p>
          Total Price / 總額:
          {{
            GET_FORM.totalPrice
              .toString()
              .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
          }}
          TWD
        </p>
        <h4 class="mt-5">
          Payment Link (點選連結付款)
          <a :href="paymentLink">{{ paymentLink }}</a>
        </h4>
      </div>
      
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      paymentLink: '',
    }
  },
  computed: {
    ...mapGetters('form', ['GET_FORM']),
    ...mapGetters(['GET_TOKEN', 'GET_GROUPNUMBER', 'GET_ORDERCODE']),
  },
  mounted() {
    console.log(this.GET_FORM.traveler.length)
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