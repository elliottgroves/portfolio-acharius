<template>
	<div class="project-content">
    <div class="content">
      <content-block title="My Portfolio" theme="three">
        <div class="block-one full-width">
        </div>
      </content-block>
    </div>
  </div>
</template>

<script>
  import ContentBlock from '@/components/content/content-block.vue';

  export default {
    name: 'portfolio-content',
    components: {
      ContentBlock
    }
  }
</script>

