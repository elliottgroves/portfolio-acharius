<template>
  <div class="content-block" :class="`background-${theme}`">
    <div class="block-title">
      <div class="triangle-container">
        <div class="triangle"></div>  
      </div>
      <span>{{ title.toUpperCase() }}</span>
    </div>
    <div class="content-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {  
  name: 'content-block',
  props: {
    title: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.content-block {
  z-index: 1;
  width: 100vw;
  height: auto;
  padding: 50px;
  display: flex;
  flex-flow: column;
  align-items: center;
  .block-title {
    font-size: 40px;
    display: flex;
    margin-bottom: 60px;
    .triangle-container {
      position: absolute;
      left: 200px;
      .triangle {
        position: relative;
        width: 0;
        height: 0;
        border-right: 58px solid transparent;
        border-top: 57px solid #fff;
        &:before {
          position: absolute;
          left: 15px;
          top: -45px;
          width: 0;
          height: 0;
          border-right: 58px solid transparent;
          border-top: 57px solid #999;
          content: "";
        }
        &:after {
          position: absolute;
          left: 18px;
          top: -42px;
          width: 0;
          height: 0;
          border-right: 47px solid transparent;
          border-top: 45px solid #fa6182;
          content: "";
        }
      }
    }
  }
  .content-container {
    display: flex;
    flex-flow: column;
    .content-header {
      text-transform: uppercase;
      font-weight: bold;
      align-self: flex-start;
    }  
  }
}
</style>