<template>
  <div class="content-block" :class="`background-${theme}`">
    <div class="text">{{ text.toUpperCase() }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'content-block',
  props: {
    text: {
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
  .text {
    font-size: 40px;
  }
}
</style>