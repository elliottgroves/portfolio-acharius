<template>
  <div class="content-block" :class="`background-${theme}`">
    <div class="block-title">
      <div class="triangle-container">
        <img class="triangle" src="@/assets/images/triangles/triangles1.svg">
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
    },
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
    font-weight: bold;
    .triangle-container {
      position: absolute;
      left: 135px;
      .triangle {
        margin-top: 15px;
        width: 70px;
      }
    }
  }
  .content-container {
    display: flex;
    flex-flow: column;
    .content-header {
      font-weight: bold;
      align-self: flex-start;
      &:not(:first-of-type) {
        margin-top: 40px;
      }
    }  
  }
}
</style>