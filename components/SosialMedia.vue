<template>
  <div class="sosialMedia text-right">
      <div class="byPhone"><a href="tel:886227217300"><img src="~/assets/byPhone.png" /></a></div>
      <div class="byLine"><a href="https://goo.gl/OJu0VQ"><img src="~/assets/byLine.png" /></a></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    .byPhone{
        display: none;
    }
}
.sosialMedia{
    width: 3rem;
    position:fixed;
    bottom:20px;
    right:20px;
}
img{
    width: 100%;
    margin-top: 10px;
}
</style>