import axios from 'axios'
export default{
    namespaced:true,
    actions:{
        addwang(context,value){
            if (value.name.indexOf('王')===0) {
                context.commit('ADDPERSON',value)
            }else{
                alert('得姓王哦')
            }
        },
        addajax(context){
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response=>{
                    context.commit('ADDPERSON',{'id':'0033',name:response.data})
                },
                error=>{
                    console.log(error.message)
                }

            )
        }

    },
    mutations:{
        ADDPERSON(state,value){
            state.personlist.unshift(value)
        }
    },
    state:{
        personlist:[
            {'id':'001','name':'小王'},
            {'id':'002','name':'小高'}
        ]
    },
    getters:{
        firstname(state){
            return state.personlist[0].name
        }
    }
}