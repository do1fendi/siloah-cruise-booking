<template>
   <b-container class="text-center mt-3">
    <div class="thank">
      <b-alert variant="success" show>
        <h1>Booking Success / 成功</h1>
      </b-alert>
      <div class="detail mt-5 text-left w-75">
        <h4 class="mb-4">Detail Transaction</h4>
        <!-- <p>Order Number: {{ GET_ORDERNUMBER }}</p> -->
        <p>Adult: {{ GET_FORM.adultNum }}</p>
        <p>Kid: {{ GET_FORM.kidNum }}</p>
        <p>Total Price: {{ GET_FORM.totalPrice }} TWD</p>
      </div>
      <h3 class="mt-5">
        Check another Itinerary. at
        <a href="https://www.taiwanviptravel.com">here</a>
      </h3>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('form', ['GET_FORM']),
    ...mapGetters(['GET_TOKEN']),
  },
  mounted() {
    console.log(this.GET_FORM.traveler.length)
    if (this.GET_FORM.traveler.length > 0) {
      const tempCode = Date.now().toString()
      const orderCode = 'ORC'+ tempCode.slice(tempCode.length - 7)
      const query = JSON.stringify({
        fieldData: {
          RS_salesNumber: orderCode,
          json_byNumber: `${JSON.stringify(this.GET_FORM)}`
        },
        script: 'order_create',
        'script.param': orderCode,
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
        console.log(data)
      }
      apiStore()
    }
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