<template>
  <div class="suggestion">
    <div class="suggestion__swiper">
      <swiperComp />
    </div>
    <div class="suggestion__content">
      <div class="suggestion__title">Test</div>
      <div class="suggestion__description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus perferendis fugiat facere
          consequuntur molestias dignissimos, ipsa expedita doloribus eligendi!
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import swiperComp from "../SwiperComp/index.vue";

@Component({
  components: {
    swiperComp,
  },
})
export default class Suggestion extends Vue {}
</script>
<style lang="scss" scoped>
.suggestion {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  &__swiper {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__content {
    width: 50%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  &__title {
  }
  &__description {
  }
}
</style>
