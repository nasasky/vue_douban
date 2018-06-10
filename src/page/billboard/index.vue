<template>
  <div class="pageContainer">
    <div class="header_section">
      <router-link class="search_section" to="">
        <span></span>
      </router-link>
    </div>
    <section class="type_section deal_margin">
      <div class="section_title">
        <h1>
          <span class="section_title_left">近期上映</span>
          <router-link class="section_title_right" :to="{name:'MovieBill',params:{type:'in_theater'}}">更多&gt;</router-link>
        </h1>
      </div>
      <div class="movie_list">
        <scroll-view scrollX>
            <ul class="scrollContainer" >
              <li class="mianContent"  v-for="(item,index) in in_theater_list" :class="index==0 ? 'firstItem': (index==in_theater_list.length-1 ? 'lastItem':'')" >
                <router-link tag="div" class="mainWrap" :to='{name:"ProgramDetail", params:{ id:item.id } }'>
                  <img class="mainPic" :src="item.images.medium" alt="">
                  <div class="mianTitle" v-text="item.title"></div>
                  <div class="mainRating">
                    <span class="light_on" v-for="current in Math.round(item.rating.average/2)">&#9733;</span>
                    <span class="light_off" v-for="current in (5-Math.round(item.rating.average/2))">&#9733;</span>
                    <span class="rating_text" v-text="item.rating.average.toFixed(1)"></span>
                  </div>
                </router-link>
              </li>
            </ul>
        </scroll-view>
      </div> 
    </section>
    <section class="type_section">
      <div class="section_title">
        <h1>
          <span class="section_title_left">即将上映</span>
          <router-link class="section_title_right" :to="{name:'MovieBill',params:{type:'commin_soon'}}">更多&gt;</router-link>
        </h1>
      </div>
      <div class="movie_list">
        <scroll-view scrollX>
            <ul class="scrollContainer" >
              <li class="mianContent"  v-for="(item,index) in comming_soon_list" :class="index==0 ? 'firstItem': (index==comming_soon_list.length-1 ? 'lastItem':'')" >
                 <router-link tag="div" class="mainWrap" :to='{name:"ProgramDetail", params:{ id:item.id } }'>
                  <img class="mainPic" :src="item.images.medium" alt="">
                  <div class="mianTitle" v-text="item.title"></div>
                  <div class="mainRating">
                    <span class="light_on" v-for="current in Math.round(item.rating.average/2)">&#9733;</span>
                    <span class="light_off" v-for="current in (5-Math.round(item.rating.average/2))">&#9733;</span>
                    <span class="rating_text" v-text="item.rating.average.toFixed(1)"></span>
                  </div>
                </router-link>
              </li>
            </ul>
        </scroll-view>
      </div> 
    </section>
    <section class="type_section">
      <div class="section_title">
        <h1>
          <span class="section_title_left">热门电视</span>
          <router-link class="section_title_right" :to="{name:'MovieBill',params:{type:'tv'}}">更多&gt;</router-link>
        </h1>
      </div>
      <div class="movie_list">
        <scroll-view scrollX>
            <ul class="scrollContainer" >
              <li class="mianContent"  v-for="(item,index) in hot_tv_list" :class="index==0 ? 'firstItem': (index==hot_tv_list.length-1 ? 'lastItem':'')" >
                 <router-link tag="div" class="mainWrap" :to='{name:"ProgramDetail", params:{ id:item.id } }'>
                  <img class="mainPic" :src="item.cover" alt="">
                  <div class="mianTitle" v-text="item.title"></div>
                  <div class="mainRating">
                    <span class="light_on" v-for="current in Math.round(item.rate/2)">&#9733;</span>
                    <span class="light_off" v-for="current in (5-Math.round(item.rate/2))">&#9733;</span>
                    <span class="rating_text" v-text="parseFloat(item.rate).toFixed(1)"></span>
                  </div>
                </router-link>
              </li>
            </ul>
        </scroll-view>
      </div> 
    </section>
    <section class="type_section">
      <div class="section_title">
        <h1>
          <span class="section_title_left">热门综艺</span>
          <router-link class="section_title_right" :to="{name:'MovieBill',params:{type:'program'}}">更多&gt;</router-link>
        </h1>
      </div>
      <div class="movie_list">
        <scroll-view scrollX>
            <ul class="scrollContainer" >
              <li class="mianContent"  v-for="(item,index) in hot_program" :class="index==0 ? 'firstItem': (index==hot_program.length-1 ? 'lastItem':'')" >
                 <router-link tag="div" class="mainWrap" :to='{name:"ProgramDetail", params:{ id:item.id } }'>
                  <img class="mainPic" :src="item.cover" alt="">
                  <div class="mianTitle" v-text="item.title"></div>
                  <div class="mainRating">
                    <span class="light_on" v-for="current in Math.round(item.rate/2)">&#9733;</span>
                    <span class="light_off" v-for="current in (5-Math.round(item.rate/2))">&#9733;</span>
                    <span class="rating_text" v-text="parseFloat(item.rate).toFixed(1)"></span>
                  </div>
                </router-link>
              </li>
            </ul>
        </scroll-view>
      </div> 
    </section>

    <section class="type_section">
      <div class="section_title">
        <h1>
          <span class="section_title_left">精选榜单</span>
        </h1>
      </div>
      <div class="billBoard_list">
        <ul class="billScrollContainer" >
          <li class="bill_item first_bill_item">
            <div style="width:100%;">
              <h4>top250</h4>
              <p>好评电影</p>
            </div>
          </li>
          <li class="bill_item second_bill_item">
            <div style="width:100%;">
              <h4>北美榜</h4>
              <p>北美票房榜</p>
            </div>
          </li>
          <li class="bill_item third_bill_item">
            <div style="width:100%;">
              <h4>新片榜</h4>
              <p>最新上映</p>
            </div>
          </li>
        </ul>
      </div> 
    </section>
  </div>
