<template>
  <div class="header">
    <nav>
      <div class="menu">
        <router-link v-for="url in mockes" :key="url.url" :to="url.url">{{ url.name }}</router-link>
      </div>
      <div class="logo">
        <router-link to="/">
          <img width="100" src="../../public/logo.png" alt="disny" />
        </router-link>
      </div>
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
  mockUrl = Mocks;
  get mockes() {
    return this.mockUrl;
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 70px;
  width: 100%;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .menu {
      height: 100%;
      display: flex;
      align-items: center;
      a {
        height: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #fff;
      }
    }
  }
}
</style>
