<template>
  <div>
      <div>
      <router-link class="aaaa" to="/dhgd/donghua">动画</router-link>
      <router-link class="aaaa" to="/dhgd/guodu">过渡</router-link>
      <router-link class="aaaa" active-class="active" to="/dhgd/dsanf">第三方动画</router-link>
      <div>
          <router-view></router-view>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    name:'Dhgd'
}
</script>

<style scoped>
.aaaa{
    background-color: darkgray;
    border: rgb(7, 7, 7) 1px solid;
    margin-right: 5px;
    margin-bottom: 15px;
}
</style>