<template>
  <div class="container">
    <TheHeader />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"> </router-view>
    </transition>
    <div class="container__bg"></div>
    <div class="container__img"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "./TheHeader.vue";
@Component({
  components: {
    TheHeader,
  },
})
export default class TheContainer extends Vue {}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  position: fixed;
  &__img {
    width: 100%;
    height: 100%;
    background: url("@/assets/images/tt.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    z-index: -2;
  }
  &__bg {
    background: linear-gradient(20deg, #010000, #300202, #4e0303, #600909, #a91111);
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: -1;
    position: absolute;
    top: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
