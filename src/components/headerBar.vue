<template>
  <div class="headerBar">
      <div class="backIcon" @click="goback">&lt;</div>
      <div class="headerTitle" v-text="title"></div>
      <div class="backIcon"></div>
  </div>
  
</template>

<script>
import vTabbar from "./tabbar";
export default {
  name: 'HeaderBar',
  props:{
    title: { 
      type: String, 
      default: ''
    },
    bg:{
      type: String,
      default:''
    }
  },
  methods:{
    goback(){
      this.$router.back(-1);
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerBar{
  width:100%;
  height: 1rem;
  background:#42bb54;
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  position: fixed;
  top:0px;
  left:0px;
  z-index:999;
  overflow:hidden;
}

.headerTitle{
  flex:1;
  font-size:15px;
  color:#fff;
  text-align:center;
}
.backIcon{
  width:1rem;
  height:100%;
  color:#fff;
  font-size:20px;
  display: flex;
  align-items:center;
  justify-content:center;
}

</style>
