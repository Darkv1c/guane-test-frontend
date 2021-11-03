<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">

//default
body {
  margin: 0;
  color: rgb(var(--clr-black));
  font-weight: 600;
}

    ::-webkit-scrollbar {
        width: 5px;
    }
    
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(var(--clr-black), 0.5);
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: rgba(var(--clr-green), 0.8);
        border-radius: 50px;
        &:hover{
          background-color: rgba(var(--clr-green), 1);
        }
    }

//variables
:root{
  //colors
  --clr-green: 122, 253, 77;
  --clr-black: 27, 32, 26;

  //fonts
  --font-size-m: 25px
}

#app {
  width: 100vw;
  min-height: 100vh;
  background-image: url('./assets/background.png');
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
}

//common classes
.d-flex{
  display: flex;
  flex-direction: column;
}

.flex-1{
  flex: 1
}

.c-pointer{
  cursor: pointer;
}

.container{
  box-sizing: border-box;
  padding: 2% 4%
}
.neon-text{  
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(var(--clr-green));
  letter-spacing: 2px;
}

//Animation
    @keyframes distortion {
        0% {
            -webkit-text-stroke: 1.5px rgba(var(--clr-green), 1);
        }
        25%{
            color: lightskyblue;
            -webkit-text-stroke: 1.5px violet;
        }
        50% {
            color: lightskyblue;
            -webkit-text-stroke: 1.5px rgb(var(--clr-green));
        }
        75%{
            color: lightskyblue;
            -webkit-text-stroke: 1.5px violet;
        }
        100%{
            -webkit-text-stroke: 1.5px rgb(var(--clr-green));
        }
    }
</style>
