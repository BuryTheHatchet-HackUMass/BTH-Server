<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu">
                <div class="navbar-item">
                    <a class="button is-danger">
                        <span class="icon is-small is-left">
                            <i class="fa fa-times"></i>
                        </span>
                        <a v-on:click="$router.go(-1)" class="button is-danger">Close</a>
                    </a>
                </div>
            </div>
        </nav>
        <div>
            <section id="jumbotron" class="hero is-dark is-medium">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Milk or Cereal first?
                        </h1>
                        <h2 class="subtitle">
                            <b>3</b> days left
                        </h2>
                    </div>
                </div>
            </section>
            <section id="arguments">
                <div class="columns">
                    <div class="column is-one-half">
                        <h1 class="title has-text-centered side">Left</h1>
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                <figure class="image is-64x64">
                                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                                </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                        <br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="column is-one-half">
                        <h1 class="title has-text-centered side">Right</h1>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
    .hero-body {
        background: rgba(2, 2, 2, 0.7);
    }

    .title {
        padding-bottom: 10px;
    }

    .side:first-child::before {
        content: '';
        background: red;
        position: absolute;
        display: block;
        height: 1em;
        width: 100%;
        top: 2px;
        left: 0;
        transition: background-color .3s ease;
        z-index: -1;
    }

    #jumbotron {
        background: url("https://www.rd.com/wp-content/uploads/sites/2/2016/03/national-cereal-day-opener.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    #arguments { 
        padding: 40px;
    }

    #side {
        text-align: center;
    }
</style>