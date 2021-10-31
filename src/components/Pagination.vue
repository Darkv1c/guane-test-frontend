<template >
    <div class="pagination-container neon-text">
        <span v-if="block" @click="goToPreviousBlock" class="pag-index c-pointer"> back </span>
        <span v-for="(page, n) of paginationArray" v-bind:key="'pagination' + (maxPerView * block + n + 1)"
            @click="() => goToPage(maxPerView * block + n + 1)" class="c-pointer pag-index">
            {{maxPerView * block + n + 1}}
        </span>
        <span @click="goToNextBlock" class="pag-index c-pointer"> foward </span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            block: 0
        }
    },
    props: {
        /** Total of pages */
        pages: {type: Number, default: 0 },
        /** Range of page visible in the paginator */
        maxPerView: {type: Number, default: 5 }
    },
    computed: {
        /** It makes an array with a length equal to maxPerView */
        paginationArray() {
            let array = []
            array.length = this.maxPerView
            return array
        }
    },
    methods: {
        /** It passes by query the page to go */
        async goToPage(page) {
            await this.$router.push(this.$route.path + '?page=' + page)
            /** something to do on click */
            this.$emit("onClick")
        },
        /** It shows previous indexes */
        goToPreviousBlock() {
            this.block -= 1
        },
        /** It shows next indexes */
        goToNextBlock() {
            this.block += 1
        }
    },
    created(){
        let page = this.$route.query.page || 1
        this.block = Math.trunc(page / this.maxPerView )
    }
}
</script>
<style lang="scss" scoped>
    .pagination-container {        
        background: rgba(var(--clr-black), 0.8);
        font-weight: 800;
        font-size: 30opx;
        font-family: 'Courier New', Courier, monospace;
        height: 100px;
        display: flex;
        font-size: 25px;
        justify-content: center;
        box-sizing: border-box;
        padding: 10px;
        max-width: 100vw;
        overflow: hidden;
        .pag-index{
            padding: 3px;
            margin: 0px 3px;
            animation-name: distortion;
            animation-duration: .1s;
            animation-delay: 0;
            animation-fill-mode: forwards;
        }
    }

    @keyframes distortion {
        0% {
            transform: skew(90deg, 90deg);
            -webkit-text-stroke: 1.5px rgb(var(--clr-green));
        }
        25%{
            transform: skew(0deg, 0deg);
            color: lightskyblue;
            -webkit-text-stroke: 1.5px violet;
        }
        50% {
            transform: skew(-90deg, -90deg);
            color: lightskyblue;
            -webkit-text-stroke: 1.5px rgb(var(--clr-green));
        }
        75%{
            transform: skew(10deg, 10deg);
            color: lightskyblue;
            -webkit-text-stroke: 1.5px violet;
        }
        100%{
            transform: skew(0deg);
            -webkit-text-stroke: 1.5px rgb(var(--clr-green));
        }
    }
</style>