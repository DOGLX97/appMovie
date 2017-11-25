<template> 
    <div class="music-info">
        <a-player :music="musicList" :autoplay="true" v-if="isShow" :showlrc="3"></a-player>
    </div>
</template> 
  
<script>
import Axios from "axios";
import VueAplayer from "vue-aplayer";
export default {
  data() {
    return {
        musicList:[],
        isShow:false
    };
  },
  components: {
    "a-player": VueAplayer
  },
  mounted() {
    //请求接口
    // let url1 =
    //   API_PROXY +
    //   "http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=&from=webapp_music&method=baidu.ting.song.play&songid=" +
    //   this.$route.params.song_id;
    // 接口不可用，请求本地json文件
    let url2 = "/static/data/musicdata.json";
    Axios.get(url2)
      .then(res => {
        let list=res.data.musicData;
        list.forEach(element => {
          let obj={
            title: element.title,
            author: element.author,
            url: element.src,
            img: element.musicImgSrc,
            lrc: '/static/'+element.lrc
          }
          // console.log(obj.lrc);              
          this.musicList.push(obj);
        }); 
        this.isShow=true;        
      })
      .catch(res => {});
  }
};
</script>

  
<style scoped>
.music-info {
  margin: 1rem 0;
}
</style>
