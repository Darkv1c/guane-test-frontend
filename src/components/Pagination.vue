<template >
    <div class="pagination-container neon-text">
        <span v-if="block" @click="goToPreviousBlock" class="pag-index c-pointer"> Prev </span>
        <span v-for="(page, n) of paginationArray" v-bind:key="'pagination' + (maxPerView * block + n + 1)"
            @click="() => goToPage(maxPerView * block + n + 1)" class="c-pointer pag-index">
            <span v-if="(maxPerView * block + n + 1) <= lastIndex">{{maxPerView * block + n + 1}}</span>
        </span>
        <span v-if="!isLastBlock" @click="goToNextBlock" class="pag-index c-pointer"> Next </span>
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
        /** Range of page visible in the paginator */
        maxPerView: {type: Number, default: 5 },
        /** Last page avaliable */
        lastIndex: {type: Number, default: 100}
    },
    computed: {
        /** It makes an array with a length equal to maxPerView */
        paginationArray() {
            let array = []
            array.length = this.maxPerView
            return array
        },
        isLastBlock() {
            return this.block === Math.trunc(this.lastIndex / this.maxPerView )
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
        font-family: 'Courier New', Courier, monospace;
        font-weight: 800;
        font-size: var(--font-size-m);
        height: 100px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding: 10px;
        max-width: 100vw;
        overflow: hidden;
        position: relative;
        .pag-index{            
            padding: 3px;
            margin: 5px 3px;
            animation: distortion .1s 0s forwards;
        }
        &::before{
            content: '';
            background: beige;
            position: absolute;
            top: 0;
            min-width: 100%;
            min-height: 5px;
            animation: loading 3s alternate infinite forwards;
        }
    }

        @keyframes loading {
        $i: 0;
        $step: .01;

        @while ($i * 100) <= 100 {
            #{$i*100 + "%"} {
                background: linear-gradient(to right, rgba(var(--clr-green), 1 - $i), rgba(var(--clr-green), $i), rgba(var(--clr-green), 1 - $i))
            }
            $i: $i + $step
        }
    }
</style>