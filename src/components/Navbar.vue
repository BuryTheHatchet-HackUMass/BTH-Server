<template>
  <div class="navbar">
        <router-link class="link" to="/">home</router-link>
        <router-link class="link" to="/something">about</router-link>
        <router-link class="link" to="/something">about 2</router-link>
    </div>
</template>

<style lang="scss">
@import "../styles/vars";

.navbar {
    text-align: center;
}

.navbar > .link {
    position: relative;
    color: $onyx;
    font-family: SpaceMono;
    margin-right: 20px;
    padding-left: 20px;
    padding-right: 20px;
    transition: all .15s ease;
    text-decoration: none;
}
</style>