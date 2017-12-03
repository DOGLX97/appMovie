<template>
  <div class="photo-wall">
    <ul>
      <li v-for="(photo,index) in photoArr" :key="index" class="photo-wall-img">
        <router-link :to="'/photo/photoDetail/'+index">
          <img :src="photo.src" alt="图片加载失败">          
        </router-link>
      </li>
    </ul>
    <div class="loading" v-show="isShow">
      <img src="../../assets/img/loading.gif" alt="">
    </div>
    <div v-show="isTip" class="tip">
      <span>数据已全部加载完毕！</span>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      photoArr: [],
      list:[],
      isShow:true,
      isTip:false
    };
  },
  mounted() {
    this.loadingImg(); 
    // 监听滚动条事件，滚动条到底加载数据      
    window.onscroll=()=>{
      let clientHeight=document.documentElement.clientHeight;
      let scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeight=document.documentElement.scrollHeight;
      // console.log(clientHeight,scrollTop,scrollHeight);
      if(clientHeight+scrollTop==scrollHeight){
        this.isShow=true;
        if(!this.isTip){
          this.loadingImg();        
        }else{
          this.isShow=false;        
        }
      }
    }    
  },
  methods:{
    loadingImg(){
    //无可用的图片远程服务端口，请求本地图片数据json文件   
    //采用假分页代替异步分页，实际一次返回所有数据，
    //通过数组分隔slice函数的方式从所有数据中截取部分数据返回  
      let url = "/static/data/photodata.json";
      Axios.get(url)
        .then(res => {
          this.isShow=false;          
          this.list=res.data.photoData;
          let data=this.list.slice(this.photoArr.length,this.photoArr.length+10);
          if(data.length<10){
            this.isTip=true;
          }
          this.photoArr=this.photoArr.concat(data);      
          this.$store.dispatch('setPhotoList',res.data.photoData);  
        })
        .catch(res => {});
    }
  }
};
</script>

<style scoped>
.photo-wall {
  margin: 1rem 0;
}
.photo-wall-img{
  float: left;
  width: 50%;
}
.photo-wall-img a{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.photo-wall-img img{
    width: 100%;
    height:5.5rem;
}
.loading{
  text-align: center;
}
.tip{
  text-align: center;
  color: #f0f;
}
</style>
