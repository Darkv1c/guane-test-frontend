<template lang="">
    <div class="card-container c-pointer" :style="`background-image: url('${object.image}')`" 
        @mouseover="()=>setShowText(true)" @mouseleave="()=>setShowText(false)">
        <div v-if="showText" class="card-text-container">
            <span>Name: {{object.name}}</span>
            <span> </span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showText: false
        }
    },
    props: {
        /** info to show in the cart */
        object: Object
    },
    methods: {
        setShowText(show) {
            setTimeout(() => { this.showText = show }, 250);            
        }
    }
}
</script>
<style lang="scss">
    .card-container {
        background-size: cover;
        max-width: 250px;
        min-width: 150px;
        border-radius: 40px;
        margin: 12px;
        aspect-ratio: 1/1;
        flex: 0 1 25%;
        transition: all .5s ease-in-out 0s;
        &:hover {
            transform: rotatey(180deg);
            transition: all .5s ease-in-out 0s;
        }
        .card-text-container{
            background-color: rgba(antiquewhite, .5);
            min-width: 100%;
            min-height: 100%;
            border-radius: 40px;
        }
    }
</style>