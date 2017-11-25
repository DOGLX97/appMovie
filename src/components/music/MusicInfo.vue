<template> 
    <div class="music-info">
        <a-player :music="musics" ref="player"></a-player>
    </div>
</template> 
  
<script>
import Axios from "axios";
import VueAplayer from "vue-aplayer";
export default {
  data() {
    return {
        musics:[
            {
              title: 'Preparation',
              author: 'Hans Zimmer/Richard Harvey',
              url: 'http://devtest.qiniudn.com/Preparation.mp3',
              pic: 'http://devtest.qiniudn.com/Preparation.jpg',
              lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
            }
        ]
    };
  },
  components: {
    "a-player": VueAplayer
  },
  mounted() {
    let aplayer = this.$refs.player.control;
    aplayer.play();
    // let url1 =
    //   API_PROXY +
    //   "http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=&from=webapp_music&method=baidu.ting.song.play&songid=" +
    //   this.$route.params.song_id;
    // let url2 = "/static/musicdata.json";
    // Axios.get(url2)
    //   .then(res => {
    //     this.musics=this.musics.concat(res.data.songinfo);
    //     // console.log(res); 
    //     // console.log(this.music);       
    //   })
    //   .catch(function(res) {});
  }
};
</script>

  
<style scoped>
.music-info {
  margin: 1rem 0;
}
</style>
