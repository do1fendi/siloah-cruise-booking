<template>
  <div class="thank text-center">
    <h1>THANKS</h1>
  </div>
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

<style>
</style>