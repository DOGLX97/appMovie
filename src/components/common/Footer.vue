<template>
    <ul class="footer" :style="{background:bgColor}">
        <li><router-link to="/movie">电影</router-link></li>
        <li><router-link to="/music">音乐</router-link></li>
        <li><router-link to="/book">书籍</router-link></li>
        <li><router-link to="/photo">图片</router-link></li>      
    </ul>
</template>

<script>
export default {
  props:['bgColor']
}
</script>

<style scoped>
.footer{
    height:      1rem;
    /* background:  rgb(33, 150, 243); */
    position:    fixed;
    bottom:      0;
    width:       100%;
    display:     flex;
    line-height: 1rem;
}
.footer li{
    flex-grow:   1;
    text-align:  center;
}
.footer a{
   color:        #ccc;    
}
.footer a.router-link-active{
    color: #fff;
    outline: none;
}
</style>