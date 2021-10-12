<template>
  <div class="test">
      <button @click="isshow=!isshow">显示/隐藏</button>
      <!-- appear 实现初始效果  多个动画效果要加name style写法 .haha-enter-active{}-->
      <transition name="haha" 
      appear
      class="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutDown"
      >
      <h3 v-show="isshow" class="animate__animated animate__bounce" >动画效果</h3>
      </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test2',
    data() {
        return {
            isshow:true,
        }
    },

}
</script>

<style scoped>
/* 第三方动画 */
    h3{
        background-color: coral;
        /* transition: 1s linear; */
    }


</style>