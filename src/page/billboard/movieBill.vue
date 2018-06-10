<template>
  <div class="movieBill">
    <header-Bar title="近期上映"></header-Bar>
    <div class="movie_content">
      <scroll-view>
        <ul class="scrollWrap">
          <li class="movie_item">
            <div class="movie_item_content"></div>
          </li>
          <li class="movie_item">
            <div class="movie_item_content"></div>
          </li>
          <li class="movie_item">
            <div class="movie_item_content"></div>
          </li>
          <li class="movie_item">
            <div class="movie_item_content"></div>
          </li>
          <li class="movie_item">
            <div class="movie_item_content"></div>
          </li>
          <li class="movie_item">
            <div class="movie_item_content"></div>
          </li>
          <li class="movie_item">
            <div class="movie_item_content"></div>
          </li>
          <li class="movie_item">
            <div class="movie_item_content"></div>
          </li>
          <li class="movie_item">
            <div class="movie_item_content"></div>
          </li>
          <li class="movie_item">
            <div class="movie_item_content"></div>
          </li>
        
        </ul>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import HeaderBar from "../../components/headerBar";
import ScrollView from "../../components/ScrollView";
export default {
  name: 'MovieBill',
  components:{
    'header-Bar':HeaderBar,
    "scroll-view":ScrollView
  },
  data () {
    return {
     type:''
    }
  },
  mounted(){
    this.type = this.$route.params.type;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movieBill{
  width:100%;
  height:100%;
}
.movie_content{
  width:100%;
  height:100%;
  margin-top:1rem;
  display:flex;
}
.scrollWrap{
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: auto;
}
.movie_item{
  box-sizing: border-box;
  padding: 10px;
  counter-increment: item-counter;
}
.movie_item_content{
  position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 220px;
    font-size: 40px;
    color: #f60;
    background: #f60;
    box-sizing: border-box;
}
</style>
