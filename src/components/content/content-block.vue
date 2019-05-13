<template>
  <div class="content-block" :class="theme">
    <div class="heading">{{ heading.toUpperCase() }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'content-block',
  props: {
    heading: {
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
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;
  .heading {
    font-size: 40px;
  }
  &.one {
    background-color: #fa6182;
    .heading {
      color: #fff;
      text-shadow: 4px 4px #549aae;
    }
  }
  &.two {
    background-color: #fff;
    .heading {
      color: #193d54;
      text-shadow: 4px 4px #fa6182;
    }
  }
  &.three {
    background-color: #193d54;
    .heading {
      color: #fff;
      text-shadow: 4px 4px #fa6182;
    }
  }
}
</style>