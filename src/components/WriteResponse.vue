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
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br>
                <div class="field">
                    <div class="control">
                        <textarea class="textarea" placeholder="Start Typing..."></textarea>
                    </div>
                </div>
            </div>
            <div id="references">
                <h2 class="subtitle">References</h2>
                <ul>
                    <li v-for="y in 3" :key="y">
                        <span>Example Reference</span>
                        <span class="icon is-small pull-right">
                            <i class="fa fa-times"></i>
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <a class="button is-info is-static pull-right">
                    <span class="icon is-small is-left">
                        <i class="fa fa-send"></i>
                    </span>
                    <span>Submit</span>
                </a>
                <div>
                    You must like a post from both sides before submitting your own.
                </div>
            </div>
        </div>
    </article>
</div>
</template>

<style>
    #references {
        padding-bottom: 10px;
    }

    #references > ul {
        padding-left: 30px;
        list-style-type: circle;
    }

</style>