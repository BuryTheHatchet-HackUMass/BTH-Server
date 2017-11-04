<template>
    <div>
        <section id="jumbotron" class="hero is-dark is-large">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    Hero title
                </h1>
                <h2 class="subtitle">
                    Hero subtitle
                </h2>
                </div>
            </div>
        </section>
        <nav id="stats" class="level">
            <level-item heading="Hatchets Today" title="6" />
            <level-item heading="Responses" title="123" />
            <level-item heading="Facts Added" title="12" />
            <level-item heading="New Users" title="789" />
        </nav>
        <section class="category" id="new">
            <h1 class="title">New</h1>
        </section>
        <section class="category" id="popular">
            <h1 class="title">Popular</h1>
        </section>
        <section class="category" id="for-you">
            <h1 class="title">For You</h1>
        </section>
        <section class="category" id="recently-buried">
            <h1 class="title">Recently Buried</h1>
        </section>
    </div>
</template>

<script>
module.exports = {
    components: {
        "level-item": {
            props: ["heading", "title"],
            template: `
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">{{ heading }}</p>
                        <p class="title">{{ title }}</p>
                    </div>
                </div> 
            `
        }
    }
};
</script>

<style lang="scss">
    .navbar {
        z-index: 5;
    }

    #jumbotron {
        background: url("https://fortunedotcom.files.wordpress.com/2017/03/wgl-2017-lebron-james.jpg?w=840&h=485&crop=1");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .category {
        padding-left: 60px;
        padding: 40px;
        padding-bottom: 200px;
    }

    #stats {
        padding: 20px;
    }
</style>