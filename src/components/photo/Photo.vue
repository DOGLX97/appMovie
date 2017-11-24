<template>
  <div id="photo">
      <common-header bgColor="#e8679c">Photo</common-header>
      <router-view></router-view>
      <common-footer bgColor="#e8679c"/>      
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
     this.$store.dispatch('changeTitle','Photo');
   }
}
</script>

<style scoped>

</style>