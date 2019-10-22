<template>
  <div class="header">
    <div class="title">Acharius Design</div>
    <div class="navigation">
      <v-btn flat @click="home()">Home</v-btn>
      <v-btn flat :class="{ 'active-button' : false }" @click="projects()">Projects</v-btn>
      <v-btn flat>About</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    methods: {
      home() {
        this.$router.push({ name: 'home' });
      },
      projects() {
        this.$router.push({ name: 'projects' });
      }
    }
  }
</script>

<style scoped lang="scss">
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
        background-color: #000;
        color: #fff;
        border-radius: 0;
      }
    }
  }
</style>