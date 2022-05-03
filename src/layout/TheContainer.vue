<template>
  <div class="container" :style="backgroundImg">
    <TheHeader />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"> </router-view>
    </transition>
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
export default class TheContainer extends Vue {
  backgroundImg = {
    background: "url(/images/tt.jpg)",
  };
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;

  background-attachment: fixed !important;
  background-size: cover !important;
  background-position: center !important;

  &::after {
    background: linear-gradient(20deg, #010000, #300202, #4e0303, #600909, #a91111);
    width: 100%;
    height: 100%;
    opacity: 0.8;
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
