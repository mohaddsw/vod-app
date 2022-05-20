<template>
  <div class="header">
    <nav>
      <div class="logo">
        <router-link to="/"> TOP MOVIES </router-link>
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
@import url("https://fonts.googleapis.com/css2?family=Frijole&family=Lobster&display=swap");
.header {
  height: 70px;
  width: 100%;
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-top: 50px;
    .menu {
      height: 100%;
      display: flex;
      align-items: center;
    }
    a {
      height: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #fff;
      font-family: "Frijole", cursive;
      font-size: 45px;
    }
  }
}
</style>
