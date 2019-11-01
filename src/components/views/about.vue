<template>
  <div class="wrapper">
    <img ref="image" style="display: none;" src="@/assets/bg.png">
    <img ref="outline-image" style="display: none;" src="@/assets/bg-outline.png">
    <navbar activeButton="about"></navbar>
    <canvas ref="canvas" v-if="renderCanvas"></canvas>
    <div class="content">
      <img class="background-image" src="@/assets/aboutbackground.svg">
      <div class="picture">
        <span class="type-label">Acharius</span>
        <img class="profile-picture" src="@/assets/about-me-picture.jpg">
      </div>
      <div class="info">
        <div class="header">
          <img class="triangle" src="@/assets/images/triangles/triangles-seven.svg">
          <h1>About Me</h1>
        </div>
        <p>Currently residing in the Greater Chicago Area, I cut through the difficulties of design thinking by applying the methodologies I've learned in my work and school experience thus far. A lifelong learner, I always strive to continue to hone my understanding and craft. I have over a year of industry experience and a Masters degree in Human-Computer Interaction Design from IU Bloomington.</p>
        <p>When I'm not working on UX projects, I cast a wide net of interests to further understand my own creative process. I try to specialize in many artistic mediums and crafts while applying what I've learned as a designer to my own life. On the weekends, you can find me DJing, playing video games, hiking, camping, or trying to pick up more skills to add to my skillset.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import * as canvasManager from '../../assets/js/canvasManager.js';
  import Navbar from '../ui/navbar.vue';

  export default {
    name: 'about',
    components: {
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
  background-color: #1C4966;
  canvas {
    position: absolute;
    z-index: 4;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    .background-image {
      position: absolute;
      z-index: 1;
      width: 48%;
      flex-grow: 1;
      height: calc(100% - 40px);
      object-fit: cover;
    }
    .picture {
      width: 40%;
      height: 100%;
      display: flex;
      align-items: center;
      padding-top: 65px;
      flex-flow: column;
      z-index: 2;
      margin-left: 50px;
      .type-label {
        background-color: #FD5F80;
        color: #fff;
        font-weight: bold;
        padding: 3px 25px;
        font-size: 0.8em;
        margin: 40px 0;
        box-shadow: 2px 2px #D5D5D5;
      }
      .profile-picture {
        width: 100%;
      }
    }
    .info {
      width: 50%;
      height: 100%;
      display: flex;
      flex-flow: column;
      color: #fff;
      font-size: 0.8em;
      align-items: center;
      padding: 100px 80px 0 0;
      z-index: 2;
      .header {
        display: flex;
        width: 100%;
        margin-bottom: 80px;
        justify-content: center;
        position: relative;
        .triangle {
          width: 80px;
          position: absolute;
          left: 0;
        }
        h1 {
          text-shadow: 3px 3px #FD5F80;
          text-transform: uppercase;
        }  
      }
    }  
  }
}
</style>