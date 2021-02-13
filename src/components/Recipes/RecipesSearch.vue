<template>
    <section class="container">
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
    max-width: 55%;
    margin: 2em auto 0 auto;
    .card-container{
        display: grid;
        gap: 2em;
        width: 100%;
        grid-template-columns: auto auto;
        margin-bottom: 2em;
    }
}

@media(max-width: $mobile-screen){
    .container{
        width: 100vw;
        margin: 0;
        .card-container{
            grid-template-columns: 90%;
            width: 100vw;
            justify-content: center;
        }
    }
}

@media (max-width: $large-screen) {
    .container{
        max-width: 80%;
    }
}
</style>