import { createStore } from 'vuex'


const url = "https://icanhazdadjoke.com";
const headers = {Accept: "application/json"};

export default createStore({
  state: {
    currentJoke: "",
    allJockes: []
  },
  getters: {
    getCurrentJock: state => state.currentJoke,
    getallJockes: state =>  state.allJockes
  },
  mutations: { // this contains synthoronus functions
    setCurrentJock(state, payload){
      state.currentJoke = payload
      state.allJockes.push(payload)

    }
  },
  actions: { // to write asynchoronus function 
    async setCurrentJock(state){
      const jock = await fetch(url,{ headers });
      const j = await jock.json();
      state.commit("setCurrentJock",j.joke)
      console.log(j.joke);
      
    }
  },
  modules: {
  }
})
