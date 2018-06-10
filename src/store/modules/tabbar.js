import setting from '../../setting'

// initial state
// shape: [{ id, quantity }]
const state = {
    tabbar:setting.tabbar,
    activeTab:0
}

// getter 从state派生出一些状态.
//如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。
const getters = {
  activeTabPage: state => state.activeTab,
  tabbarList: state => state.tabbar
}

// actions
const actions = {
  
}

// mutations
const mutations = {
	CHANGETAB:(state,index)=>{
      state.activeTab = index;
	},
	INITABPAGE:function(state){
		let currentPath = this.$route.path;
    //console.log(this.$route.path)
    state.tabbar.list.map((item,key)=>{
      if(item.pagePath==currentPath){
        state.activeTab = key;
        return;
      }
    })
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}