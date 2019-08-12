<template>
  <div class="wrapper">
    <navbar activeButton="projects"></navbar>
    <voice-highlighting-content></voice-highlighting-content>
  </div>
</template>

<script>
  import VoiceHighlightingContent from './voice-highlighting-content.vue';
  import Navbar from '@/components/ui/navbar.vue';

  export default {
    name: 'voice-highlighting',
    components: {
      VoiceHighlightingContent,
      Navbar
    },
    methods: {
      home() {
        this.$router.push('/');
      },
    }
  }
</script>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  canvas {
    z-index: 4;
  }
}
</style>