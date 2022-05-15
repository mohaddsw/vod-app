<template>
  <div class="home">
    <Suggestion />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Suggestion from "@/components/Suggestion/index.vue";

@Component({
  components: {
    Suggestion,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
