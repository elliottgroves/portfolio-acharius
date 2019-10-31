<template>
  <div class="project-content">
    <div class="content">
      <content-block title="My Portfolio" theme="three">
        <div class="block-one">
          <div class="next-project-footer">
            <div class="next-project">
              <img class="triangle" src="@/assets/images/triangles/triangles-three.svg">
              <span @click="$router.push({ name: 'IdentityManagement' })">Previous Project</span>
            </div>
            <div class="next-project">
              <img class="triangle" src="@/assets/images/triangles/triangles-three.svg">
              <span @click="$router.push({ name: 'FoodDelivery' })">Next Project</span>
            </div>
          </div>
        </div>
      </content-block>
    </div>
  </div>
</template>

<script>
  import ContentBlock from '@/components/content/content-block.vue';

  export default {
    name: 'portfolio-content',
    components: {
      ContentBlock
    }
  }
</script>

<style scoped lang="scss">
.block-one {
  width: 900px;
  .next-project-footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 100px;
    font-size: 37px;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 3px 3px #FD5F80;
    font-weight: bold;
    .next-project {
      display: flex;
      .triangle {
        margin-right: 10px;
        width: 70px;
      }
      span {
        cursor: pointer;
        transition: margin 0.2s ease;
        &:hover {
          margin: 0 -5px 0 5px;
        }
      }
    }
  }
}
</style>