<template >
    <div class="header-container neon-text">
        <div>
            <span v-if="onGoBack" @click="onGoBackClick" class="c-pointer">
                <span class="material-icons-outlined" style="font-size: 40px">
                    chevron_left
                </span>
                Go back
            </span>
        </div>
        <div class="header-title">
            <span v-if="title">
                {{title}}
            </span>
        </div>
        <div>
            
        </div>
    </div>
</template>
<script>
export default {    
    props: {
        /** Indicates what to do on back button click, if a route (string) is passed 
         it will redirect to that route, if a function is passed it will run it
        */
        onGoBack: [String, Function],
        /** Text to show in the header */
        title: String
    },
    methods: {
        onGoBackClick(){
            if (typeof this.onGoBack === "function"){
                return this.onGoBack()
            }
            this.$router.push(this.onGoBack)
        }
    },
}
</script>
<style lang="scss" scoped>
    .header-container {
        background: rgb(var(--clr-black), 0.8);
        height: 100px;
        min-width: 100%;
        flex-direction: row !important;
        align-items: center;
        font-size: var(--font-size-m);
        font-weight: 800;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        .header-title{
            pointer-events: none;
            margin: auto;
            font-size: 50px;
        }
        span{
            display: flex;
            align-items: center;
        }
    }
</style>