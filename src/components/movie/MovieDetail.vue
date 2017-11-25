<template>
  <div class='movie-detail'>
      <div class="movie">
          <div class='movie-img'>
            <img :src="movieDetail.img" alt="">
          </div>
          <div class="movie-title">
            <h3>{{movieDetail.nm}}</h3>
            <p>导演:{{movieDetail.dir}}</p>
            <p>{{movieDetail.src}}</p>
            <p>{{movieDetail.scm}}</p>
          </div>
      </div>
      <p class="movie-info">
        故事梗概: <br/>
        {{movieDetail.dra}}
      </p>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            movieId:'',
            movieDetail:{}
        }
    },
    mounted(){
      var arr=location.href.split("/");
      this.movieId=arr[arr.length-1];
    //   发送请求
      Axios.get(API_PROXY+"http://m.maoyan.com/movie/"+this.movieId+".json")
      .then(res=>{
        // console.log(this.movieId);
        // console.log(res.data.data);
        this.movieDetail=res.data.data.MovieDetailModel;
        this.movieDetail.dra=this.movieDetail.dra.substring(3,this.movieDetail.dra.indexOf('</p>'));
      })
      .catch();
    }
}
</script>

<style scoped>
.movie-detail{
    margin: 1.2rem 0.2rem;
}
.movie{
    display: flex;
}
.movie-img{
    flex-grow: 1;
    width: 0;
    margin-right:10px;
}
.movie-title{
    flex-grow: 2;
    width: 0;
}
.movie-info{
    margin:0.2rem 0;
}
</style>