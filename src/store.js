import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        title: '',
        year:Number
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
        },
       /* getYear(state, payload) {
            state.year = payload;
        }*/
    },
    actions:{
        sendingTitle({commit}, payload) {
            commit("getTitle",payload);
        },
       /* sendingYear({commit}, payload) {
            commit("getYear",payload);
        }*/

    }
});