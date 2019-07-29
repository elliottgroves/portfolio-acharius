<template>
  <div class="wrapper">
    <img ref="image" style="display: none;" src="../../assets/bg.png">
    <img ref="outline-image" style="display: none;" src="../../assets/bg-outline.png">
    <navbar activeButton="projects"></navbar>
    <canvas ref="canvas" v-if="renderCanvas"></canvas>
    <div class="content">
      <div class="content-row">
        <project-thumbnail
          name="Identity Management"
          description="Leveraging Okta's existing platform to move from B2B to B2C identity and security management."
          pathname="identity-management"></project-thumbnail>
        <project-thumbnail
          name="Food Delivery"
          description="Exploring relationships between delivery drivers and restaurant workers."
          pathname="identity-management"
          direction="top-right"></project-thumbnail>
      </div>
      <div class="content-row">
        <project-thumbnail
          name="Identity Management"
          description="Leveraging Okta's existing platform to move from B2B to B2C identity and security management."
          pathname="identity-management"></project-thumbnail>
        <project-thumbnail
          name="Identity Management"
          description="Leveraging Okta's existing platform to move from B2B to B2C identity and security management."
          pathname="identity-management"
          direction="top-right"></project-thumbnail>
      </div>
      <div class="content-row">
        <project-thumbnail
          name="Identity Management"
          description="Leveraging Okta's existing platform to move from B2B to B2C identity and security management."
          pathname="identity-management"
          direction="bottom-left"></project-thumbnail>
        <project-thumbnail
          name="Identity Management"
          description="Leveraging Okta's existing platform to move from B2B to B2C identity and security management."
          pathname="identity-management"
          direction="bottom-right"></project-thumbnail>
      </div>
    </div>
  </div>
</template>

<script>
  import * as canvasManager from '../../assets/js/canvasManager.js';
  import ProjectThumbnail from '../ui/project-thumbnail.vue';
  import Navbar from '../ui/navbar.vue';

  export default {
    name: 'Projects',
    components: {
      ProjectThumbnail,
      Navbar
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
      clearCanvas() {
        canvasManager.clearAnimation(this.canvas);
        this.renderCanvas = false;
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if(from.name === 'Home') {
          if (!vm.canvas.getContext) return;
          canvasManager.transitionToPortfolio(vm.canvas, vm.bg, vm.bgOutline);
          setTimeout(() => { vm.clearCanvas(); }, 2700);
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
  background-color: #fa6182;
  .content {
    z-index: -1;
    top: 0;
    left: 0;
    padding: 100px 200px;
    display: flex;
    flex-flow: column;
    height: 100vh;
    overflow: scroll;
    .content-row {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      margin-bottom: 60px;
    }
  }
  canvas {
    position: absolute;
    z-index: 4;
  }
}
</style>