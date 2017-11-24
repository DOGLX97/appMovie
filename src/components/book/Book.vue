<template>
  <div id="book">
      <common-header bgColor="#6b5f57">Book</common-header>
      <router-view></router-view>
      <common-footer bgColor="#6b5f57"/>      
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