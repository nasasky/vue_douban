<template>
  <div id="v-tabbar">
    <div 
      
      class="v-tabbar-item"  
      v-for="(item,index) in tabbar.list"
      v-bind:key="index"
     
      @click="changeTab(index,item.pagePath)"
      :style="{color: activeTab==index ? tabbar.selectedColor : ''}"
    >
    
      <img class="v-tabbar-icon"  :src="index==activeTab ?item.selectedIconPath : item.iconPath"></img>
      <div class="v-tabbar-text" v-text="item.text"></div>
    </div>
  </div>
</template>
<style>

</style>

<script>

import {mapState,mapActions} from "vuex";
export default{
  name:"v-tabbar",
  data(){
    return{

    }
  },
  mounted(){
    this.initTabPage(); 
  },
  computed:{
    ...mapState({
      tabbar:state => state.tabbar.tabbar,
      activeTab:state => state.tabbar.activeTab
    })
  },
  methods:{
    changeTab(currentIndex,path){
      this.$store.commit('CHANGETAB',currentIndex);
      this.$router.replace({ path: path, query: {}});
    },
    initTabPage(){
      let currentPath = this.$route.path;
      //console.log(this.$route.path)
      this.tabbar.list.map((item,key)=>{
        if(item.pagePath==currentPath){
          this.$store.commit('CHANGETAB',key);
          return;
        }
      })      
    }
  }

}
</script>



