<template >
    <div class="pagination-container">
        <span v-for="(page, n) of paginationArray" v-bind:key="'pagination' + n" @click="() => goToPage(n+1)"
            class="c-pointer">
            {{maxPerView * block + n + 1}} &nbsp;
        </span>
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
        goToPage(page) {
            this.$router.push(this.$route.path + '?page=' + page)
            /** something to do on click */
            this.$emit("onClick")
        }
    }
}
</script>
<style lang="scss" scoped>
    div {
        background: white;
        opacity: 0.5;
        height: 80px;
    }
    .pagination-container {
        display: flex;
        font-size: 25px;
    }
</style>