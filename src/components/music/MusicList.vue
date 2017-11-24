<template>
    <div class="music-list">
        <h3>歌曲列表</h3>
        <ul>
            <li v-for="song in songArr" :key="song.song_id" class="music-info">
                <span class="music-title">{{song.title}}</span>               
                <span class="music-author">{{song.author}}</span>
            </li>
        </ul>
        <div class="loading-gif" v-show="loadingShow">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
import $ from 'jquery'
export default {
  data(){
      return {
          type:'',
          songArr:[],
          loadingShow:true
      }
  },
  mounted(){
    this.type=location.pathname.split('/')[3];
    this.loadingMusic();    
    //   console.log(this.type);
     var that=this;
      $(window).scroll(function(){
          var windowHeight=$(this).height();
          var windowScroll=$(this).scrollTop();
          var documentHeight=$(document).height();
          if(windowHeight+windowScroll>=documentHeight){
            that.loadingShow=true;                                  
            that.loadingMusic();
          }   
      })
    
  },
  methods:{
      loadingMusic(){
        if(this.songArr.length<60){
            Axios.get(API_PROXY+"http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=&from=webapp_music&method=baidu.ting.billboard.billList&type="+this.type+"&size=15&offset="+this.songArr.length)
            .then(res=>{
                // console.log(res.data.song_list);
                this.songArr=this.songArr.concat(res.data.song_list);   
                this.loadingShow=false;
                // console.log(this.songArr);  
            })
            .catch(function(res){
        })
        }else{
            this.loadingShow=false;
        }
      }
  }
}
</script>

<style scoped>
.music-list{
    margin: 1rem 0;
}
.music-list h3{
    text-align: center;
}
.music-info{
    margin: 0.2rem;
    border-bottom: 1px dashed #ccc;
}
.music-author{
    float:right;
}
.loading-gif{
    text-align: center;
}
</style>
