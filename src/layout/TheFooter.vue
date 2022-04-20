<template>
  <div class="container-wrapper">
    <p>container</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class TheFooter extends Vue {}
</script>
<style lang="scss" scoped>
.container {
  background: #fff;
}
</style>
