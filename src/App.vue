<template>
  <div id="app">
      <!-- <transition  :name="transitionName" >  -->
        <router-view/>
      <!-- </transition>  -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      transitionName:"slide-left"
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      console.log(this.transitionName)
    }
  }
}
</script>

<style>
.slide-left-enter,.slide-right-leave-active {
    
    transform: translate(100%, 0);
    transition :all 0.25s linear ;
}
.slide-left-leave-active,
.slide-right-enter {
    transform: translate(-100%, 0);
    transition :all 0.25s linear;
}



/* .slide-left-enter, .slide-right-leave-active {
  transform :translate3d(0,0,0);
  
}
.slide-left-leave-active, .slide-right-enter {
  
  transition :all 0.2s linear;
  transform :translate3d(-100%,0,0)
} */
/* .slide-right-enter,.slide-right-enter-active{
  transform :translate3d(100%,0,0)
}
.slide-left{
  transition :all 0.2s linear;
  transform :translate3d(0,0,0)
} */
</style>
