<template>
  <div class="wrapper">
    <navbar activeButton="projects"></navbar>
    <food-delivery-content></food-delivery-content>
  </div>
</template>

<script>
  import FoodDeliveryContent from './food-delivery-content.vue';
  import Navbar from '@/components/ui/navbar.vue';

  export default {
    name: 'food-delivery',
    components: {
      FoodDeliveryContent,
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