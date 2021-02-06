import actions from './actions.js'
import test from './testObject'
export default{
    state(){
        return{
            ReceipeDetails: test,
        }
    },
    getters:{
        getRecipeDetails: state => state.ReceipeDetails
    },
    mutations:{
        setReceipeDetails(state, value){
            state.ReceipeDetails = value
        }
    },
    actions,
}