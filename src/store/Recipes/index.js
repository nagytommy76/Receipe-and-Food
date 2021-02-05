import actions from './actions'
export default{
    state(){
        return{
            ReceipeDetails: null,
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