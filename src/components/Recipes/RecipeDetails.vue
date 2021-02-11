<template>
    <section class="food-container">
        <h1 class="main-title">{{ details.title }}</h1>
        <header-content 
            :Image="details.image"
            :extendedIngredients="details.extendedIngredients"
        />
        <section class="body-content">
            <Summary :summaryText="details.summary" />
            <AnalyzedInstructions 
                v-if="details.analyzedInstructions.length > 0"
                :instructions="details.analyzedInstructions"/>
        </section>
    </section>
</template>
<script>
import Summary from './includes/RecipeDetailsIncludes/Summary'
import HeaderContent from './includes/RecipeDetailsIncludes/DetailHeader'
import AnalyzedInstructions from './includes/RecipeDetailsIncludes/AnalyzedInstructions'
import { mapGetters } from 'vuex'
export default {
    name: 'RecipeDetails',
    components:{
        Summary,
        HeaderContent,
        AnalyzedInstructions,
    },
    props: { 
        recipeId: Number
    },
    computed: {
        ...mapGetters({
            RecipeDetails: 'getRecipeDetails',
        }),
        details(){
            return this.findRecipeById()
        },
    },
    methods: {
        findRecipeById(){
            return this.RecipeDetails.find(item => item.id == this.recipeId)
        },
    },
}
</script>
<style lang="scss" scoped>
.food-container{
    min-height: 70vh;
    margin-bottom: 3em;
    .main-title{
        text-align: center;
        font-size: 3.6em;
        margin: .8em 0;
    }
    .body-content{
        min-height: 20vh;
    }
}

@media(max-width: $mobile-screen){
.food-container{
    width: 100vw;
}
}
</style>