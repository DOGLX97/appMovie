<template> 
    <div class="music-info">
        <!-- <a-player music="musicObj"></a-player> -->
    </div>
</template> 
  
<script>
import Axios from 'axios'
import VueAplayer from 'vue-aplayer'
export default {
  data(){
      return {
          musicObj:null
      }
  },
  components:{
      'a-player':VueAplayer
  },
  mounted(){
        Axios.get(API_PROXY+"http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=&from=webapp_music&method=baidu.ting.song.play&songid="+this.$route.params.album_id)
            .then(res=>{
                console.log(res);
            })
            .catch(function(res){
        })
  }
}
</script>

  
<style scoped> 
.music-info{
    margin:1rem 0;
}
</style>
