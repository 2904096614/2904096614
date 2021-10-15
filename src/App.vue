<template>
  <div>
    <div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="page-header"><h2>Vue Router Demo</h2></div>
			</div>
		</div>
    <div>
      <ul style="z-index:9999">
        <li><router-link  active-class="active" to="/schstu">学校/学生</router-link></li>
        <li><router-link  active-class="active" to="/dhgd">动画过渡效果</router-link></li>
        <li><router-link  active-class="active" to="/demo">Ajax</router-link></li>
        <li><router-link  active-class="active" to="/cate">插槽实例</router-link></li>
        <li><router-link  active-class="active" to="/vuexs">vuex数据共享</router-link></li>
      </ul>
    
      <router-view class="view"></router-view>
    
    </div>

  </div>
</template>

<script>



export default {
  name:'app',
  
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
  
  .bbbb{
    height: 30px;
    width: 120px;
    background-color: gray;
    text-align: center;
    text-align-last: center;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    top:0;
    bottom: 0;
}
 
li a {
  
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}
 
/* 鼠标移动到选项上修改背景颜色 */
li a:hover {
    background-color: #555;
    color: white;
}
.view{
  position: absolute;
  margin-top: -145px;
  left: 230px;
}
</style>