<template>
<div class="school">
    <h4>学校名称：{{name}}</h4>
    <h4>学校地址：{{address}}</h4>
    <button @click="test">点他</button>
    <hr>
</div>
  
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'尚硅谷',
            address:'北京',
        }
    },
    props:['getschoolname'],
    methods: {
        test(){
            this.getschoolname(this.name)
        },
        //兄弟组件传递数据
        demo(data){
            console.log('拿到兄弟的东西',data)
        }
    },
    mounted() {
        this.$bus.$on('demo',this.demo)
    },
    //公用的bus 用完解绑
    beforeDestroy() {
        this.$bus.$off('demo')
    },

}
</script>

<style>

</style>