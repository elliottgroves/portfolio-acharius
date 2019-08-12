<template>
  <div class="project-content">
    <scroll-tracker :content="content"></scroll-tracker>
    <div class="content">

    </div>
  </div>
</template>

<script>
  import ContentBlock from '@/components/content/content-block.vue';
  import ScrollTracker from '@/components/ui/scroll-tracker.vue';

  export default {
    name: 'identity-management-content',
    components: {
      ContentBlock,
      ScrollTracker
    },
    data: () => ({
      content: [{text: 'Identity Management', theme: 'one'},
                {text: 'Tl;dr', theme: 'two'},
                {text: 'Design Process', theme: 'three'},
                {text: 'Problem Framing', theme: 'two'},
                {text: 'Research', theme: 'four'},
                {text: 'Users', theme: 'one'},
                {text: 'Proposed Design', theme: 'two'},
                {text: 'Design Strategy', theme: 'three'},
                {text: 'Design Considerations', theme: 'two'},
                {text: 'Research (Extended)', theme: 'four'},
                {text: 'Reflection', theme: 'one'}]
    }),
  }
</script>

<style scoped lang="scss">
  .content {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin-top: 40px;
    .full-width {
      max-width: 820px;
    }
  }
</style>