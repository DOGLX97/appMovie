<template>
    <ul>
        <li v-for="(song,index) in songArr" :key="index">
            {{song.title}}
        </li>
    </ul>
</template>

<script>
import Axios from 'axios'
export default {
  data(){
      return {
          type:'',
          songArr:[]
      }
  },
  mounted(){
    this.type=location.pathname.split('/')[3];
    //   console.log(this.type);
    Axios.get(API_PROXY+"http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=&from=webapp_music&method=baidu.ting.billboard.billList&type="+this.type+"&size=10&offset=0")
    .then(function(res){
        
        console.log(res.data.song_list);
        this.songArr=res.data.song_list;     
    })
    .catch(function(res){

    })
  }
}
</script>

<style scoped>

</style>
