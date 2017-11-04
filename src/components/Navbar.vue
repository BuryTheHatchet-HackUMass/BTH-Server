<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://www.iconexperience.com/_img/g_collection_png/standard/512x512/axe.png">
                Bury The Hatchet
            </a>
            <button class="button navbar-burger" data-target="menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div id="menu" class="navbar-menu">
            <a class="navbar-item is-active">Home</a>
            <a class="navbar-item">New</a>
            <a class="navbar-item">Popular</a>
            <a class="navbar-item">For You</a>
            <a class="navbar-item">Recently Buried</a>
            <a class="navbar-item">Starred</a>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field">
                        <div class="control has-icons-left">
                            <span class="icon is-small is-left">
                                <i class="fa fa-search"></i>
                            </span>
                            <input class="input" type="text" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div class="navbar-item">
                    <a class="button is-danger">
                        <span class="icon is-small-isleft">
                            <i class="fa fa-pencil-square-o"></i>
                        </span>
                        <p>Bury Your Hatchet</p>
                    </a>
                </div>
            </div>
        </div>
</div>

    </nav>
  <!-- <div class="navbar">
        <router-link class="link" to="/">home</router-link>
        <router-link class="link" to="/something">about</router-link>
        <router-link class="link" to="/something">about 2</router-link>
    </div> -->
</template>

<script>
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
</script>

<style lang="scss">
.navbar-item > img {
  width: 64px !important;
  max-height: 64px !important;
  margin-right: 20px;
}
</style>