<template>
  <div>
      <router-link class="aaaa" to="/schstu/school">学校相关</router-link>
      <router-link class="aaaa" to="/schstu/stu">学生相关</router-link>
      <router-link class="aaaa" active-class="active" to="/schstu/cs">测试组件</router-link>
      <div>
          <router-view></router-view>
      </div>
  </div>

</template>

<script>
export default {
    name:'Schstu',
}
</script>

<style scoped>
.aaaa{
    background-color: darkgray;
    border: rgb(7, 7, 7) 1px solid;
    margin-left: 5px;
}

</style>