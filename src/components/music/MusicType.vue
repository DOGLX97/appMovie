<template>
  <ul class="type">
      <li v-for=" (type,index) in typeArr" :key="index">
          <router-link :to="'/music/musicList/'+type">
              <img :src="'/static/music/'+type+'.jpg'" alt="">          
          </router-link>
      </li>
  </ul>
</template>

<script>
import Axios from 'axios'
export default {
  data(){
      return {
          typeArr:['1','2','11','21']
      }
  },
}
</script>

<style scoped>
.type{
    margin: 1rem 0;
}
/* .type li{
    float: left;
    width: 50%;
} */
.type img{
    width: 100%;
}
</style>
