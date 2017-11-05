<template>
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
                <strong>{{ response.nickname }}</strong> <small>@{{ response.username }}</small> <small>{{ response.time }}m ago</small>
                <br>
                <p v-html="response.body" />
                </p>
            </div>
            <div class="pull-right">
                <a class="button is-primary" v-on:click="liked">
                    <span class="icon is-small is-left">
                        <i v-if="isLiked" class="fa fa-heart"></i>
                        <i v-else class="fa fa-heart-o"></i>
                    </span>
                    <span>Like ({{ response.likes }})</span>
                </a>
                <a class="button is-info">
                    <span class="icon is-small is-left">
                        <i class="fa fa-reply"></i>
                    </span>
                    <span>Rebute</span>
                </a>
                <a class="button is-danger">
                    <span class="icon is-small is-left">
                        <i class="fa fa-exclamation-circle"></i>
                    </span>
                    <p>Report</p>
                </a>
            </div>
        </div>
    </article>
</div>
</template>

<script>
export default {
    props: ["response", "isLiked"],
    methods: {
        liked: function() {
            this.isLiked = !this.isLiked;
            if (this.isLiked) {
                this.response.likes++;
                this.$emit("liked");
            }
            else {
                this.response.likes--;
                this.$emit("unliked");
            }
        }
    }
} 
</script>