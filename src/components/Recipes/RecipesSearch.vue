<template>
    <section class="container">
        <base-search-section></base-search-section>
        <section class="card-container">
            <base-receipe-card
                v-for="recipe in recipeDetails" :key="recipe.id"
                :title="recipe.title"
                :image="recipe.image"
                :readyInMinutes="recipe.readyInMinutes"
            ></base-receipe-card>
            <base-receipe-card
                v-for="recipe in recipeDetails" :key="recipe.id"
                :title="recipe.title"
                :image="recipe.image"
                :readyInMinutes="recipe.readyInMinutes"
            ></base-receipe-card>
            <base-receipe-card
                v-for="recipe in recipeDetails" :key="recipe.id"
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
    mounted() {
        // console.log(process.env.VUE_APP_API_KEY_URL)
        // this.axios.get('recipes/complexSearch?apiKey=820c397d13094ee6a0e1780f715b0558&query=pasta&addRecipeInformation=true&fillIngredients=true')
        // .then(result => console.log(result))
    },
}
</script>
<style lang="scss" scoped>
.container{
    min-height: 85vh;
    width: 60%;
    margin: 2em auto 0 auto;
    .card-container{
        display: grid;
        gap: 2em;
        width: 100%;
        // margin: auto;
        // justify-content: center;
        // justify-self: center;
        grid-template-columns: repeat(2, auto);
    }
}
</style>