<template>
  <div class="suggestion">
    <div class="suggestion__swiper">
      <swiperComp />
    </div>
    <div class="suggestion__content">
      <div class="suggestion__title">Test</div>
      <div class="suggestion__description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus perferendis fugiat facere
          consequuntur molestias dignissimos, ipsa expedita doloribus eligendi!
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import swiperComp from "../SwiperComp/index.vue";
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
    swiperComp,
  },
})
export default class Suggestion extends Vue {
  lists: Array<Tlist> = [];
  created() {
    this.$axios
      .get(api.getTopMovie())
      .then((res: any) => {
        console.log(res);
        this.lists = res.data;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Frijole&family=Lobster&display=swap");
.suggestion {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  &__swiper {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__content {
    width: 50%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  &__title {
    font-family: "Frijole", cursive;
    font-size: 70px;
  }
  &__description {
    line-height: 35px;
  }
}
</style>
