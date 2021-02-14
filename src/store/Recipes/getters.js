export default{
    getRecipeDetails: state => state.receipeDetails,
    getRecipeNutritions: state => state.recipeNutritions,
    getSingleRecipeDetail (state){
        if (state.receipeDetails) {
            return state.receipeDetails.find(item => item.id == state.currentRecipeId)
        }
    },
    getRiecpeImage(state) {
        const recipe = state.receipeDetails.find(item => item.id == state.currentRecipeId)
        return recipe.image.replace('312x231', '636x393')   
    },
    getCurrentId: state => state.currentRecipeId,
}