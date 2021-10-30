<template>
  <swiper
    :slides-per-view="1"
    :space-between="20"
    :navigation="true"
    :pagination="{ clickable: true }"
    loop
  >
    <swiper-slide><BookCard></BookCard></swiper-slide>
    <swiper-slide><BookCard></BookCard></swiper-slide>
    <swiper-slide><BookCard></BookCard></swiper-slide>
    <swiper-slide><BookCard></BookCard></swiper-slide>
    <swiper-slide><BookCard></BookCard></swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import BookCard from './BookCard.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Navigation,
    Pagination,
    BookCard
  },
  setup() {
    const onSwiper = swiper => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination]
    };
  }
};
</script>

<style></style>
