<template>
    <div class="music-list">
        <h4>歌曲列表</h4>
        <ul>
            <li v-for="song in songArr" :key="song.song_id" class="music-info">
                <span class="music-title">
                    <router-link :to="'/music/MusicInfo/'+song.song_id">{{song.title}}</router-link>    
                </span>               
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
    //  判断滚动条到底加载数据
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
    //   发送请求加载数据
      loadingMusic(){
        if(this.songArr.length<40){
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
.music-list h4{
    text-align: center;
    margin: 0.1rem 0;
}
.music-info{
    margin: 0.2rem;
    border-bottom: 1px dashed #ccc;
}
.music-author{
    float:right;
    color:#919191;     
}
.loading-gif{
    text-align: center;
}
.music-title a{
    color:#919191; 
}
</style>
