<template>
    <ul class="movie-list">
        <li v-for="movie in movieArr" :key="movie.id" class="movie">
            <div class='movie-img'>
                <img :src='movie.img'/>
            </div>
            <div class='movie-info'>
                <p class='movie-nm'>{{movie.nm}}<p/>
                <p>{{movie.ver}}<p/>
                <p>主演:{{movie.star}}<p/>                
                <p>{{movie.showInfo}}<p/>
            </div>
        </li>
    </ul>
</template>

<script>
import Axios from 'axios'
export default {
  data(){
      return {
          movieArr:[]
      }
  },
  mounted(){
      Axios.get(API_PROXY+"http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=0")
      .then(res=>{
        console.log(res);
        this.movieArr=res.data.data.movies;
      })
      .catch();

  }
}
</script>

<style scoped>
.movie-list{
    margin:1rem 0;
}
.movie{
    display:flex;
    padding: 0.2rem;
    border-bottom:1px solid #ccc;
}
.movie-img{
    flex-grow: 1;
    width: 0;
    margin-right: 0.2rem;
}
.movie-info{
    flex-grow: 2;
    width: 0;
}
.movie-nm{
    font-weight: bold;
}
</style>
