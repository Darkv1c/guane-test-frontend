<template >
    <div class="pagination-container">
        <span v-if="block" @click="goToPreviousBlock"> back </span>
        <span v-for="(page, n) of paginationArray" v-bind:key="'pagination' + n"
            @click="() => goToPage(maxPerView * block + n + 1)" class="c-pointer pag-index">
            {{maxPerView * block + n + 1}}
        </span>
        <span @click="goToNextBlock" > foward </span>
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
        background: white;
        opacity: 0.5;
        height: 80px;
        display: flex;
        font-size: 25px;
        justify-content: center;
        .pag-index{
            padding: 3px;
            margin: 0px 3px;
        }
    }
</style>