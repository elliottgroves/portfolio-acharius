<template>
  <div class="wrapper">
    <img ref="image" style="display: none;" src="../../assets/bg.png">
    <img ref="outline-image" style="display: none;" src="../../assets/bg-outline.png">
    <div class="header">
      <div class="title">Acharius Design</div>
      <div class="navigation">
        <v-btn flat @click="home()">Home</v-btn>
        <v-btn depressed color="black" class="active-button">Projects</v-btn>
        <v-btn flat>About</v-btn>
      </div>
    </div>
    <canvas ref="canvas" v-if="renderCanvas"></canvas>
    <div class="content">
      <div class="content-row">
        <project-thumbnail
          name="Identity Management"
          description="Leveraging Okta's existing platform to move from B2B to B2C identity and security management."
          srcBase="identity-management"></project-thumbnail>
        <project-thumbnail
          name="Food Delivery"
          description="Exploring relationships between delivery drivers and restaurant workers."
          srcBase="identity-management"
          direction="top-right"></project-thumbnail>
      </div>
      <div class="content-row">
        <project-thumbnail
          name="Identity Management"
          description="Leveraging Okta's existing platform to move from B2B to B2C identity and security management."
          srcBase="identity-management"></project-thumbnail>
        <project-thumbnail
          name="Identity Management"
          description="Leveraging Okta's existing platform to move from B2B to B2C identity and security management."
          srcBase="identity-management"
          direction="top-right"></project-thumbnail>
      </div>
      <div class="content-row">
        <project-thumbnail
          name="Identity Management"
          description="Leveraging Okta's existing platform to move from B2B to B2C identity and security management."
          srcBase="identity-management"
          direction="bottom-left"></project-thumbnail>
        <project-thumbnail
          name="Identity Management"
          description="Leveraging Okta's existing platform to move from B2B to B2C identity and security management."
          srcBase="identity-management"
          direction="bottom-right"></project-thumbnail>
      </div>
    </div>
  </div>
</template>

<script>
import * as canvasManager from '../../assets/js/canvasManager.js';
import ProjectThumbnail from '../ui/project-thumbnail.vue';

export default {
  name: 'Projects',
  components: {
    ProjectThumbnail
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
        setTimeout(() => { vm.clearCanvas(); }, 3000);
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
  height: auto;
  background-color: #fa6182;
  overflow-y: scroll;
  .content {
    z-index: -1;
    padding: 100px 150px;
    display: flex;
    flex-flow: column;
    .content-row {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      margin-bottom: 60px;
    }
  }
  canvas {
    z-index: 4;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
  .header {
    position: fixed;
    top: 0;
    height: 40px;
    width: 100vw;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    z-index: 10;
    white-space: nowrap;
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