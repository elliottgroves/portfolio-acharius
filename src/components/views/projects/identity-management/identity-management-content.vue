<template>
  <div class="project-content">
    <scroll-tracker :content="content"></scroll-tracker>
    <div class="content">
      <content-block title="Identity Management" theme="one">
        <div class="spacer"></div>
      </content-block>
      <content-block title="Tl;dr" theme="two">
        <span class="content-header">Why</span>
        <p class="content-text">To help the average consumer manage digital identity</p>
        <span class="content-header">What</span>
        <p class="content-text">Leveraging Okta's tech platform towards the consumer market</p>
        <span class="content-header">How</span>
        <p class="content-text">Visualizing usage, centralized access control, and security alerts</p>
      </content-block>
      <content-block title="Design Process" theme="three">
        <div class="spacer"></div>
      </content-block>
      <content-block title="Problem Framing" theme="two">
        <div class="spacer"></div>
      </content-block>
      <content-block title="Users" theme="one">
        <div class="spacer"></div>
      </content-block>
      <content-block title="Proposed Design" theme="two">
        <div class="spacer"></div>
      </content-block>
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
                {text: 'Users', theme: 'one'},
                {text: 'Proposed Design', theme: 'two'}]
    }),
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