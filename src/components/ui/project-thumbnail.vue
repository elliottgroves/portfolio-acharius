<template>
  <div class="project-thumbnail" :class="direction" @click="navigate()">
    <div class="trail"></div>
    <div class="image-container">
      <img class="image image-one" :src="getImgUrl(imageOneSrc)">
      <img class="image image-two" :src="getImgUrl(imageTwoSrc)">
    </div>
    <div class="frame"></div>
    <div class="label">{{name.toUpperCase()}}</div>
    <div class="description">{{description}}</div>
  </div>
</template>

<script>
  export default {
    name: 'project-thumbnail',
    props: {
      name: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      pathname: {
        type: String,
        default: ''
      },
      direction: {
        type: String,
        default: 'top-left'
      }
    },
    computed: {
      imageOneSrc() {
        return `project-thumbnails/${this.pathname}/image-one.svg`;
      },
      imageTwoSrc() {
        return `project-thumbnails/${this.pathname}/image-two.svg`;
      }
    },
    methods: {
      getImgUrl(src) {
        return require(`../../assets/${src}`);
      },
      navigate() {
        this.$router.push({ path: `/projects/${this.pathname}` });
      }
    }
  }
</script>

<style scoped lang="scss">
  .project-thumbnail {
    color: #000;
    position: relative;
    cursor: pointer;
    margin-right: 20px;
    width: 400px;
    .trail {
      opacity: 0;
      position: absolute;
      background-color: rgba(0,0,0,0.5);
      width: 400px;
      height: 300px;
      transition: opacity 0.1s ease-in;
    }
    .frame {
      position: absolute;
      border: 3px solid #707070;
      width: 400px;
      height: 300px;
      transition: all 0.2s ease-in-out;
    }
    .image-container {
      height: 300px;
      width: 400px;
      position: relative;
      transition: all 0.2s ease-in-out;
      overflow: hidden;
      .image {
        height: 100%;
        width: 100%;
        position: absolute;
      }
      .image-two {
        opacity: 0;
        transition: opacity 0.2s ease-in;
      }
    }
    .description {
      font-size: 14px;
    }
    .label, .description {
      margin-top: 10px;
      transition: all 0.2s ease-out;
    }

    &:hover {
      .trail {
        opacity: 1;
        transition: opacity 0.2s ease-in;
      }
      .image-container {
        .image-two {
          opacity: 1;
        }
      }
      .label, .description {
        transform: translate(5px, 2px);
        color: #fff;
      }
    }
    
    &.top-left {
      .trail {
        top: -10px;
        left: -10px;
        box-shadow: 10px 10px rgba(0,0,0,0.2);
      }
      .frame {
        top: -5px;
        left: -5px;
      }
      &:hover {
        .frame {
          transform: translate(-20px, -20px);
        }
        .image-container {
          transform: translate(-20px, -20px);
        }
      }
    }

    &.top-right {
      .trail {
        top: -10px;
        left: 10px;
        box-shadow: -10px 10px rgba(0,0,0,0.2);
      }
      .frame {
        top: -5px;
        left: 5px;
      }
      &:hover {
        .frame {
          transform: translate(20px, -20px);
        }
        .image-container {
          transform: translate(20px, -20px);
        }
      }
    }

    &.bottom-left {
      .trail {
        top: 10px;
        left: -10px;
        box-shadow: 10px -10px rgba(0,0,0,0.2);
      }
      .frame {
        top: 5px;
        left: -5px;
      }
      &:hover {
        .frame {
          transform: translate(-20px, 20px);
        }
        .image-container {
          transform: translate(-20px, 20px);
        }
        .label, .description {
          transform: translate(5px, 20px);
        }
      }
    }

    &.bottom-right {
      .trail {
        top: 10px;
        left: 10px;
        box-shadow: -10px -10px rgba(0,0,0,0.2);
      }
      .frame {
        top: 5px;
        left: 5px;
      }
      &:hover {
        .frame {
          transform: translate(20px, 20px);
        }
        .image-container {
          transform: translate(20px, 20px);
        }
        .label, .description {
          transform: translate(5px, 20px);
        }
      }
    }
  }
</style>