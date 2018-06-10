import API from '../../../api/index';
import * as types from "./mutationType";


export default {
  state: {
    init_loading: true,
    init_Success: false,
    init_error:false,
    init_errormsg:"",
    in_theater_list:[],
    comming_soon_list:[],
    hot_tv_list:[],
    hot_program:[],
    error:false,
    movieDetail:{}
  },
  getter:{

  },
  mutations:{
    MOVIE_THEATER_LIST:(state,data)=>{
      state.in_theater_list = data.in_theater_list;
    },
    MOVIE_FEATCH_ERROR:(state,data)=>{
      state.error=data.error
    },
    MOVIE_COMING_SOON:(state,data)=>{
      state.comming_soon_list = data.comming_soon_list;
    },
    HOT_TV_LIST:(state,data)=>{
      state.hot_tv_list = data.hot_tv_list
    },
    HOT_PROGRAM_LIST:(state,data)=>{
      state.hot_program = data.hot_program;
    },
    PROGRAM_DETAIL:(state,data)=>{
      state.movieDetail = data.movieDetail
    },
    Clear_MOVIES:(state,data)=>{
      state.movieDetail = {}
    }
  },
  actions:{
    get_theater_list({commit},params){
      API.in_theaters(params).then((res)=>{
        console.log(res)
        commit({
          type: types.MOVIE_THEATER_LIST,
          in_theater_list:res.data.subjects
        });
      },(error)=>{
        commit({
          type:types.MOVIE_FEATCH_ERROR,
          error:true
        })
      })
    },
    get_comming_soon({commit},params){
      API.coming_soon(params).then((res)=>{
        console.log(res);
        commit({
          type: types.MOVIE_COMING_SOON,
          comming_soon_list:res.data.subjects
        });
      },(error)=>{

      })
    },
    get_hot_tv_list({commit},params){
      API.hot_tv(params).then((res)=>{
        console.log(res);
        commit({
          type: types.HOT_TV_LIST,
          hot_tv_list:res.data.subjects
        });
      },(error)=>{

      })
    },
    get_hot_program_list({commit},params){
      API.hot_program(params).then((res)=>{
        console.log(res);
        commit({
          type: types.HOT_PROGRAM_LIST,
          hot_program:res.data.data
        });
      },(error)=>{

      })
    },
    get_program_detail({commit},params){
      API.get_program_detail(params).then((res)=>{
        console.log(res);
        commit({
          type:types.PROGRAM_DETAIL,
          movieDetail:res.data
        })
      },(error)=>{
  
      })
    },
    clear_movies({commit}){
      commit({
        type:types.Clear_MOVIES,
      })
    }
  }
}