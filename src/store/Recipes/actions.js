import axios from 'axios'
export default{
    async getReceipeSerachResult(context, storedData){
        const maxReadyTime = storedData.maxReadyTime ? `&maxReadyTime=${storedData.maxReadyTime}` : ''
        const sort = storedData.sortBySelected ? `&sort=${storedData.sortBySelected}` : ''
        const nrOfResults = storedData.numberOfResults > 10 || storedData.numberOfResults < 10 ? `&number=${storedData.numberOfResults}` : ''

        await axios.get(`/recipes/complexSearch?${process.env.VUE_APP_API_KEY_URL}&fillIngredients=true&addRecipeInformation=true&query=${storedData.foodName}&includeIngredients=${storedData.includeIngredients}${maxReadyTime}${sort}${nrOfResults}`).then(result =>{
            context.commit('setReceipeDetails', result.data.results)
        }).catch(() => {throw new Error})
    }
}