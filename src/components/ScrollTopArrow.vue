<template>
  <ScrollTopComponent>
      <a class="scrollToTop">
        <font-awesome-icon :icon="['fas', 'angle-up']" size="3x"/>
      </a>
  </ScrollTopComponent>
</template>

<script>
import ScrollTopComponent from './ScrollTopComponent'
export default {
  components: {
    ScrollTopComponent
  }
}
</script>

<style lang="scss" scoped>
.scrollToTop {
    height: 60px;
    text-align: center;
    font-weight: bold;
    color: $white;
    text-decoration: none;
    position: fixed;
    bottom: 0px;
    left: 2rem;
    z-index: 7;
    cursor: pointer;

    @media screen and (max-width: 812px) {
        right: 1rem;
        left: auto;
    }

    &:hover {
        text-decoration: none;
    }
  }
</style>