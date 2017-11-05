<template>
<div class="card">
    <div class="card-content" v-on:click.capture="clicked">
        <div class="content" :style="`background: url('${backgroundSrc}'); background-repeat: no-repeat; background-size: cover;`">
            <div class="inner-content">
                <h1 class="title">{{ title }}</h1>
                <h3 class="subtitle"><b>{{ expiration }}</b> day(s) left</h3>
                <div class="tags">
                    <span class="tag is-rounded" v-for="tag in tags" :key="tag">#{{ tag }}</span>
                </div>
            </div>
        </div>
    </div>
    <footer class="card-footer">
        <a class="card-footer-item" id="left" v-on:click="$router.push('/hatchet/16')">
            {{ left.name }} 
            <span class="tag is-rounded">{{ left.responses }}</span>
        </a>
        <!-- <a class="card-footer-item" v-on:click="star">
            <span class="icon is-small is-left">
                <i v-if="mutableStarred" class="fa fa-star"></i>
                <i v-else class="fa fa-star-o"></i>
            </span>  
            Star
        </a> -->
        <a class="card-footer-item" id="right" v-on:click="rightClicked">
            {{ right.name }} 
            <span class="tag is-rounded">{{ right.responses }}</span>
        </a>    
    </footer>
</div>
</template>

<script>
export default {
    props: ["background-src", "title", "expiration", "tags", "left", "right", "starred"],
    data: function() {
        return {
            mutableStarred: this.starred
        }
    },
    methods: {
        star: function() {
            this.mutableStarred = !this.mutableStarred;
        },
        clicked: function() {
            this.$emit("clicked");
        },
        leftClicked: function() {
            this.$emit("leftClicked");
        },
        rightClicked: function() {
            this.$emit("rightClicked");
        }
    }
}
</script>


<style scoped lang="scss">
    @import "~bulma/bulma";

    .card {
        cursor: pointer;
    }

    .card-content {
        padding: 0;
    }

    .card-content > .content {
        height: 100%;
    }

    .inner-content {
        background:rgba(2, 2, 2, 0.4); 
        padding: 40px;
    }

    .inner-content > * {
        color: white !important;
    }

    .title {
        padding-bottom: 10px;
    }

    .card-footer-item#left {
        background-color: $primary;
    } 
    
    .card-footer-item#right {
        background: $danger;
    }

    .card-footer-item#left, .card-footer-item#right {
        color: white !important;
    }

    .card-footer-item > .tag {
        margin-left: 5px;
    }

    .fa-star, .fa-star-o {
        margin-right: 15px;
    }

</style>