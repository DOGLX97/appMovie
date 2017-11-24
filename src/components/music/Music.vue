<template>
  <div id="music">
      <common-header bgColor="#6ad79f">Music</common-header>
      <router-view></router-view>
      <common-footer bgColor="#6ad79f"></common-footer>      
  </div>
</template>

<script>
import commonHeader from '../common/Header'
import commonFooter from '../common/Footer'
export default {
   components:{
      commonHeader,
      commonFooter
   }
}
</script>

<style scoped>

</style>