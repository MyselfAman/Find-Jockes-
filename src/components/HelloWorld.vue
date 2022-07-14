<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p class="ml-auto text-2xl font-bold"> Jock Play</p>
          <p class=" ">{{jock}}</p>
        </div>
        <div class="pt-8 text-base font-semibold leading-7">
          <button @click="addJock" class="px-4 py-2 bg-indigo-600 rounded-lg text-white hover:bg-white hover:text-indigo-600">Add Jock</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: 'HelloWorld',
  data(){
    return{
      // jock:""
    }
  },
  methods:{
    ...mapActions({addJock:'setCurrentJock'})
    // addJock(){
    //   this.$store.dispatch("setCurrentJock")
    // }
  },
  computed: {
    ...mapGetters({jock:'getCurrentJock' })
    // jock(){
    //   return this.$store.getters.getCurrentJock;
    // }
  }
  // mounted(){
  //   this.jock = this.$store.getters.getCurrentJock;
  //   console.log(this.jock);


  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
