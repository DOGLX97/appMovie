<template>
  <div id="book">
      <common-header bgColor="#6b5f57"></common-header>
      <div class="swipe-container">
          <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
          </swipe>         
      </div>
      <common-footer bgColor="#6b5f57"/>      
  </div>
</template>

<script>
import commonHeader from '../common/Header'
import commonFooter from '../common/Footer'
import store from '@/vuex/store'
import swipe from './swipe'
import swipeItem from './swipe-item'
import '../../assets/css/vue-swipe.css'

export default {
   components:{
      commonHeader,
      commonFooter,
      swipe,
      swipeItem
   },
   store,
   mounted(){
     this.$store.dispatch('changeTitle','Book');
   }
}
</script>

<style scoped>
.swipe-container{
  margin: 1rem 0;
  height: 200px;
  padding: 1rem 0;
  background: #000;
}
.slide1{
  background: url(/static/img/book1.jpg) no-repeat center center/cover;
}
.slide2{
  background: url(/static/img/book2.jpg) no-repeat center center/cover;
}
.slide3{
  background: url(/static/img/book3.jpg) no-repeat center center/cover;
}
</style>