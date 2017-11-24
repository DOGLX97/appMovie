import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'
import Music from '@/components/music/Music'
import MusicType from '@/components/music/MusicType'
import MusicList from '@/components/music/MusicList'
import MusicInfo from '@/components/music/MusicInfo'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/movie/movieList'
    }, {
      path: '/movie',
      component: Movie,
      children:[
        {
          path: 'movieList',
          component: MovieList
        }, {
          path: '/movie/movieDetail/:movieId',
          component: MovieDetail
        }
      ]
    }, {
      path: '/music',
      component: Music,
      children:[{
        path: 'musicType',
        component: MusicType
      }, {
        path:'/music/musicList/:type',
        component: MusicList
      },{
        path:'/music/musicInfo/:album_id',
        component: MusicInfo
      }]
    }, {
      path: '/book',
      component: Book
    }, {
      path: '/photo',
      component: Photo
    }
  ]
})
