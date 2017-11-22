<template>
  <div class="header">
      <button class="home">首页</button>
      <h1 class="title">Movie</h1>
  </div>
</template>

<script>
export default {
  
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
