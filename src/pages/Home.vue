<template>
    <div>
        <Navbar/>
        <section id="jumbotron" class="hero is-dark is-large">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    {{ hero.title }}
                </h1>
                <h2 class="subtitle">
                    {{ hero.subtitle }}
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
            <level-item v-for="(title, heading) in stats" :key="heading" :heading="heading" :title="title" />
        </nav>
        <!-- Gonna need an umbrella for this, we didn't stay DRY -->
        <section class="category" id="new">
            <h1 class="title">New</h1>
            <div class="columns is-multiline">
                <div class="column is-one-quarter"  
                    v-for="hatchet in hatchets.new"
                    :key="hatchet.title"
                >
                    <card
                        :background-src="hatchet.bg"
                        :title="hatchet.title" 
                        :expiration="hatchet.expires" 
                        :tags="hatchet.tags" 
                        :left="hatchet.left" 
                        :right="hatchet.right" 
                        :starred="hatchet.starred"
                        @leftClicked="selectHatchet(hatchet.id)"
                        @rightClicked="selectHatchet(hatchet.id)"
                        @clicked="selectHatchet(hatchet.id)"
                    />
                </div>
            </div>
        </section>
        <section class="category" id="popular">
            <h1 class="title">Popular</h1>
            <div class="columns is-multiline">
                <div class="column is-one-quarter"  
                    v-for="hatchet in hatchets.popular"
                    :key="hatchet.title"
                >
                    <card
                        :background-src="hatchet.bg"
                        :title="hatchet.title" 
                        :expiration="hatchet.expires" 
                        :tags="hatchet.tags" 
                        :left="hatchet.left" 
                        :right="hatchet.right" 
                        :starred="hatchet.starred"
                        @leftClicked="selectHatchet(hatchet.id)"
                        @rightClicked="selectHatchet(hatchet.id)"
                        @clicked="selectHatchet(hatchet.id)"
                    />
                </div>
            </div>
        </section>
       <section class="category" id="for-you">
            <h1 class="title">For You</h1>
            <div class="columns is-multiline">
                <div class="column is-one-quarter"  
                    v-for="hatchet in hatchets.forYou"
                    :key="hatchet.title"
                >
                    <card
                        :background-src="hatchet.bg"
                        :title="hatchet.title" 
                        :expiration="hatchet.expires" 
                        :tags="hatchet.tags" 
                        :left="hatchet.left" 
                        :right="hatchet.right" 
                        :starred="hatchet.starred"
                        @leftClicked="selectHatchet(hatchet.id)"
                        @rightClicked="selectHatchet(hatchet.id)"
                        @clicked="selectHatchet(hatchet.id)"
                    />
                </div>
            </div>
        </section>
        <section class="category" id="recently-buried">
            <h1 class="title">Recently Buried</h1>
            <div class="columns is-multiline">
                <div class="column is-one-quarter"  
                    v-for="hatchet in hatchets.new"
                    :key="hatchet.title"
                >
                    <card
                        :background-src="hatchet.bg"
                        :title="hatchet.title" 
                        :expiration="hatchet.expires" 
                        :tags="hatchet.tags" 
                        :left="hatchet.left" 
                        :right="hatchet.right" 
                        :starred="hatchet.starred"
                        @leftClicked="selectHatchet(hatchet.id)"
                        @rightClicked="selectHatchet(hatchet.id)"
                        @clicked="selectHatchet(hatchet.id)"
                    />
                </div>
            </div>
        </section>
        <section class="category" id="starred">
            <h1 class="title">Starred</h1>
            <div class="columns is-multiline">
                <div class="column is-one-quarter"  
                    v-for="hatchet in hatchets.starred"
                    :key="hatchet.title"
                >
                    <card
                        :background-src="hatchet.bg"
                        :title="hatchet.title" 
                        :expiration="hatchet.expires" 
                        :tags="hatchet.tags" 
                        :left="hatchet.left" 
                        :right="hatchet.right" 
                        :starred="hatchet.starred"
                        @leftClicked="selectHatchet(hatchet.id)"
                        @rightClicked="selectHatchet(hatchet.id)"
                        @clicked="selectHatchet(hatchet.id)"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import Navbar from '../components/Navbar.vue';

export default {
    data: () => {
        return {
            hero: {
                title: "Cereal or breakfast?",
                subtitle: "TBD"
            },
            stats: {
                "Hatchets": 6, 
                "Responses": 12,
                "Facts Added": 30,
                "New Users": 3
            },
            hatchets: {
                new: [
                    {
                        id: 0,
                        bg: "https://www.rd.com/wp-content/uploads/sites/2/2016/03/national-cereal-day-opener.jpg",
                        title: "Cereal or Milk first?",
                        expires: 8,
                        tags: ["cereal", "milk"],
                        left: {
                            name: "Cereal",
                            responses: 2
                        },
                        right: {
                            name: "Milk",
                            responses: 4
                        },
                        starred: false
                    }
                ],
                popular: [

                ],
                forYou: [
                    {
                        id: 0,
                        bg: "https://www.rd.com/wp-content/uploads/sites/2/2016/03/national-cereal-day-opener.jpg",
                        title: "Cereal or Milk first?",
                        expires: 8,
                        tags: ["cereal", "milk"],
                        left: {
                            name: "Cereal",
                            responses: 2
                        },
                        right: {
                            name: "Milk",
                            responses: 4
                        },
                        starred: false
                    }

                ],
                recentlyBuried: [

                ],
                starred: [
                    {
                        id: 0,
                        bg: "https://www.rd.com/wp-content/uploads/sites/2/2016/03/national-cereal-day-opener.jpg",
                        title: "Cereal or Milk first?",
                        expires: 8,
                        tags: ["cereal", "milk"],
                        left: {
                            name: "Cereal",
                            responses: 2
                        },
                        right: {
                            name: "Milk",
                            responses: 4
                        },
                        starred: false
                    }

                ]
            }
        };
    },
    methods: {
        log: function(text) {
            console.log(text);
        },
        selectHatchet: function(id) {
            this.$router.push(`/hatchet/${id}`);
        }
    },
    components: {
        "level-item": {
            props: ["heading", "title"],
            template: `
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">{{ heading }}</p>
                        <p class="title">{{ title }}</p>
                    </div>
                </div>`
        },
        Card,
        Navbar
    }
};
</script>

<style scoped lang="scss">
    .navbar {
        z-index: 5;
    }

    #jumbotron {
        background: url("https://fortunedotcom.files.wordpress.com/2017/03/wgl-2017-lebron-james.jpg?w=840&h=485&crop=1");
        background-repeat: no-repeat;
        background-size: cover;
    }

    #jumbotron > .hero-body {
        background: rgba(2, 2, 2, 0.4);
    }

    .category {
        padding-left: 60px;
        padding: 40px;
    }

    .category > card {
        margin: 20px;
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