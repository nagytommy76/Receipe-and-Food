<template>
    <section class="food-container">
        <h1 class="main-title">{{ details.title }}</h1>
        <header-content />
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

import findRecipe from '../../mixins/findRecipe'

import { mapGetters, mapMutations } from 'vuex'
export default {
    mixins:[findRecipe,],
    name: 'RecipeDetails',
    components:{
        Summary,
        HeaderContent,
        AnalyzedInstructions,
    },
    // Coming from the url
    props: { 
        recipeId: Number
    },
    created(){
        this.setCurrentRecipeId(this.recipeId)
    },
    computed: {
        ...mapGetters({
            RecipeDetails: 'getRecipeDetails',
            details: 'getSingleRecipeDetail'
        }),
    },
    methods: {
        ...mapMutations({
            setCurrentRecipeId: 'setCurrentRecipeId'
        })
    },
}
</script>
<style lang="scss" scoped>
.food-container{
    min-height: 80vh;
    max-width: 65%;
    margin: 0 auto 3em auto;
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
        max-width: 100vw;
    }
}

@media (max-width: $large-screen) {
    
}
</style>