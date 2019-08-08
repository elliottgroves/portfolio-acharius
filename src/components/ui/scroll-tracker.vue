<template>
  <div class="scroll-tracker" ref="scroll-tracker">
    <div class="percent" ref="percent"></div>
    <div class="progress-marker" ref="progress-marker"></div>
    <div v-for="(item, index) in content" @click="scrollTo(item)" :class="`background-${item.theme}`" :key="`content-marker-${index}`" class="marker">
      <span class="block-title">{{item.text.toUpperCase()}}</span>
    </div>
  </div>
</template>

<script>
  import updateOnScroll from 'uos';

  export default {
    name: 'scroll-tracker',
    props: {
      content: {
        type: Array,
        default: () => []
      },
    },
    computed: {
      scrollHeight() {
        return this.$refs['scroll-tracker'].clientHeight;
      }
    },
    methods: {
      updateProgressMarker() {
        updateOnScroll(0, 1.0, progress => this.scrollCallback(progress));
      },
      scrollCallback(progress) {
        if(typeof this.$refs['progress-marker'] === 'undefined') return;
        this.$refs['progress-marker'].style.top = (this.scrollHeight * progress).toString() + 'px';
      }
    },
    mounted() {
      window.addEventListener('resize', this.updateProgressMarker, false);
      this.updateProgressMarker();
    }
  }
</script>

<style scoped lang="scss">
.scroll-tracker {
  z-index: 3;
  position: fixed;
  top: 40px;
  left: 0;
  width: 270px;
  height: 50vh;
  display: flex;
  flex-flow: column;
  .percent {
    position: absolute;
    top: 0;
    left: 0;
  }
  &:hover {
    .progress-marker {
      display: none;
    }
  }
  .progress-marker {
    height: 6px;
    width: 20px;
    background-color: #000;
    position: absolute;
  }
  .marker {
    flex-grow: 1;
    width: 20px;
    transition: width 0.2s ease-in;
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    font-size: 22px;
    .block-title {
      opacity: 0;
      padding-left: 10px;
      transition: opacity 0.2s ease-in;
    }
    &:hover {
      cursor: pointer;
      width: 100%;
      box-shadow: 4px 4px #707070;
      .block-title {
        opacity: 1;
      }
    }
  }
}
</style>