//vue共享数据实例
<template>
  <div>
      <h3>人员列表</h3>
       <h4 style="color:red">上方的和为  {{sum}}</h4>
       <h4 style="color:red">第一个名字是  {{firstname}}</h4>
      <input type="text" placeholder="请输入名字" v-model="name">
     
      <button @click="addperson">添加</button>
      <button @click="addwang">添加个姓王的</button>
      <button @click="addsj">随机添加</button>
      <ul>
          <li v-for="p in personlist" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
export default {
    name:'Person',
    data() {
        return {
            name :""
        }
    },
    computed: {
        //不简写形式
        sum(){
            return this.$store.state.countAbout.sum
        },
        personlist(){
            return this.$store.state.personAbout.personlist
        },
        firstname(){
            return this.$store.getters['personAbout/firstname']
        }
        // ...mapState('personAbout',['personlist']),
        // ...mapState('countAbout',['sum']),
    },
    methods: {
        // <button @click="addperson({'id':'009','name':name})">添加</button>
        // ...mapMutations({'addperson':'ADDPERSON'})       
        addperson(){
            const person = {id:'0050',name:this.name}
            this.$store.commit('personAbout/ADDPERSON',person)
            this.name=''
        },
        addwang(){
            const wang ={id:'007',name:this.name}
            this.$store.dispatch('personAbout/addwang',wang)
            this.name=''
        },
        //Ajax方法
        addsj(){
            this.$store.dispatch('personAbout/addajax')
        }
    },
}
</script>

<style>

</style>