<template>
  <div class="container-wrapper">
    <TheHeader />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"></router-view>
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
export default class TheContainer extends Vue {}
</script>
<style lang="scss" scoped>
.container-wrapper {
  background: #fff;
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
