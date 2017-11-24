<template>
  <div id="movie">
      <common-header bgColor='rgb(33, 150, 243)'/>
      <router-view></router-view>
      <common-footer bgColor='rgb(33, 150, 243)'/>      
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