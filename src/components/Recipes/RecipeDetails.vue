<template>
    <section class="food-container">
        <h1 class="main-title">{{ details.title }}</h1>
        <section class="header-content">
            <img class="image" :src="image" alt="Food image">
            <section class="ingredients">
                <ingredient-item 
                    v-for="ingred in details.extendedIngredients" :key="ingred.id"
                    :ingredImage="ingred.image"
                    :IngredName="ingred.name"
                    :ingredAmount="ingred.measures.metric.amount"
                    :ingredUnitLong="ingred.measures.metric.unitLong"
                    :ingredOriginalName="ingred.originalName"
                />
            </section>
        </section>
        <section class="body-content">
            <Summary :summaryText="details.summary" />
            <AnalyzedInstructions :instructions="details.analyzedInstructions"/>
        </section>
    </section>
</template>
<script>
import Summary from './includes/Summary'
import IngredientItem from './includes/IngredientItem'
import AnalyzedInstructions from './includes/AnalyzedInstructions'
import { mapGetters } from 'vuex'
export default {
    name: 'RecipeDetails',
    components:{
        Summary,
        IngredientItem,
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
        image(){
            return this.details.image.replace('312x231', '636x393')
        }
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
    .main-title{
        text-align: center;
        font-size: 2.3em;
        margin: 1em 0;
    }
    .header-content{
        display: flex;
        width: 100%;
        .image{
            height: 60%;
        }
        .ingredients{
            display: grid;
            grid-template-columns: repeat(4, auto);
            align-items: center;
        }
    }
    .body-content{
        min-height: 40vh;
    }
}
</style>