<template>
  <div class="student">
      <h4>学生姓名：{{name}}</h4>
      <h4>学生年龄：{{age}}</h4>
      <button @click="test">接着点</button>
      <button @click="test1">接着点1</button>
      <hr>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:'jojo',
            age:18,
        }
    },
    methods: {
        test(){
            this.$emit('jojo',this.name)
        },
        test1(){
            this.$bus.$emit('demo',this.name)
        }
    },
}
</script>

<style>

</style>