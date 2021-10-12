//搭建vuex环境
import Vue from 'vue'
import Vuex from 'vuex'
import countAbout from './count'
import personAbout from './person'
//使用vuex插件
Vue.use(Vuex)

//保存并暴露store
export default new Vuex.Store({
    // actions,
    // mutations,
    // state,
    // getters
    modules:{
        countAbout,
        personAbout
    }
})


//普通方法



// //actions 响应组件中用户的动作、处理逻辑
// const actions = {
//     jiaodd(context,value){
//         if (context.state.sum%2) {
//             context.commit('JIA',value)
            
//         }
//     },
//     jiawait(context,value){
//         setTimeout(() => {
//             context.commit('JIA',value)
//         }, '300');
//     }
// }
// //mutations 对象 处理state中的数据
// const mutations = {
//     JIA(state,value){
//         state.sum += value
//     },
//     JIAN(state,value){
//         state.sum -= value
//     },
//     ADDPERSON(state,value){
//         state.personlist.unshift(value)
//     }
// }
// //state对象保存具体数据
// const state = {
//     sum:6,
//     school:'尚硅谷',
//     address:'北京',
//     personlist:[
//         {'id':'001','name':'小王'},
//         {'id':'002','name':'小高'}
//     ]
// }
// //getter对象处理数据
// const getters ={
//     bigsum(state){
//         return state.sum*10
//     }
// }
