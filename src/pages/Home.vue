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
                    <p class="title">New Today</p>
                </div>
<div id="home" class="box alt">
    <div class="row 50% uniform">
        <div class="6u topic-panel shadow">
            <div class="image fit">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/90/b2/35/las-vegas-strip.jpg" alt="" />
            </div>
            <h2>{{headline}}</h2>
            <p><span class="large-num">3</span> days left</p>
            <div>
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
                title: "Today's Hot Hatchet",
                subtitle: "Can Lebron ever pass Jordan as the GOAT with a 2-4 record in the Finals?"
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
                            responses: 18
                        },
                        right: {
                            name: "Milk",
                            responses: 3
                        },
                        starred: true
                    },                     {
                        id: 1,
                        bg: "https://thedailyblog.co.nz/wp-content/uploads/2017/02/unnamed-7.jpg",
                        title: "Is climate change an issue that humans should put effort into solving?",
                        expires: 12,
                        tags: ["climate change", "society", "politics"],
                        left: {
                            name: "YES",
                            responses: 21
                        },
                        right: {
                            name: "NO",
                            responses: 8
                        },
                        starred: true
                    },                     {
                        id: 2,
                        bg: "http://www.guinnessworldrecords.com/Images/Michael-Jordan-main_tcm25-15662.jpg",
                        title: "Can LeBron ever pass Jordan as the GOAT with a 2-4 record in the finals?",
                        expires: 4,
                        tags: ["sports", "basketball"],
                        left: {
                            name: "YES",
                            responses: 5
                        },
                        right: {
                            name: "NO",
                            responses: 6
                        },
                        starred: false
                    },                     {
                        id: 3,
                        bg: "https://www.computerhope.com/issues/pictures/mac-vs-pc.jpg",
                        title: "Macs or Windows?",
                        expires: 8,
                        tags: ["technology", "computers"],
                        left: {
                            name: "Windows",
                            responses: 18
                        },
                        right: {
                            name: "Mac",
                            responses: 11
                        },
                        starred: false
                    },                    {
                        id: 4,
                        bg: "https://vignette.wikia.nocookie.net/blogclan-2/images/c/c6/Blackboard.png/revision/latest?cb=20160519224101",
                        title: "Issues Surrounding Common Core",
                        expires: 25,
                        tags: ["education", "society", "children"],
                        left: {
                            name: "INEFFECTIVE",
                            responses: 19
                        },
                        right: {
                            name: "EFFECTIVE",
                            responses: 14
                        },
                        starred: false
                    },{
                        id: 5,
                        bg: "https://i.amz.mshcdn.com/qWsvJEjk_3WX87dN-MKQB41gBVI=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F498047%2F377da321-b088-4497-8d52-4fad8bbf47ca.jpg",
                        title: "Does Watching Spongebob Make You Dumber?",
                        expires: 12,
                        tags: ["television", "society", "children"],
                        left: {
                            name: "YES",
                            responses: 8
                        },
                        right: {
                            name: "NO",
                            responses: 17
                        },
                        starred: false
                    }, {
                        id: 6,
                        bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB85HQ1Git0u1-0AdzvprD2G8dcDFVHrhqLG511EyTYHcTIxLj",
                        title: "Do Vaccines Cause Autism?",
                        expires: 17,
                        tags: ["medicine", "society"],
                        left: {
                            name: "NO",
                            responses: 38
                        },
                        right: {
                            name: "YES",
                            responses: 3
                        },
                        starred: false
                    }
                ],
                popular: [
                  {
                        id: 6,
                        bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB85HQ1Git0u1-0AdzvprD2G8dcDFVHrhqLG511EyTYHcTIxLj",
                        title: "Do Vaccines Cause Autism?",
                        expires: 17,
                        tags: ["medicine", "society"],
                        left: {
                            name: "NO",
                            responses: 38
                        },
                        right: {
                            name: "YES",
                            responses: 3
                        },
                        starred: false
                    },
                    {
                        id: 4,
                        bg: "https://vignette.wikia.nocookie.net/blogclan-2/images/c/c6/Blackboard.png/revision/latest?cb=20160519224101",
                        title: "Issues Surrounding Common Core",
                        expires: 25,
                        tags: ["education", "society", "children"],
                        left: {
                            name: "INEFFECTIVE",
                            responses: 19
                        },
                        right: {
                            name: "EFFECTIVE",
                            responses: 14
                        },
                        starred: false
                    },                {
                        id: 1,
                        bg: "https://thedailyblog.co.nz/wp-content/uploads/2017/02/unnamed-7.jpg",
                        title: "Is climate change an issue that humans should put effort into solving?",
                        expires: 12,
                        tags: ["climate change", "society", "politics"],
                        left: {
                            name: "YES",
                            responses: 21
                        },
                        right: {
                            name: "NO",
                            responses: 8
                        },
                        starred: true
                    }       
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
                        starred: true
                    }, 
                    {
                        id: 4,
                        bg: "https://vignette.wikia.nocookie.net/blogclan-2/images/c/c6/Blackboard.png/revision/latest?cb=20160519224101",
                        title: "Issues Surrounding Common Core",
                        expires: 25,
                        tags: ["education", "society", "children"],
                        left: {
                            name: "INEFFECTIVE",
                            responses: 19
                        },
                        right: {
                            name: "EFFECTIVE",
                            responses: 14
                        },
                        starred: false
                    },                {
                        id: 1,
                        bg: "https://thedailyblog.co.nz/wp-content/uploads/2017/02/unnamed-7.jpg",
                        title: "Is climate change an issue that humans should put effort into solving?",
                        expires: 12,
                        tags: ["climate change", "society", "politics"],
                        left: {
                            name: "YES",
                            responses: 21
                        },
                        right: {
                            name: "NO",
                            responses: 8
                        },
                        starred: true
                    } 
                ],
                recentlyBuried: [
                    {
                        id: 4,
                        bg: "https://vignette.wikia.nocookie.net/blogclan-2/images/c/c6/Blackboard.png/revision/latest?cb=20160519224101",
                        title: "Issues with PC Culture",
                        expires: 25,
                        tags: ["education", "society"],
                        left: {
                            name: "PC Culture IS INEFFECTIVE",
                            responses: 25
                        },
                        right: {
                            name: "PC Culture IS EFFECTIVE",
                            responses: 19
                        },
                        starred: false
                    }
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
                        starred: true
                    },                     {
                        id: 1,
                        bg: "https://thedailyblog.co.nz/wp-content/uploads/2017/02/unnamed-7.jpg",
                        title: "Is climate change an issue that humans should put effort into solving?",
                        expires: 12,
                        tags: ["climate change", "society", "politics"],
                        left: {
                            name: "YES",
                            responses: 21
                        },
                        right: {
                            name: "NO",
                            responses: 8
                        },
                        starred: true
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
        background: rgba(2, 2, 2, 0.6);
    }

    .title {
        padding-bottom: 15px;
    }

    .card-footer {
        position: relative;
        bottom: 0;
    }

    .category {
        padding-left: 60px;
        padding: 40px;
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
=======
    Vue.component('home', {
      template: '#home',
      data: function () {
        return {
          dragging: false,
          // quadratic bezier control point
          c: { x: 160, y: 160 },
          // record drag start point
          start: { x: 0, y: 0 }
        }
      }
    });
</script>

<!-- Helvetica, italicized -->

<style>
    .topic-panel img {
        height: 174px;
        object-fit: cover;
        -webkit-filter: brightness(0.5);
        filter: brightness(0.5);
        position: absolute;
    }
    .topic-panel h2 {
        color: white;
        position: absolute;
        padding-left: 16px;
        margin-top: -12px;
        font-size: 18px;
        max-width: 400px;
    }
    .topic-panel p {
        color: white;
        position: absolute;
        padding-left: 16px;
        margin-top: 90px;
        font-size: 14px;
        max-width: 400px;
    }
    .topic-panel .large-num {
        font-size: 24px;
        font-weight: bold;
    }
    /* The slow way */
    .shadow {
      box-shadow: 0 1px 2px rgba(0,0,0,0.15);
      transition: box-shadow 0.3s ease-in-out;
    }

    /* Transition to a bigger shadow on hover */
    .shadow:hover {
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
</style>