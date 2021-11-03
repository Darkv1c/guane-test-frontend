import { createStore } from "vuex";
import { character, episode } from "./modules";
import axios from 'axios'
axios.defaults.baseURL = "https://rickandmortyapi.com/api"

export default createStore({
  state: {
    isLoading: false,
    currentPage: 1
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value
    },
    setCurrentPage(state, page) {
      state.currentPage = page
    }
  },
  modules: {
    character,
    episode
  },
});
