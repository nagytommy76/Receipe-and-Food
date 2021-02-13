import actions from './actions.js'
export default{
    state(){
        return{
            ReceipeDetails: null,
            RecipeNutritions: {},
        }
    },
    getters:{
        getRecipeDetails: state => state.ReceipeDetails,
        getRecipeNutritions: state => state.RecipeNutritions,
    },
    mutations:{
        setReceipeDetails(state, value){
            state.ReceipeDetails = value
        },
        setRecipeNutritions(state, value){
            state.RecipeNutritions = value
        }
    },
    actions,
}