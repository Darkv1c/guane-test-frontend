import {Commit} from 'vuex'
import axios from 'axios'

type iState = {
    episodeList: [],
}

const state:iState = {
    episodeList: [],
}

export default {
    namespaced: true,
    state,
    mutations: {
        setEpisodeList(state:iState, value:[]) {
            state.episodeList = value
        },
    },
    actions: {
        async getEpisodeList( {commit, state}:{commit:Commit, state:iState}, episodeNumberList:[] ) {
            commit('setEpisodeList', [])
            for (let i=0; i < episodeNumberList.length; i++){
                await axios.get('/episode/' + episodeNumberList[i])
                .then(response => commit('setEpisodeList', [...state.episodeList, response.data]))
                .catch(error => {
                    commit('setEpisodeList', [])
                    console.log(error)
                })
            }
        },
    }
}