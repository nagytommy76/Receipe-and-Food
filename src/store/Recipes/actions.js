import axios from 'axios'
export default{
    async getReceipeSerachResult(context, foodName, includeIngredients = '', maxReadyTime = '', sortBySelected = ''){
        console.log(foodName)
        console.log(includeIngredients)
        console.log(maxReadyTime)
        console.log(sortBySelected)
        axios.get(
            `
                /recipes/complexSearch?
                ${process.env.VUE_APP_API_KEY_URL}
                &query=${foodName}
                &includeIngredients=${includeIngredients}
                &maxReadyTime=${maxReadyTime}
                &sortBySelected=${sortBySelected}
            `
        ).then(result =>{
            console.log(result)
        })
    }
}