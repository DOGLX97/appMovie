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
import store from '@/vuex/store'
export default {
  components:{
      commonHeader,
      commonFooter
  },
  store,
  mounted(){
    // 改变title的值
    this.$store.dispatch('changeTitle','Movie');
  }
}
</script>

<style scoped>

</style>