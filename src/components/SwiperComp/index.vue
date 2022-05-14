<template>
  <carousel-3d>
    <slide :index="0"> Slide 1 Content </slide>
  </carousel-3d>
</template>
<script lang="ts">
import { Carousel3d, Slide } from "vue-carousel-3d";
import { Component, Vue, Prop } from "vue-property-decorator";

// interface Islide {}

@Component({
  components: {
    Carousel3d,
    Slide,
  },
})
export default class SwiperComp extends Vue {
  // @Prop({
  // })
}
</script>

<style lang="scss" scoped></style>
