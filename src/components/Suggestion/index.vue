<template>
  <div class="suggestion">
    <div class="suggestion__swiper"></div>
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

@Component({})
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
  }
  &__content {
    width: 50%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  &__title {
  }
  &__description {
  }
}
</style>
