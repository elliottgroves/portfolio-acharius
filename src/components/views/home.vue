<template>
  <div class="wrapper">
    <img ref="image" style="display: none;" src="@/assets/bg.svg">
    <img ref="outline-image" style="display: none;" src="@/assets/bg-outline.svg">
    <canvas ref="canvas"></canvas>
    <navbar activeButton="home"></navbar>
  </div>
</template>

<script>
  import * as canvasManager from '../../assets/js/canvasManager.js';
  import Navbar from '../ui/navbar.vue';

  export default {
    name: 'Home',
    components: {
      Navbar
    },
    data: () => ({
      portfolioTransitionStart: 0,
    }),
    computed: {
      canvas() {
        return this.$refs['canvas'];
      },
      bg() {
        return this.$refs['image'];
      },
      bgOutline() {
        return this.$refs['outline-image'];
      },
    },
    methods: {
      portfolio() {
        this.$router.push('projects');
      },
    },
    mounted() {
      if (!this.canvas.getContext) return;
      canvasManager.init(this.canvas, this.bg, this.bgOutline);
    }
  }
</script>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  canvas {
    z-index: 4;
  }
}
</style>