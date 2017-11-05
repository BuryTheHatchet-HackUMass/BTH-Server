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
                        <Response v-for="(response, index) in left" :response="response" :key="index" @liked="totalLeftLikes++" @unliked="totalLeftLikes--" />
                    </div>
                    <div class="column is-one-half">
                        <h1 class="title has-text-centered side">Right</h1>
                        <WriteResponse />
                        <Response v-for="(response, index) in left" :response="response" :key="index" @liked="totalRightLikes++" @unliked="totalRightLikes--" />                    
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
                    nickname: "Random User 1",
                    username: "randomUser1",
                    time: 31,
                    body: "garbage",
                    likes: 53,
                    references: [
                        {
                            indexes: [0, 12],
                            title: "The sky is blue.",
                            source: "NYT",
                            url: "http://google.com",
                            validity: 0.53
                        }
                    ]
                },
                {
                    nickname: "Random User 1",
                    username: "randomUser1",
                    time: 31,
                    body: "garbage",
                    likes: 53,
                    references: [
                        {
                            indexes: [0, 12],
                            title: "The sky is blue.",
                            source: "NYT",
                            url: "http://google.com",
                            validity: 0.53
                        }
                    ]
                },
                {
                    nickname: "Random User 1",
                    username: "randomUser1",
                    time: 31,
                    body: "garbage",
                    likes: 53,
                    references: [
                        {
                            indexes: [0, 12],
                            title: "The sky is blue.",
                            source: "NYT",
                            url: "http://google.com",
                            validity: 0.53
                        }
                    ]
                }
            ],
            right: [

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