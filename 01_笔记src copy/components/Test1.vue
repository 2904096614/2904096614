<template>
  <div class="test">
      <button @click="isshow=!isshow">显示/隐藏</button>
      <!-- appear 实现初始效果  多个动画效果要加name style写法 .haha-enter-active{}-->
      <transition name="haha" appear>
      <h3 v-show="isshow" class="come" >动画效果</h3>
      </transition>
      <!-- transition 内只能有一个标签，多个标签要用 transition-group且要在标签内添加 key 值 -->
      <transition-group name="haha" appear>
      <h3 v-show="isshow" class="come" :key="1" >动画效果</h3>
      <h3 v-show="isshow" class="come" :key="2">动画效果</h3>
      </transition-group>
      
  </div>
</template>

<script>
export default {
    name:'Test1',
    data() {
        return {
            isshow:true,
        }
    },

}
</script>

<style scoped>
/* 过渡效果 */
    h3{
        background-color: coral;
        /* transition: 1s linear; */
    }
    /* 进入的起点，离开的终点 */
    .haha-enter,.haha-leave-to{
       transform: translateX(-100%);
    }
    /* 进入离开的过程中 也可写在标签样式中，不破坏原本的标签样式可单独写出来 */
    .haha-enter-active,.haha-leave-active{
        transition: 1s linear;
    }
    /* 进入的终点，离开的起点 */
    .haha-leave,.haha-enter-to{
       transform: translateX(0);
    }


</style>