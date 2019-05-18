<template>
  <div class="project-content">
    <scroll-tracker :content="content"></scroll-tracker>
    <div class="content">
      <content-block text="Identity Management" theme="one">
        <div class="spacer"></div>
      </content-block>
      <content-block text="Tl;dr" theme="two">
        <div class="spacer"></div>
      </content-block>
      <content-block text="Design Process" theme="three">
        <div class="spacer"></div>
      </content-block>
      <content-block text="Problem Framing" theme="two">
        <div class="spacer"></div>
      </content-block>
      <content-block text="Users" theme="one">
        <div class="spacer"></div>
      </content-block>
      <content-block text="Proposed Design" theme="two">
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
    data: () => ({
      content: [{text: 'Identity Management', theme: 'one'},
                {text: 'Tl;dr', theme: 'two'},
                {text: 'Design Process', theme: 'three'},
                {text: 'Problem Framing', theme: 'two'},
                {text: 'Users', theme: 'one'},
                {text: 'Proposed Design', theme: 'two'}],
    })
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