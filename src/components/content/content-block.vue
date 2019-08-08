<template>
  <div class="content-block" :class="`background-${theme}`">
    <div class="block-title">
      
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
  padding-top: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 20px solid #fff;
  .block-title {
    font-size: 40px;
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