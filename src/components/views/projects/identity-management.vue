<template>
  <div class="wrapper">
    <navbar activeButton="projects"></navbar>
    <project-content></project-content>
  </div>
</template>

<script>
  import ProjectContent from '../../content/project-content.vue';
  import Navbar from '../../ui/navbar.vue';

  export default {
    name: 'Projects',
    components: {
      ProjectContent,
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