<template>
  <div class="programDetail" v-if="movieDetail">
    <header-Bar title="电影" :bg="movieDetail.images ? movieDetail.images.large :''"></header-Bar>
    <section class="program_section">
      <div class="program_bg" :style="movieDetail.images ? 'background:url('+movieDetail.images.large+')':''"></div>
      <img class="progam_pic" v-if="movieDetail.images" :src="movieDetail.images.large" alt="">
    </section>
    <section class="progam_des">
      <div class="progam_top">
        <div class="progam_left">
          <h3 v-text="movieDetail.title"></h3>
          <p class="program_about">
            <span v-text="movieDetail.year"></span>
            <span v-for="item in movieDetail.genres" v-text="item"></span>
          </p>
          <p class="program_about" v-if="movieDetail.original_title">原名：<span v-text="movieDetail.original_title"></span></p>
          <p class="program_about" v-if="movieDetail.pubdates">上映时间：<span v-text="movieDetail.pubdates"></span></p>
          <p class="program_about" v-if="movieDetail.durations">片长：<span v-text="movieDetail.durations"></span> 分钟</p>
        </div>
        <div class="progam_right">
          <p class="program_about">豆瓣评分</p>
          <p class="program_mark" v-if="movieDetail.rating" v-text="movieDetail.rating.average"></p>
          <div class="mainRating" v-if="movieDetail.rating">
            <span class="light_on" v-for="current in Math.round(movieDetail.rating.average/2)">&#9733;</span><span v-for="current in (5-Math.round(movieDetail.rating.average/2))" class="light_off">&#9733;</span>
          </div>
          <p class="program_about" v-text="movieDetail.ratings_count+'人'"></p>
        </div>
      </div>
      <div class="program_bottom">
        <div class="wantTosee programCommon">相看</div>
        <div class="hasSeed programCommon">看过</div>
      </div>
    </section>
    <section class="program_channel">
      <p class="program_about">所属频道</p>
      <div class="program_channel_content">
        <div class="program_channel_item" v-for="item in movieDetail.genres" v-text="item">人性</div>
      </div>
    </section>
    <section class="program_content">
      <p class="program_about">简介</p>
      <p class="program_content_des" v-text="movieDetail.summary">
       
      </p>
    </section>
    <section class="program_actor" v-if="movieDetail.casts && movieDetail.casts.length>0">
      <p class="program_about ">影人</p>
      <div class="program_actor_content">
        <scroll-view scrollX>
            <ul class="scrollContainer" >
              <li class="mianContent" v-for="item in movieDetail.casts">
                 <router-link tag="div" class="mainWrap" to="">
                  <img class="mainPic"   :src="item.avatars && item.avatars.large ? item.avatars.large :'' " alt="" style="background:#ededed;">
                  <div class="mianTitle" v-text="item.name" ></div>
                </router-link>
              </li>
            </ul>
        </scroll-view>
      </div>
    </section>
    <section class="program_actor" v-if="movieDetail.photos && movieDetail.photos.length>0">
      <p class="program_about ">预告片/剧照</p>
      <div class="program_actor_content">
        <scroll-view scrollX>
            <ul class="scrollContainer" >
              <li class="mianContent"  v-for="item in movieDetail.photos">
                 <router-link tag="div" class="mainWrap" to="">
                  <img class="mainPic" v-if="item.image" :src="item.image" alt="">
                </router-link>
              </li>
            </ul>
        </scroll-view>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderBar from "../../components/headerBar";
