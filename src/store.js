import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        title: '',
        //year:Number
    },
    getters:{
        title: state => {
            return state.title
        },
        year: state=> {
            return state.year
        }
    },
    mutations: {
        getTitle(state, payload) {
            state.title = payload;
        }
    }
});