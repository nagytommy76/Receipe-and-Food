<template>
    <section class="container">
    <router-view></router-view>
        <base-search-section></base-search-section>
        <section class="card-container">
            <base-receipe-card
                v-for="recipe in recipeDetails" :key="recipe.id"
                :id="recipe.id"
                :title="recipe.title"
                :image="recipe.image"
                :readyInMinutes="recipe.readyInMinutes"
            ></base-receipe-card>
        </section>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
import BaseRecipeCard from './includes/BaseRecipeCard'
import BaseSearchSection from './includes/BaseSearchSection'
export default {
    name: 'RecipesSearch',
    computed:{
        ...mapGetters({
            recipeDetails: 'getRecipeDetails'
        }),
    },
    components:{
        'base-receipe-card' : BaseRecipeCard,
        'base-search-section' : BaseSearchSection,
    },
}
</script>
<style lang="scss" scoped>
.container{
    min-height: 85vh;
    width: 70%;
    margin: 2em auto 0 auto;
    .card-container{
        display: grid;
        gap: 2em;
        width: 100%;
        // margin: auto;
        // justify-content: center;
        // justify-self: center;
        grid-template-columns: auto auto;
    }
}
</style>