import ScrollView from "../../components/ScrollView";
import {mapState,mapMutations} from "vuex";
export default {
  name: 'programDetail',
  components:{
    'header-Bar':HeaderBar,
    "scroll-view":ScrollView
  },
  data () {
    return {
      id: ''
    }
  },
  computed:{
    ...mapState({
      movieDetail:state => state.movies.movieDetail,
    })
  },
  mounted(){
    this.id=this.$route.params.id;
    this.$store.dispatch('clear_movies');
    this.$nextTick(()=>{
      this.fetchData(this.id);
    })
  },
  methods:{
    fetchData(id){
      this.$store.dispatch('get_program_detail',{id:id});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.programDetail{
  width:100%;
  height:100%;
  overflow-y:scroll;
  overflow-x:hidden;
}
.program_section{
  width:100%;
  height:6rem;
  overflow:hidden;
  position:relative;
}

.program_bg{
  width:100%;
  height:100%;
  filter:blur(2.5rem);
  background:url("http://img3.doubanio.com/view/photo/s_ratio_poster/public/p494268647.jpg") no-repeat;
  background-size:cover;
  display: flex;
  align-items:center;
  justify-content:center;
  
}
.progam_pic{
  width:2rem;
  height:3.2rem;
  position: absolute;
  top:50%;
  left:50%;
  margin-top:-1.1rem;
  margin-left:-1rem;
  z-index:998;
}

.progam_des,.program_channel,.program_content{
  display: flex;
  padding:0.15rem 0.6rem;
  font-size:15px;
  line-height:1.8;
  display: flex;
  flex-direction:column;
}
.program_actor{
  display: flex;
  font-size:15px;
  line-height:1.8;
  display: flex;
  flex-direction:column;
  box-sizing:content-box;
  margin-bottom:0.3rem;
}
.program_actor .program_about{
  padding:0.15rem 0.6rem;
}
.progam_des{
  padding-top:0.3rem;
}
.progam_des h3{
  font-size:18px;
  padding-bottom:0.2rem;
}
.program_mark{
  font-size:20px;
  font-weight:bold;
}
.progam_top{
  flex:1;
  display: flex;
  flex-direction:row;
  justify-content:space-between;
}
.progam_right{
  width:2.2rem;
  height:2.2rem;
  border:1px solid #ededed;
  border-radius:3px;
  box-shadow:2px 2px 5px #ededed;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  font-size:13px;

}
.program_about{
  color:#9b9c97;
}
.program_content_des{
  color:#4b4c47;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
.program_bottom{
  width:100%;
  height: 1rem;
  display: flex;
  flex-direction:row;
  margin:0.3rem 0 0 0;
}
.programCommon{
  display: flex;
  align-items:center;
  justify-content:center;
  border:1px solid #ffa542;
  border-radius:3px;
}
.wantTosee{
  flex:1;
  height:1rem;
  margin-right:0.2rem;
}
.hasSeed{
  flex:2;
}
.program_channel_content{
  padding:0.2rem 0px;
}
.program_channel_content,.program_actor_content{
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
}
.program_channel_item{
  padding:0 0.1rem;
  height:0.4rem;
  border:1px solid #66a377;
  color:#66a377;
  background:#eefaf0;
  margin-right:0.2rem;
  border-radius:0.2rem;
  display: flex;
  align-items:center;
  justify-content:center;
}
.program_actor_content{
  width:100%;
  height:3.5rem;
}
.program_actor_content .scrollContainer{
  white-space:nowrap;
  padding:0.15rem 0px;
  position:absolute;
  height:3.5rem;
  margin:0px;
  padding:0px;
  display: flex;
  flex-direction:row;
  flex-wrap:nowrap;
  list-style:none;
}
.program_actor_content .mianContent{
 width:1.88rem;
  height:3.5rem;
  margin-right:0.2rem;
}
.program_actor_content .mianContent:first-child{
  padding-left:0.6rem;
}
.program_actor_content .mianContent:last-child{
  margin-right:0px;
  padding-right:0.6rem;
}
.program_actor_content .mainWrap{
  width:1.88rem;
   height:3.5rem;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
}
.program_actor_content .mainPic{
  width:1.88rem;
  height:2.89rem;
}
.program_actor_content .mianTitle{
  text-align:center;
  white-space:nowrap;
  overflow : hidden;
  text-overflow: ellipsis;
}
.light_on{
  color:#fcb410
}
.light_off{
  color:#e4e4e4
}
</style>
