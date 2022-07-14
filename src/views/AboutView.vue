<template>
  <div class="about">
    <h1 class="ml-auto text-2xl font-bold"> List of Jock Play</h1> <br>
    <h4 v-for="(jock,idx) in jockes" :key="idx"> 
      <span>{{idx+1}}</span>
      <span>{{jock}}</span>
    </h4>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters({jockes:'getallJockes'})
    // jockes(){
    //   return this.$store.getters.getallJockes;
    // }
  }
}
</script>
