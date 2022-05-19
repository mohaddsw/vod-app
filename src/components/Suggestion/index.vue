<template>
  <div class="suggestion" v-if="moviesList.length">
    <div class="suggestion__swiper">
      <v-carousel hide-delimiters next-icon="mdi-menu-right" prev-icon="mdi-menu-left" @change="changeSlid">
        <v-carousel-item
          v-for="(movie, i) in moviesList"
          :key="i"
          :src="movie.image"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
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
import { Component, Vue, Watch } from "vue-property-decorator";
import { Carousel3d, Slide } from "vue-carousel-3d";

export type Tlist = {
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
export interface ITopMovies {
  data: Array<Tlist>;
  type: boolean;
}

@Component({
  components: {
    Carousel3d,
    Slide,
  },
})
export default class Suggestion extends Vue {
  moviesList: Array<Tlist> = [];
  created() {
    this.$store.dispatch("getTopMovies");
  }
  get topMovie() {
    return this.$store.state.Movie.topMovies;
  }
  changeSlid(val: number) {
    console.log(val, "test");
  }
  @Watch("topMovie")
  onPropertyChanged(value: ITopMovies) {
    this.moviesList = value.data;
  }
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Frijole&family=Lobster&display=swap");
::v-deep {
  .v-window__prev {
    left: 0;
  }
  .v-window__next {
    right: 0;
  }
}
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
