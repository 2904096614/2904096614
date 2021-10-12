<template>
  <div>
      <button @click="sendAjax">点他</button>
  </div>
</template>

<script>
import axios from 'axios'
// 发送Ajax请求  使用axios
export default {
    name:'demo1',
    methods: {
        sendAjax(){
            axios.get("http://localhost:8080/a.txt").then(
                response=>{
                    console.log('1111111111111',response.data)
                },
                error=>{
                    console.error(error.message);
                }
                
            )
        }
    },
}
</script>

<style>

</style>