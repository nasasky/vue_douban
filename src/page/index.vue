<template>
  <div id="main">
    <keep-alive>
      <router-view id="section">
      </router-view>
    </keep-alive>
    <v-tabbar></v-tabbar>
  </div>
</template>

<script>
import vTabbar from "@/components/tabbar";
export default {
  name: "HelloWorld",
  components: {
    "v-tabbar": vTabbar
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<style scoped>
	#main {
		width:100%;
		height: 100%;
		display: flex;
		flex-direction:column;
	}
	#section{
		flex:1;
    overflow-y:auto;
    overflow-x:hidden;
	}
</style>

