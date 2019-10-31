<template>
  <div class="wrapper">
    <navbar activeButton="projects"></navbar>
    <farm-to-school-content></farm-to-school-content>
  </div>
</template>

<script>
  import FarmToSchoolContent from './farm-to-school-content.vue';
  import Navbar from '@/components/ui/navbar.vue';

  export default {
    name: 'farm-to-school',
    components: {
      FarmToSchoolContent,
      Navbar
    },
    methods: {
      home() {
        this.$router.push('/');
      }
    },
    created() {
      window.scrollTo(0,0);
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