<template>
  <div class="home">
    <Suggestion />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Suggestion from "@/components/Suggestion/index.vue";
import api from "@/apis/movieApi";
type Tlist = {
  crew: string;
  fullTitle: string;
  id: string;
  imDbRating: string;
  imDbRatingCount: string;
  image: string;
  rank: string;
  title: string;
  year: string;
};
@Component({
  components: {
    Suggestion,
  },
})
export default class Home extends Vue {
  lists: Array<Tlist> = [];
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
