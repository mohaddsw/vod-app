<template>
  <swiper :slides-per-view="3" :space-between="50">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Swiper, SwiperSlide } from "swiper/vue";
@Component({
  components: {
    Swiper,
    SwiperSlide,
  },
})
export default class SwiperComp extends Vue {}
</script>
