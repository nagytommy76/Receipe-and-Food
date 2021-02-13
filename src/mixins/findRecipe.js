export default {
    methods: {
        findRecipeById(){
            return this.RecipeDetails.find(item => item.id == this.recipeId)
        },
    },
}