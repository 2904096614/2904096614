// vuex实例求和案例
<template>
  <div>
      <h2>得到和结果：{{ sum }}</h2>
      <!-- 简写用法 -->
      <h3>结果放大10倍：{{ bigsum}}</h3>
      <h4>学校：{{ school}}，地址：{{address}}</h4>
      <h4 style="color=red">下面人员的个数为{{personlist.length}}</h4>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="jia(n)">+</button>
      <!-- 简写 -->
      <button @click="jian(n)">-</button>
      <button @click="jiaodd(n)">奇数加</button>
      <!-- 简写 -->
      <button @click="jiawait(n)">等会儿加</button>

  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
    name:'Count',
    data() {
        return {
            n:1,
           
        }
    },
    //数据精简写法，标签精简   mapState  mapGetters  写在计算属性中
    computed:{
        //第一种对象形式 可以写自定义的数据名字
        ...mapState('countAbout',{school:'school',address:'address',sum:'sum'}),
        ...mapState('personAbout',{personlist:'personlist'}),
        // 第二种数组形式  要与index.js中的数据名字保持一致
        ...mapGetters('countAbout',['bigsum']),
    },
    methods: {

        // jia(){
        //     this.$store.commit('JIA',this.n)
        // },
        //mapMutations简写 参数在标签内传递
        // jian(){
        //     this.$store.commit('JIAN',this.n)
        // },
        ...mapMutations('countAbout',{'jian':'JIAN',jia:'JIA'}),
        /* ****************************************** */
        // jiaodd(){
        //     this.$store.countAbout.dispatch('jiaodd',this.n)
        // },
        //mapActions简写 参数在标签内传递
        // jiawait(){
        //     this.$store.dispatch('jiawait',this.n)
        // }
        ...mapActions('countAbout',['jiawait','jiaodd'])
    },


}
</script>

<style scoped>
button{
    margin-left: 5px;
}
</style>