<template>
  <div>
      <button @click="sendAjax">点他看天气状况</button>
      <p>{{d}}</p>
  </div>
</template>

<script>
import axios from 'axios'
// 发送Ajax请求  使用axios
export default {
    name:'demo1',
    data() {
        return {
            d:''
        }
    },
    methods: {
        sendAjax(){
            axios.get("http://wthrcdn.etouch.cn/weather_mini?citykey=101280601").then(
                response=>{
                    console.log('1111111111111',response.data.data.ganmao)
                    this.d = response.data.data.ganmao
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