<template>
  <div class="header-wrapper">
    <nav>
      <router-link v-for="url in mockes" :key="url.url" :to="url.url">{{ url.name }}</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Mocks from "../mocks";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class TheHeader extends Vue {
  x = Mocks;
  get mockes() {
    return this.x;
  }
}
</script>
<style lang="scss" scoped>
.container {
  background: #fff;
}
</style>
