<template>
<div class="card">
    <div class="card-content">
        <div class="content" :style="`background: url('${backgroundSrc}');`">
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
        <a href="#" class="card-footer-item">
            {{ left.name }} 
            <span class="tag is-rounded">{{ left.responses }}</span>
        </a>
        <a class="card-footer-item" v-on:click="star">
            <span class="icon is-small is-left">
                <i v-if="mutableStarred" class="fa fa-star"></i>
                <i v-else class="fa fa-star-o"></i>
            </span>  
            Star
        </a>
        <a href="#" class="card-footer-item">
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
        }
    }
}
</script>


<style scoped lang="scss">
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

    .card-footer-item > .tag {
        margin-left: 5px;
    }

    .fa-star, .fa-star-o {
        margin-right: 15px;
    }

</style>