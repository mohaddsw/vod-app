<template>
  <div class="footer">
    <p>
      Designed by <a href="https://www.linkedin.com/in/mohaddese-rahimi-2277991a7/">Mohaddese Rahimi</a> &#128520; !
    </p>
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
.footer {
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
    padding: 0;
    color: #fff;
    font-weight: lighter;
    a {
      color: #eee;
    }
  }
}
</style>
