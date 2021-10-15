//vuex 模块儿化
//求和模块
export default{
    namespaced:true,  //开放命名空间
    actions :{
        jiaodd(context,value){
            if (context.state.sum%2) {
                context.commit('JIA',value)
                
            }
        },
        jiawait(context,value){
            setTimeout(() => {
                context.commit('JIA',value)
            }, '300');
        }
    },
    mutations :{
        JIA(state,value){
            state.sum += value
        },
        JIAN(state,value){
            state.sum -= value
        },
    },
    state : {
        sum:6,
        school:'尚硅谷',
        address:'北京',
    },
    getters :{
        bigsum(state){
            return state.sum*10
        }
    }


}