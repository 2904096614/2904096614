<template>
    <div>
      <router-link class="aaaa" to="/vuexs/count">计数组件</router-link>
      <router-link class="aaaa" to="/vuexs/person">人员列表</router-link>
      <router-link class="aaaa" to="/vuexs/vxdemo">测试数据</router-link>
      <div>
          <router-view></router-view>
      </div>
  </div>

</template>

<script>
export default {
    name:'Vuexs'
}
</script>

<style scoped>
.aaaa{
    background-color: darkgray;
    border: rgb(7, 7, 7) 1px solid;
    margin-left: 5px;
}
</style>