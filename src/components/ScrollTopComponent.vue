<template>
  <a @click="scrollTop" v-show="visible" class="scrollToTop">
    <slot></slot>
  </a>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    scrollTop: function() {
      window.scrollTo({
        top: 0,
        left: 0
      });
    },
    scrollListener: function() {
      this.visible = window.scrollY > 300;
    }
  },
  mounted: function() {
    window.addEventListener('scroll', this.scrollListener);
  },
  beforeUnmount: function() {
    window.removeEventListener('scroll', this.scrollListener);
  }
};
</script>

<style></style>
