<template>
  <div id="music">
      <common-header bgColor="#6ad79f"></common-header>
      <router-view></router-view>
      <common-footer bgColor="#6ad79f"></common-footer>      
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
   mounted(){
    //  改变title的值
     this.$store.dispatch('changeTitle','Music');
   },
   store
}
</script>

<style scoped>

</style>