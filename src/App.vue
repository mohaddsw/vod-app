<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
#app {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
}
</style>
