<template >
    <section class="header-content">
        <img class="image" :src="image" alt="Food image">
        <section class="ingredients">
            <ingredient-item 
                :extendedIngreds="details.extendedIngredients"
                :ingredNutrition="details.nutrition.nutrients"
            />
        </section>
    </section>
</template>
<script>
import IngredientItem from './IngredientItem'
import findRecipe from '../../../../mixins/findRecipe'
export default {
    mixins: [findRecipe],
    components:{
        IngredientItem,
    },
    // data() {
    //     return {
    //         isModalOpen: false,
    //     }
    // },
    computed: {
        image(){
            return this.details.image.replace('312x231', '636x393')
        },
    },
    props:{
        details:{
            type: Object,
            required: true
        }
    },
    // methods: {
    //     openModal(ingredId){
    //         console.log(ingredId)
    //     }
    // },
}
</script>
<style lang="scss" scoped>
.header-content{
    display: flex;
    width: 100%;
    margin-bottom: 1.5em;
    justify-content: center;
    .image{
        width: auto;
        height: 100%;
    }
    .ingredients{
        display: grid;
        grid-template-columns: repeat(4, auto);
        align-items: center;
        justify-items: center;
    }
}

@media(max-width: $extra-large-screen) {
    .header-content{
        .ingredients{
            grid-template-columns: repeat(3, auto);
        }
    }
}
@media(max-width: $large-screen) {
    .header-content{
        flex-direction: column;
        .ingredients{
            grid-template-columns: repeat(4, auto);
        }
    }
}
@media(max-width: $tablet-screen) {
    .header-content{
        flex-direction: column;
        .ingredients{
            grid-template-columns: repeat(3, auto);
        }
    }
}
@media(max-width: $mobile-screen) {
    .header-content{
        .ingredients{
            grid-template-columns: repeat(2, auto);
            justify-items: center;
        }
    }
}
</style>