<template>
  <ul class="movie-discuss">
      <li v-for="cmt in cmts" :key="cmt.id" class="movie-discuss-list">
        <div>
            <img :src="cmt.avatarurl" alt="" class="movie-look">            
            <span>{{cmt.nickName}}</span> 
            <span class="movie-discuss-time">{{cmt.time}}</span>
        </div>
        <p>评分:{{cmt.score}}</p>
        <p>{{cmt.content}}</p>
      </li>
  </ul>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      cmts: []
    };
  },
  mounted() {
    Axios.get(
      API_PROXY +
        "http://m.maoyan.com/comments.json?movieid=246363&limit=5&offset=5"
    )
      .then(res => {
        console.log(res.data.data.CommentResponseModel.cmts);
        this.cmts = res.data.data.CommentResponseModel.cmts;
      })
      .catch(res => {});
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
  background: #ccc;
  display: inline-block;
  border-radius:50%; 
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
</style>
