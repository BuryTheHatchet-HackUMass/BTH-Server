<template>
  <div class="navbar">
        <router-link class="link" to="/">home</router-link>
        <router-link class="link" to="/projects">projects</router-link>
        <router-link class="link" to="/people">people</router-link>
        <router-link class="link" to="/workshops">workshops</router-link>
        <a class="link" href="#">the lab</a>
        <a class="link" href="#">connect</a>
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
