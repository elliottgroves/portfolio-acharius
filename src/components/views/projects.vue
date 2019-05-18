<template>
  <div class="wrapper">
    <img ref="image" style="display: none;" src="../../assets/bg.png">
    <img ref="outline-image" style="display: none;" src="../../assets/bg-outline.png">
    <div class="header">
      <div class="title">Acharius Design</div>
      <div class="navigation">
        <v-btn flat @click="home()">Home</v-btn>
        <v-btn depressed color="black" class="active-button">Projects</v-btn>
        <v-btn flat>Design</v-btn>
        <v-btn flat>Rates</v-btn>
      </div>
    </div>
    <project-content></project-content>
    <canvas ref="canvas" v-if="renderCanvas"></canvas>
  </div>
</template>

<script>
import * as canvasManager from '../../assets/js/canvasManager.js';
import ProjectContent from '../content/project-content.vue';

export default {
  name: 'Projects',
  components: {
    ProjectContent
  },
  data: () => ({
    renderCanvas: true
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
    }
  },
  methods: {
    home() {
      this.$router.push('/');
      // canvasManager.transitionToHome(this.canvas, this.bg, this.bgOutline);
    },
    clearCanvas() {
      canvasManager.clearAnimation(this.canvas);
      this.renderCanvas = false;
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if(from.name !== null) {
        if (!vm.canvas.getContext) return;
        canvasManager.transitionToPortfolio(vm.canvas, vm.bg, vm.bgOutline);
        setTimeout(() => { vm.clearCanvas(); }, 5000);
      } else {
        vm.renderCanvas = false;
      }
      next();
    });
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
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