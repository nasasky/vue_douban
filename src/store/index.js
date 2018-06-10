import Vue from "vue";
import Vuex from "vuex";
import tabbar from "./modules/tabbar";
import movies from "./modules/movies";
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules:{
        tabbar,
        movies
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})