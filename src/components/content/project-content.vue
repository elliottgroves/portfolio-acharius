<template>
  <div class="project-content">
    <scroll-tracker :content="content"></scroll-tracker>
    <div class="content">
      <content-block v-for="(item, index) in content" :title="item.text" :theme="item.theme" :key="index">
        <div class="spacer"></div>
      </content-block>
    </div>
  </div>
</template>

<script>
  import ContentBlock from '../content/content-block.vue';
  import ScrollTracker from '../ui/scroll-tracker.vue';

  export default {
    name: 'project-content',
    components: {
      ContentBlock,
      ScrollTracker
    },
    props: {
      content: {
        type: Array,
        default: () => [],
      }
    },
  }
</script>

<style scoped lang="scss">
  .content {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    .spacer {
      height: 400px;
    }
  }
</style>