<template>
    <header>
       <nav class="navbar">
           <h1 class="navbar-brand">All About Foods</h1>
           <ul class="navbar-nav">
               <router-link class="navbar-nav-item" :to="{name: 'Recipes'}"><li>Search Recipes</li></router-link>
           </ul>
        </nav> 
    </header>
</template>
<style lang="scss" scoped>
.navbar{
    height: 6.5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: $footer-bg;
    color: white;
    &-brand{
        font-size: 2em;
    }
    &-nav{
        display: flex;
        .router-link-active{
            background-color: $navbar-hover-color;
        }
        &-item{
            list-style: none;
            margin: 0 .5em;
            padding: .7em;
            color: white;
            font-size: 1.3em;
            transition: all .3s ease;
            border-radius: 5px;
            &:hover{
                background-color: $navbar-hover-color;
                cursor: pointer;
            }           
        }
    }
}
@media(max-width: $mobile-screen) {
    .navbar{
        flex-direction: column;
        height: 28vh;
        &-nav{
            flex-direction: column;
            &-item{
                text-align: center;
            }
        }
    }
}
</style>