import actions from './actions.js'
import getters from './getters.js'
export default{
    state(){
        return{
            receipeDetails: null,
            recipeNutritions: {},
            currentRecipeId: null,
            singleRecipeDetail: null,
        }
    },
    getters,
    mutations:{
        setReceipeDetails(state, value){
            state.receipeDetails = value
        },
        setRecipeNutritions(state, value){
            state.recipeNutritions = value
        },
        setCurrentRecipeId(state, id){
            state.currentRecipeId = id
        }
    },
    actions,
}