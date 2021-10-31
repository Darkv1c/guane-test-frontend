<template lang="">
    <div :class="'card-container-' + identifier + ' c-pointer'"
        @mouseover="()=>setShowText(true)" @mouseleave="()=>setShowText(false)">
        <div :class="'card-sub-container'" :style="`background-image: url('${object.image}')`">
            <div v-if="showText" class="card-text-container">
                <span>Name: {{object.name}}</span>
                <span> </span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showText: false,
            showTextFunction: null
        }
    },
    props: {
        /** Info to show in the cart */
        object: Object,
        /** Indicates number of the card */
        identifier: Number
    },
    methods: {
        setShowText(show) {
            clearTimeout(this.showTextFunction)
            this.showTextFunction = setTimeout(() => { this.showText = show }, 250);            
        }
    }
}
</script>
<style lang="scss">
    @for $i from 0 to 10 {
        .card-container-#{$i}{
            max-width: 250px;
            min-width: 150px;
            border-radius: 40px;
            margin: 12px;
            aspect-ratio: 1/1;
            flex: 0 1 25%;
            .card-sub-container{
                background-size: cover;
                transition: all .5s ease-in-out 0s;
                min-width: 100%;
                min-height: 100%;
                border-radius: 40px;
                position: relative  ;
                .card-text-container{
                    background-color: rgba(antiquewhite, .5);
                    min-width: 100%;
                    min-height: 100%;
                    border-radius: 40px;
                    position: absolute;
                    transform: rotatey(180deg);
                    box-sizing: border-box;
                    padding: 10%;
                }
            }
            &:hover > .card-sub-container {
                transform: rotatey(180deg);
                transition: all .5s ease-in-out 0s;
            }
        }
    }
</style>