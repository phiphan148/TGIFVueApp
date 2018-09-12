import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      senator: [],
  },
  mutations: {
      setCurrentSenator(state, senator){
          this.state.senator = senator;
      }
  },
  actions: {}
});
