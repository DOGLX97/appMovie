import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
    title:'Movie'
};
const mutations={
    changeTitle(state,status){
        state.title=status;
    }
}
const actions={
    changeTitle:({commit},status)=>commit('changeTitle',status)
};
export default new Vuex.Store({
    state,
    mutations,
    actions
})