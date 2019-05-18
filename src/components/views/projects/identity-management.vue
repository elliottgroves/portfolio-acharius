<template>
  <div class="wrapper">
    <div class="header">
      <div class="title">Acharius Design</div>
      <div class="navigation">
        <v-btn flat @click="home()">Home</v-btn>
        <v-btn depressed color="black" class="active-button">Projects</v-btn>
        <v-btn flat>About</v-btn>
      </div>
    </div>
    <project-content></project-content>
  </div>
</template>

<script>
  import ProjectContent from '../../content/project-content.vue';

  export default {
    name: 'Projects',
    components: {
      ProjectContent
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