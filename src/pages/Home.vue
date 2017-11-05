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
        <nav id="header" class="level">
            <div class="level-item has-text-centered">
                <div>
                    <p class="title">Today At A Glance</p>
                </div>
            </div>
        </nav>
        <nav id="stats" class="level">
            <level-item heading="Hatchets Today" title="6" />
            <level-item heading="Responses" title="123" />
            <level-item heading="Facts Added" title="12" />
            <level-item heading="New Users" title="789" />
        </nav>
        <section class="category" id="new">
            <h1 class="title">New</h1>
            <div class="columns">
                <card 
                    background-src="https://www.rd.com/wp-content/uploads/sites/2/2016/03/national-cereal-day-opener.jpg"
                    title="Cereal or Milk first?" 
                    expiration="8" 
                    :tags="['politics', 'cereal']" 
                    :left="{'name': 'Milk', 'responses': 12}" 
                    :right="{'name': 'Cereal', 'responses': 56}" 
                    :starred="false" />
            </div>
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
import Card from '../components/Card.vue';

export default {
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
        },
        Card
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

    .level#header {
        padding: 20px;
        margin-bottom: 0;
        background: white;
    }

    .level#stats {
        padding: 20px;
        background: white;
    }
</style>