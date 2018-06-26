import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'
// import user from './modules/user'
// import permission from './modules/permission'
// import getters from './getters'

Vue.use(Vuex)

const state = {      //存放常量,状态对象
    count:5
}

const mutations={    //管理常量
    add(state){
        state.count+=1;
    },
    reduce(state){
        state.count-=1;
    }
}

const store = new Vuex.Store({
	state,
	mutations,
  	// modules: {
	  //   app,
	  //   user,
	  //   permission
  	// },
    // getters
})

// const store = new Vuex.Store({
// 	state: {
// 		count:1
// 	},
// 	mutations: {
// 		add(state){
// 	        state.count+=1;
// 	    },
// 	    add1: (state)=>{ state.count+=1; },
// 	    add2: state => state.count+=1 ,
// 	    reduce(state){
// 	        state.count-=1;
// 	    }
// 	}
// })

export default store
