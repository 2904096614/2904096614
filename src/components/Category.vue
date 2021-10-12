<template>
  <div>
      <h2>{{title}}分类</h2>

      <!-- 正常写法 -->
      <!-- <ul>
          <li v-for="(data,index) in datalist" :key="index">{{data}}</li>

      </ul> -->
      <!-- 插槽写法 -->
      <slot name="center">没有用到时显示</slot>
      <slot name="footer">没有用到时显示2</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title','datalist']

}
</script>

<style scoped>
div{
    background-color: skyblue;
    width: 200px;
    height: 300px;

}
h2{
    text-align: center;
    background-color: tomato;
}
</style>