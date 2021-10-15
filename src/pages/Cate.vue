<template>
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
</template>

<script>
import Category from '../components/Category.vue'
export default {
    name:'Cate',
    data() {
        return {
        food:['1','3','4','4','2'],
        play:['q','w','e','r','t'],
        movies:['1q','2w','3e','4r','5t']
        }
    },
    components:{
        Category
    }
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