</template>
<style scoped>
.header_section{
  width:100%;
  height: 1.2rem;
  background:#42bb54;
  position: fixed;
  top:0;
  left:0px;
  z-index:99;
  display:flex
}
.search_section{
  flex:1;
  margin:0.3rem;
  height: 0.6rem;
  background:#fff;
  border-radius:5px;
}
.type_section{
  font-size:14px;
  margin:0.1rem 0px;
}
.deal_margin{
  padding-top:1.2rem;
}
.section_title{
  padding:0.2rem 0;
}
.section_title_left,.section_title_right{
  padding:0 0.15rem;
  text-decoration:none;
}
.section_title_right{
  color:#42bb54
}
.type_section h1{
  font-weight:normal;
  font-size:16px;
  line-height:1.5;
  border-left:4px solid #42bb54;
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
}
.movie_list{
  width:100%;
  height:3.89rem;
}
.billBoard_list{
  width:100%;
  height:2.5rem;
}
.billScrollContainer{
  white-space:nowrap;
  height:2.5rem;
  margin:0px;
  padding:0px;
  display: flex;
  flex-direction:row;
  flex-wrap:nowrap;
  list-style:none;
}
.bill_item{
  flex:1;
  height:100%;
  margin:0 0.15rem;
  display: flex;
  align-items:center;
  border-radius:5px;
  justify-content: center center;
  text-align:center;
  color:#fff;
}
.first_bill_item{
  background:linear-gradient(top, #fda636, #f9e2b9);
}
.second_bill_item{
  background:linear-gradient(top, #28b859, #c6ecd3);
}
.third_bill_item{
  background:linear-gradient(top, #9c5cdb, #e8d9f2);
}
.scrollContainer{
  white-space:nowrap;
  position:absolute;
  height:3.89rem;
  margin:0px;
  padding:0px;
  display: flex;
  flex-direction:row;
  flex-wrap:nowrap;
  list-style:none;
}
.mianContent{
  width:2.28rem;
  height:3.89rem;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
}
.mainWrap{
  width:2.08rem;
 height:3.89rem;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
}
.firstItem{
  margin-left:0.1rem;
}
.lastItem{
  margin-right:0.1rem;
}
.mainPic{
  width:2.08rem;
  height:3.02rem;
}
.mianTitle{
  text-overflow:ellipsis;
  overflow: hidden;
  white-space:nowrap;
}
.light_on{
  color:#fcb410
}
.light_off{
  color:#e4e4e4
}
.rating_text{
  color:#aaa;
}

</style>

<script>
import {mapState,mapMutations} from "vuex";
import ScrollView from "../../components/ScrollView"
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components:{
    "scroll-view":ScrollView
  },
  computed:{
    ...mapState({
      in_theater_list:state => state.movies.in_theater_list,
      comming_soon_list:state => state.movies.comming_soon_list,
      hot_tv_list:state =>state.movies.hot_tv_list,
      hot_program:state => state.movies.hot_program
    })
  },
  created(){
    this.$nextTick(()=>{
      // let scroll = new BScroll(this.$refs.scrollContent,{

      // })
      this.fetchData();
    })
  },
  methods:{
    fetchData(){
      this.$store.dispatch('get_theater_list',{start:0,count:10});
      this.$store.dispatch('get_comming_soon',{start:0,count:10});
      this.$store.dispatch('get_hot_tv_list',{type:"tv",tag:"热门",sort:"recommend",page_limit:10,page_start:0});
      this.$store.dispatch('get_hot_program_list',{range:"0,10",tags:"综艺",sort:"T",start:0});
      
    }
  }
};
</script>