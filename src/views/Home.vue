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
export default class Home extends Vue {
  created() {
    this.$axios
      .get("/jsonplaceholder.typicode.com/posts/1")
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
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
