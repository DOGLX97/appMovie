<template>  
    <div class="movie-list">
        <ul >
            <li v-for="movie in movieArr" :key="movie.id" class="movie">
                <div class='movie-img'>
                    <img :src='movie.img'/>
                </div>
                <div class='movie-info'>
                    <router-link :to="'/movie/movieDetail/'+movie.id">
                        <p class='movie-nm'>{{movie.nm}}<p/>      
                        <p>{{movie.ver}}<p/>
                        <p>主演:{{movie.star}}<p/>                
                        <p>{{movie.showInfo}}<p/>                  
                    </router-link>
                </div>
            </li>
        </ul>
        <div v-show="loadingShow" class="loading">
            <img src="../../assets/img/loading.gif"/>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      movieArr: [],
      loadingShow: true
    };
  },
  mounted() {
    //   防止测试过多请求
    this.loading();
    var that = this;
    //   监听滚动条事件
    $(window).scroll(function() {
      var windowHeight = $(this).height();
      var windowScroll = $(this).scrollTop();
      var documentHeight = $(document).height();
      if (windowHeight + windowScroll >= documentHeight) {
        that.loadingShow = true;
        that.loading();
      }
    });
  },
  methods: {
    loading() {
      // 发送请求，请求数据
      if (this.movieArr.length < 60) {
        Axios.get(
          API_PROXY +
            "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=" +
            this.movieArr.length
        )
          .then(res => {
            // console.log(res);
            this.loadingShow = false;
            this.movieArr = this.movieArr.concat(res.data.data.movies);
          })
          .catch();
      } else {
        this.loadingShow = false;
      }
    }
  }
};
</script>

<style scoped>
.movie-list {
  margin: 1rem 0;
}
.movie {
  display: flex;
  padding: 0.2rem;
  border-bottom: 1px solid #ccc;
}
.movie-img {
  flex-grow: 1;
  width: 0;
  margin-right: 0.2rem;
}
.movie-info {
  flex-grow: 2;
  width: 0;
}
.movie-info a {
  color: #000;
}
.movie-nm {
  font-weight: bold;
}
.loading {
  text-align: center;
}
</style>
