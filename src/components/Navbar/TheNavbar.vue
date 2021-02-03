<template>
    <header>
       <nav class="navbar">
           <h1 class="navbar-brand">All About Foods</h1>
           <ul class="navbar-nav">
               <router-link class="navbar-nav-item" :to="{name: 'Recipes'}"><li>Search Recipes</li></router-link>
               <a class="navbar-nav-item" href="#"><li>Ttrgbbbbeszt</li></a>
               <a class="navbar-nav-item" href="#"><li>Őfdsdfds</li></a>
               <a class="navbar-nav-item" href="#"><li>Űfjfjds</li></a>
           </ul>
        </nav> 
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.navbar{
    height: 6.5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #17202A;
    color: white;
    &-brand{
        font-size: 2em;
    }
    &-nav{
        display: flex;
        .router-link-active{
            background-color: #A04000;
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
                background-color: #A04000;
                cursor: pointer;
            }           
        }
    }
}
</style>