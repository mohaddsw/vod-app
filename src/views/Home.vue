<template>
  <div class="home">
    <Suggestion />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Suggestion from "@/components/Suggestion/index.vue";
import api from "@/apis/movieApi";
@Component({
  components: {
    Suggestion,
  },
})
export default class Home extends Vue {
  created() {
    this.$axios
      .get(api.getTopMovie())
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
.home {
  width: 100%;
  height: 100%;
}
</style>
