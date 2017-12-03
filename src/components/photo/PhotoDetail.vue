<template>
  <v-touch class="photo-detail clearfix" :style="styleObj" @tap="tap" @swipeleft="swipeLeft" @swiperight="swipeRight">
      <!-- {{$route.params.index}} -->
  </v-touch>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            nowIndex:0
        }
    },
    mounted(){
        // console.log(this.$store.state.photoList);
        // this.styleObj={
        //     background: 'url('+this.$store.state.photoList[this.$route.params.index].src+') center center/contain'
        // }
        this.nowIndex=this.$route.params.index;        
    },
    computed:{
        styleObj(){
            return {
                background: '#000 url('+this.$store.state.photoList[this.nowIndex].src+') no-repeat center center/contain'                
            }
        }
    },
    methods:{
        tap(){
            this.$router.go(-1);
        },
        swipeLeft(){
            // console.log(this.$store.state.photoList.length);
            this.nowIndex++;
            if(this.nowIndex==this.$store.state.photoList.length){
                this.nowIndex=0;
            }
        },
        swipeRight(){
            // console.log('right');   
            this.nowIndex--;
            if(this.nowIndex==-1){
                this.nowIndex=this.$store.state.photoList.length-1;
            }         
        }
    }
}
</script>

<style scoped>
@import '../../assets/css/common.css';

.photo-detail{
    margin: 1rem 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
}
</style>
