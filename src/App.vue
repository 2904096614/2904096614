<template>
  <div class="app">
    
    <!-- 通过传递方法子组件props接受实现子传父-->
    <School :getschoolname="getschoolname"/>
    <!-- 通过v-on自定义事件实现子传父 -->
    <Student @jojo='getstudentname'/>
    <Test/>
    <Test1/>
    <Test2/>
    <demo1/>
    <!-- 插槽 

     具名插槽 slot标签带有name属性，使用时要在标签内加slot=’name‘ 
     一个插槽内插入多个元素可用div包裹在div中添加name属性
     也可以用 <template v-slot:center> 不会添加多余的div
       vue2.6提出    v-slot:name属性值
     
     作用域插槽
     适用于数据在子组件中父组件要用子组件中的数据 data在category.vue中 ，app组件要用data
     在cate中的插槽中  <slot :data='data' name='name'/>
     
     app.vue中使用必须加template标签
     <template scope="renyi-name" v-slot:name>
       使用数据时     renyi-name.data
       <li slot="name" v-for="(g,index) in renyi-name.data" :key="index"></li>
      </template>
     -->
    <div class="cate">
    <category title="食物" :datalist="food">
      <template v-slot:center>
        <img  src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">    
      </template>
      
    </category>
    <category title="游戏" :datalist="play">
      <ul>
				<li slot='center' v-for="(g,index) in play" :key="index">{{g}}</li>
			</ul>
    </category>
    <category title="电影" :datalist="movies">
      <video slot='center' controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </category>
    </div> 
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
//动画
import Test from './components/Test.vue'
//过度
import Test1 from './components/Test1.vue'
//第三方动画
import Test2 from './components/Test2.vue'
//Ajax
import demo1 from './components/demo1.vue'
//插槽
import Category from './components/Category.vue'
//vuex使用
import Count from './components/count'
import Person from './components/Person.vue'


export default {
  name:'app',
  components:{
    School,Student,Test,Test1,Test2,demo1,Category,Count,
    Person,
  },
  data() {
    return {
      food:['1','3','4','4','2'],
      play:['q','w','e','r','t'],
      movies:['1q','2w','3e','4r','5t']
    }
  },
  methods: {
    getschoolname(name){
      console.log('1111111111'+name)
    },
    getstudentname(name){
      console.log('2222222'+name)
    },

  },
}
</script>

<style>
  .cate{
    display: flex;
    justify-content: space-around;
  }
  img,video{
    widows: 100%;
    height: 120px;
  }
</style>