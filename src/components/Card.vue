<template lang="">
    <div :class="'card-container c-pointer card-container-' + identifier"
        @mouseover="()=>setShowText(true)" @mouseleave="()=>setShowText(false)" @click="goToDetails">
        <div :class="'card-sub-container neon-text card-sub-container-' + identifier" :style="`background-image: url('${object.image}')`">
            <div v-show="showText" class="card-text-container d-flex">
                <span>Name: {{object.name}}</span>
                <span>Species: {{object.species}} </span>
                <span>Status: {{object.status}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'

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
        ...mapMutations('character', ['setCurrentCharacter']),
        setShowText(show) {
            clearTimeout(this.showTextFunction)
            this.showTextFunction = setTimeout(() => { this.showText = show }, 230);    
        },
        goToDetails(){
            this.setCurrentCharacter(this.object)
            this.$router.push('/character/' + this.object.id)
        }
    }
}
</script>
<style lang="scss" scoped>
    .card-container{
        max-width: 250px;
        max-height: 250px;
        min-width: 150px;
        min-height: 150px;
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
                background: linear-gradient(to bottom, rgba(var(--clr-black), .8), rgba(var(--clr-black), .5), rgba(var(--clr-black), .8), 
                rgba(var(--clr-black), .5), rgba(var(--clr-black), .8), rgba(var(--clr-black), .5));
                min-width: 100%;
                min-height: 100%;
                border-radius: 40px;
                position: absolute;
                transform: rotatey(180deg);
                box-sizing: border-box;
                padding: 10%;
                animation: gradientChange;
                animation-delay: 0;
                animation-duration: .25s;
                animation-iteration-count: infinite;
                animation-direction: alternate;
            }
        }
        @for $i from 0 to 10 {
            &:hover > .card-sub-container-#{$i} {
                transform: rotatey(180deg);
                transition: all .5s ease-in-out 0s;                
            }
        }
    }

    @keyframes gradientChange {
        $i: 0;
        $base: 0.6;
        $range: 0.3;
        
        @while $i <= 1  {
            #{$i*100 + "%"} {
                background: repeating-linear-gradient(to bottom, rgba(var(--clr-black), $base + ($range * $i)), 
                rgba(var(--clr-black), $base + ($range -  $range * $i)), rgba(var(--clr-black), $base + ($range * $i)), 
                rgba(var(--clr-black), $base + ($range -  $range * $i)) 5%);
            }
            $i: $i + 0.01
        }
    }

    @media screen and (max-width: $phone) {
        .card-container{
            display: flex;
            min-width: 100%;
            margin: 0;
            background: rgba(var(--clr-black), 0.5);
            max-height: 30px;
            border-radius: 0;
            position: relative;
            .card-sub-container{
                border-radius: 0;
                max-height: 100%;
                min-width: 0%;
                aspect-ratio: 1/1;
                position: static;
                &:hover{
                    transform: none;
                }
                .card-text-container{
                    position: absolute;
                    max-height: 100%;
                    display: flex !important;
                    justify-content: center;
                    left: 0;
                    transform: rotateY(0deg);
                    border-radius: 0;
                    animation: none;
                    background: transparent;
                    span{
                        max-width: 50%;
                    }
                }
            }
        }
        @for $i from 0 to 10 {
            .card-container-#{$i} {
                @if ($i%2==1) {
                    flex-direction: row-reverse;
                } @else {
                    background: rgba(white, 0.3);
                    text-align: end;
                    .card-text-container{
                        align-items: flex-end;
                    }
                }          
            }
        }
    }
</style>