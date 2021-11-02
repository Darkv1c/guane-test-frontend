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
        position: relative;
        .header-title{
            pointer-events: none;
            margin: auto;
            font-size: 50px;
            font-weight: 800;
            max-height: 100%;
        }
        span{
            display: flex;
            align-items: center;
        }
        &::after{
            content: '';
            display: block;
            min-width: 100%;
            min-height: 5px;
            animation: loading 3s alternate infinite forwards;
            position: absolute;
            bottom: 0;
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