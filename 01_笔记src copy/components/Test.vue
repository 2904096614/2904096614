<template>
  <div class="test">
      <button @click="isshow=!isshow">显示/隐藏</button>
      <!-- appear 实现初始效果  多个动画效果要加name style写法 .haha-enter-active{}-->
      <transition name="haha" appear>
      <h3 v-show="isshow" class="come" >动画效果</h3>
      </transition>
      
  </div>
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            isshow:true,
        }
    },

}
</script>

<style scoped>
/* 动画效果 */
    h3{
        background-color: coral;
    }
    /* .v-enter-active */
    .haha-enter-active{
        animation: 1s myident linear;
    }
    .haha-leave-active{
        animation: myident 1s reverse linear;
    }

    @keyframes myident {
        from{
            transform: translateX(-100%);
        }        
        to{
            transform: translateX(0);
        }
    }
</style>