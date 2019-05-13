<template>
  <div class="wrapper">
    <img ref="image" style="display: none;" src="../../assets/bg.png">
    <img ref="outline-image" style="display: none;" src="../../assets/bg-outline.png">
    <canvas ref="canvas"></canvas>
    <div class="header">
      <div class="title">Acharius Design</div>
      <div class="navigation">
        <v-btn depressed color="black" class="active-button">Home</v-btn>
        <v-btn flat @click="portfolio()">Projects</v-btn>
        <v-btn flat>Design</v-btn>
        <v-btn flat>Rates</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import * as canvasManager from '../../assets/js/canvasManager.js';

export default {
  name: 'Home',
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
  .header {
    position: fixed;
    top: 0;
    height: 40px;
    width: 100vw;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    .title { 
      padding-top: 10px;
      padding-left: 70px;
    }
    .navigation {
      margin-right: 60px;
      * {
        margin: 0;
        height: 41px;
      }
      .active-button {
        color: #fff;
        border-radius: 0;
      }
    }
  }
}
</style>