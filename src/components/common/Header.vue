<template id="head">
  <div class="header">
      <button class="home">
          <router-link to="/">首页</router-link>
      </button>
      <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
export default {
    data(){
        return {
            title:'Movie'
        }
    }, 
    mounted(){
        // console.log()
        // this.title=location.pathname.split('/')[1];
    }
}
</script>

<style scoped>
.header{
    height:     1rem;
    background: rgb(33, 150, 243);
    position:   fixed;
    top:        0;
    width: 100%;
    line-height: 1rem;
}
.home{
    margin-left: 0.1rem;
}
.home a{
    color:rgb(33, 150, 243);
}
.title{
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    color:#fff;
}
</style>
