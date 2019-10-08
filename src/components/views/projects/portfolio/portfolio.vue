<template>
  <div class="wrapper">
    <navbar activeButton="projects"></navbar>
    <portfolio-content></portfolio-content>
  </div>
</template>

<script>
  import PortfolioContent from './portfolio-content.vue';
  import Navbar from '@/components/ui/navbar.vue';

  export default {
    name: 'voice-highlighting',
    components: {
      PortfolioContent,
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