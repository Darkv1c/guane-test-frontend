import {Commit} from 'vuex'
import axios from 'axios'

type iState = {
    characterList: [],
    currentCharacter: {[key:string]:any}
}

const state:iState = {
    characterList: [],
    currentCharacter: {}
}

export default {
    namespaced: true,
    state,
    mutations: {
        setCharacterList(state:iState, value:[]) {
            state.characterList = value
        },
        setCurrentCharacter( state:iState, value:{[key:string]:any} ) {
            state.currentCharacter = value
        }
    },
    actions: {
        async getCharacterList( {commit}:{commit:Commit}, page:number ) {
            await axios.get('/character/?page=' + page)
            .then(response => commit('setCharacterList', response.data))
            .catch(error => {
                commit('setCharacterList', [])
                console.log(error)
            })
        },
        async getCharacter( {commit}:{commit:Commit}, id:number ) {
            await axios.get('/character/' + id)
            .then(response => commit('setCurrentCharacter', response.data))
            .catch(error => {
                commit('setCurrentCharacter', {})
                console.log(error)
            })
        }
    }
}