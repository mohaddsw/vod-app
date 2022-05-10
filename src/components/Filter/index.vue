<template>
  <div class="filter">
    <p>{{ msg }}</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Filter extends Vue {
  msg = "Hello Mohaddese" as string;
}
</script>
<style lang="scss" scoped></style>
