<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu">
                <div class="navbar-item">
                    <a v-on:click="$router.go(-1)" class="button is-danger">
                        <span class="icon is-small is-left">
                            <i class="fa fa-times"></i>
                        </span>
                    </a>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <a class="button is-danger">
                            <span class="icon is-small is-left">
                                <i class="fa fa-exclamation-circle"></i>
                            </span>
                            <p>Report</p>
                        </a>
                    </div>
                    <div class="navbar-item">
                        <a class="button is-primary">
                            <span class="icon is-small is-left">
                                <i class="fa fa-share"></i>
                            </span>
                            <p>Share</p>
                        </a>
                    </div>
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
                    <p>{{ totalLeftLikes }}</p>
                    <p>{{ totalRightLikes }}</p>
                    <div class="column is-one-half">
                        <h1 class="title has-text-centered side">Left</h1>
                        <WriteResponse />
                        <Response v-for="(response, index) in left" :response="response" :key="index" @liked="totalLeftLikes += 1" @unliked="totalLeftLikes -= 1" />
                    </div>
                    <div class="column is-one-half">
                        <h1 class="title has-text-centered side">Right</h1>
                        <WriteResponse />
                        <Response v-for="(response, index) in right" :response="response" :key="index" @liked="totalRightLikes++" @unliked="totalRightLikes--" />                    
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Response from "../components/Response.vue";
import WriteResponse from "../components/WriteResponse.vue";

export default {
    data: () => {
        return {
            totalLeftLikes: 0,
            totalRightLikes: 0,
            left: [
                {
                    nickname: "john lee",
                    username: "johnree419",
                    time: 31,
                    body: "Who puts milk first?  You have to put the cereal first because if you don't, the cereal gets soggy and disgusting, and no one wants to eat soggy, gross cereal.  Also, you don't want the sugar to disolve in the milk because then the cereal won't be sweet anymore and it'll just be in the milk.",
                    likes: 23,
                    references: [
                        {
                            indexes: [0, 12],
                            title: "No reference",
                            source: "N/A",
                            url: "N/A",
                            validity: 0.00
                        }
                    ]
                }
                
            ],
            right: [
            {
                    nickname: "milk first",
                    username: "milk first",
                    time: 16,
                    body: "Milk first, do you put humans in the pool first or do you put the water in the pool first?  Exactly, check yourself before you wreck yourself.",
                    likes: 11,
                    references: [
                        {
                            indexes: [0, 12],
                            title: "No reference",
                            source: "N/A",
                            url: "N/A",
                            validity: 0.00
                        }
                    ]
                },
                {
                    nickname: "billy mays",
                    username: "get_oxiclean",
                    time: 59,
                    body: "I put them in at the same time.  I saw it on a Frosted Flakes commercial and it looked pretty cool.  ",
                    likes: 53,
                    references: [
                        {
                            indexes: [0, 12],
                            title: "Frosted Flakes Commercial.",
                            source: "Kelloggs",
                            url: "http://frostedflakes.com",
                            validity: 0.89
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        log: function(text) {
            console.log(text);
        }
    },
    components: {
        Response, WriteResponse
    }
}
</script>

<style scoped lang="scss">
    .navbar {
        z-index: 20;
    }

    .hero-body {
        background: rgba(2, 2, 2, 0.7);
    }

    .title {
        padding-bottom: 10px;
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
