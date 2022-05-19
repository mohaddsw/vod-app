<template>
  <div class="containerWrapper" :style="backgroundImg">
    <main>
      <TheHeader />
      <div class="page">
        <transition name="fade" mode="out-in">
          <router-view :key="$route.path"> </router-view>
        </transition>
      </div>
      <TheFooter />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
@Component({
  components: {
    TheHeader,
    TheFooter,
  },
})
export default class TheContainer extends Vue {
  backgroundImg = {
    backgroundImage: "url(/images/tt.jpg)",
  };
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100&display=swap");
.containerWrapper {
  font-family: "Roboto Flex", sans-serif;
  position: relative;
  width: 100%;
  height: 100vh;
  background-attachment: fixed !important;
  background-size: cover !important;
  background-position: center !important;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    z-index: 0;
    background: linear-gradient(20deg, #010000, #300202);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0.8;
    display: block;
    backdrop-filter: blur(20px);
  }
  main {
    z-index: 1;
    position: absolute;
    width: 80%;
    height: 100%;
    .page {
      height: calc(100% - 120px);
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
