import { createStore } from "vuex";
import { character } from "./modules/character";


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
    character
  },
});
