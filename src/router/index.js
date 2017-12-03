import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'
import MovieDiscuss from '@/components/movie/MovieDiscuss'
import Music from '@/components/music/Music'
import MusicType from '@/components/music/MusicType'
import MusicList from '@/components/music/MusicList'
import MusicInfo from '@/components/music/MusicInfo'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import PhotoWall from '@/components/photo/PhotoWall'
import PhotoDetail from '@/components/photo/PhotoDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/movie/movieList'
    }, {
      path: '/movie',
      component: Movie,
      redirect: '/movie/movieList',
      children:[
        {
          path: 'movieList',
          component: MovieList
        }, {
          path: '/movie/movieDetail/:movieId',
          component: MovieDetail
        }, {
          path: '/movie/movieDiscuss/:movieId',
          component: MovieDiscuss
        }
      ]
    }, {
      path: '/music',
      component: Music,
      redirect: '/music/musicType',
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
      component: Photo,
      redirect: '/photo/photoWall',
      children:[{
        path: 'photoWall',
        component: PhotoWall
      }, {
        path: '/photo/photoDetail/:index',
        component: PhotoDetail
      }]
    }
  ]
})
