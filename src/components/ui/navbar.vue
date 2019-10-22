<template>
  <div class="header">
    <div class="title">Acharius Design</div>
    <div class="navigation">
      <v-btn flat :class="{ 'active-button' : activeButton === 'home' }" @click="home()">Home</v-btn>
      <v-btn flat :class="{ 'active-button' : activeButton === 'projects' }" @click="projects()">Projects</v-btn>
      <v-btn flat :class="{ 'active-button' : activeButton === 'about' }" @click="about()">About</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    props: {
      activeButton: {
        type: String,
        default: 'home'
      }
    },
    methods: {
      home() {
        this.$router.push({ name: 'Home' });
      },
      projects() {
        this.$router.push({ name: 'Projects' });
      },
      about() {
        this.$router.push({ name: 'About' });
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