<template>
<div class="box alt">
    <div class="row 50% uniform">
        <div class="6u topic-panel shadow">
            <div class="image fit">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/90/b2/35/las-vegas-strip.jpg" alt="" />
            </div>
            <h2>Should gun control laws be changed in the light of Las Vegas shootings?</h2>
            <p><span class="large-num">3</span> days left</p>
            <div>
                
            </div>
        </div>
    </div>
</div>
</template>

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