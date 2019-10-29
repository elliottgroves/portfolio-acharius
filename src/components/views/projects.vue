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
          description="Leveraging Okta's existing platform to move from B2B to B2C identity and security management"
          pathname="identity-management"></project-thumbnail>
        <project-thumbnail
          name="My Portfolio"
          description="Treating my own portfolio as a design system allowed me to better understand my own design practices and philosophy"
          pathname="portfolio"
          direction="top-right"></project-thumbnail>
      </div>
      <div class="content-row">
        <project-thumbnail
          name="Food Delivery"
          description="Exploring relationships between delivery drivers and restaurant workers"
          pathname="food-delivery"></project-thumbnail>
        <project-thumbnail
          name="Voice Highlighting (24-Hour Challenge)"
          description="Challenging Amazon Audible's existing methodology of capturing and bookmarking passages in audiobooks"
          pathname="voice-highlighting"
          direction="top-right"></project-thumbnail>
      </div>
      <div class="content-row">
        <project-thumbnail
          name="Farm-to-School Procurement"
          description="User experience research: participant recruitment, cognitive mapping, structured interviews, translating findings into insights, ideation"
          pathname="farm-to-school"
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
    min-width: 840px;
    .content-row {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      margin-bottom: 60px;
      min-width: 840px;
      &:last-of-type {
        justify-content: center;
        * {
          margin: 0;
        }
      }
    }
  }
  canvas {
    position: absolute;
    z-index: 4;
  }
}
</style>