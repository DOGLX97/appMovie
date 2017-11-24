<template id="head">
  <div class="header" :style="{background:bgColor}">
      <span class="home">
          <router-link to="/">首页</router-link>
      </span>
      <h1 class="title">
          {{$store.state.title}}
      </h1>
  </div>
</template>

<script>
import store from '@/vuex/store'
export default {
    data(){
        return {
            
        }
    }, 
    props:['bgColor'],
    mounted(){
      
    },
    store
}
</script>

<style scoped>
.header{
    height:     1rem;
    /* background: rgb(33, 150, 243); */
    position:   fixed;
    top:        0;
    width: 100%;
    line-height: 1rem;
}
.home{
    margin-left: 0.2rem;
}
.home a{
    color:#fff;
    font-weight:bold;
    outline: none;
}
.title{
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    color:#fff;
}
</style>
