<template>
  <div id="app">
    <Navbar/>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    name: 'app',
    components: { Navbar }
  }
</script>

<style lang="scss">
  $navbar-item-active-color: blue;

  @import "~bulma/bulma";

  .navbar-burger {
    border: 0;
    height: 80px;
  }

  .navbar { position: fixed !important; top: 0; left: 0; right: 0; }


  html {
    background: #f5f5f5;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  } 
  .fade-enter, .fade-leave-to {
    opacity: 0;
    position: absolute; /* If this page doesn't keep its place, the new one will appear below it before it's fully faded out */
  }
</style>
