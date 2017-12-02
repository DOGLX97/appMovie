<template>
  <div class="movie-discuss">
    <ul>
      <li v-for="cmt in cmts" :key="cmt.id" class="movie-discuss-list">
        <div class="movie-discuss-title">
            <img :src="cmt.avatarurl" alt="" class="movie-look">            
            <span>{{cmt.nickName}}</span> 
            <span class="movie-discuss-time">{{cmt.time}}</span>
        </div>
        <p>评分:{{cmt.score}}</p>
        <p>{{cmt.content}}</p>
      </li>
    </ul>
    <div v-show="loadingShow" class="loading">
      <img src="../../assets/img/loading.gif"/>
    </div>
    <div v-show="tip">
      <span>评论已经全部加载！</span>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      cmts: [],
      loadingShow:true,
      tip:false
    };
  },
  mounted() {
    this.play();
    window.onscroll=()=>{
      let clientHeight=document.documentElement.clientHeight;
      let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
      let offsetHeight=document.documentElement.offsetHeight;
      // console.log(clientHeight,scrollTop,offsetHeight);
      if(clientHeight+scrollTop>=offsetHeight){
        this.loadingShow=true;
        if(!this.tip){
          this.play();
        }else{
          this.loadingShow=false;
        }
      }
    }
  },
  methods:{
    play(){
        Axios.get(API_PROXY 
        +"http://m.maoyan.com/comments.json?movieid="+this.$route.params.movieId+"&limit=5&offset="+this.cmts.length)
        .then(res => {
          // console.log(res.data.data.CommentResponseModel.cmts);
          this.loadingShow=false;
          if(res.data.data.CommentResponseModel.cmts.length<5){
            this.tip=true;
          }
          this.cmts = this.cmts.concat(res.data.data.CommentResponseModel.cmts);
        })
        .catch(res => {});
    }
  }
};
</script>

<style scoped>
.movie-discuss {
  margin: 1rem 0;
}
.movie-look{
  width: 20px;
  height: 20px;
  background: #fff;
  display: inline-block;
  border-radius:50%; 
  vertical-align: middle;
}
.movie-discuss-list{
    margin: 0.2rem 0;
    padding: 0.2rem;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;    
}
.movie-discuss-time{
    float: right;
}
.loading{
  text-align: center;
}
.movie-discuss-title{
  background: #ccc;
}
</style>
