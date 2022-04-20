<template>
  <div class="home-wrapper">
    <p>Home</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class HomeView extends Vue {}
</script>
<style lang="scss" scoped>
.home-wapper {
  background: #fff;
  margin: 5px;
  p {
    color: red;
  }
}
</style>
