import Vue from "vue";
import axios from 'axios'

//Vue.$http.defaults.timeout = 6000

// Add a request interceptor



 export default {
   in_theaters(params){
      return axios.post("/api/movie/in_theaters",params)
   },
   coming_soon(params){
     return axios.post("/api/movie/coming_soon",params)
   },
   hot_tv(params){
     return axios.get("/movie/search_subjects?type="+params.type+"&tag="+params.tag+"&sort="+params.sort+"&page_limit="+params.page_limit+"&page_start="+params.page_start)
   },
   hot_program(params){
    return axios.get("/movie/new_search_subjects?range="+params.range+"&tags="+params.tags+"&sort="+params.sort+"&start="+params.start)
   },
   get_program_detail(params){
    return axios.post("/api/movie/subject/"+params.id)
   }
 }