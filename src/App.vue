<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

//default
body {
  margin: 0;
  font-family: 'Indie Flower', cursive;
  color: rgb(var(--clr-black));
  font-weight: 600;
}

    ::-webkit-scrollbar {
        width: 5px;
    }
    
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(var(--clr-black), 0.5);
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
  --clr-green: 107, 254, 68;
  --clr-black: 27, 32, 26;
}

#app {
  width: 100vw;
  min-height: 100vh;
  background-image: url('./assets/background.png');
  background-position: 50% 50%;
  background-size: 100%, 100%;
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
  padding: 2%
}
.neon-text{  
  color: transparent;
  -webkit-text-stroke: 1.5px rgb(var(--clr-green));
}

</style>
