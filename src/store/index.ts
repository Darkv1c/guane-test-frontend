import { createStore } from "vuex";
import { character } from "./modules/character";


export default createStore({
  state: {
    isLoading: false
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value
    }
  },
  modules: {
    character
  },
});
