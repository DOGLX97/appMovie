import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
    title:'Movie',
    photoList:[]
};
const mutations={
    changeTitle(state,status){
        state.title=status;
    },
    setPhotoList(state,status){
        state.photoList=status;
    }
}
const actions={
    changeTitle:({commit},status)=>commit('changeTitle',status),
    setPhotoList:({commit},status)=>commit('setPhotoList',status)
};
export default new Vuex.Store({
    state,
    mutations,
    actions
})