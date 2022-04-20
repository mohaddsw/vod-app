<template>
  <div class="about-wrapper">
    <p>About</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class About extends Vue {}
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
