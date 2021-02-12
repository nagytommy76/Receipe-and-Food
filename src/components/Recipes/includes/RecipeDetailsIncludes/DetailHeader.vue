<template >
    <section class="header-content">
        <img class="image" :src="image" alt="Food image">
        <section class="ingredients">
            <ingredient-item 
                v-for="ingred in extendedIngredients" :key="ingred.id"
                :ingredImage="ingred.image"
                :IngredName="ingred.name"
                :ingredAmount="ingred.measures.metric.amount"
                :ingredUnitLong="ingred.measures.metric.unitLong"
                :ingredOriginalName="ingred.originalName"
            />
        </section>
    </section>
</template>
<script>
import IngredientItem from './IngredientItem'
export default {
    components:{
        IngredientItem,
    },
    computed: {
        image(){
            return this.Image.replace('312x231', '636x393')
        }
    },
    props:{
        extendedIngredients: {
            type: Array || Object,
            required: true
        },
        Image: {
            type: String,
            required: true,
        },

    },
}
</script>
<style lang="scss" scoped>
.header-content{
    display: flex;
    width: 100%;
    margin-bottom: 1.5em;
    justify-content: center;
    .image{
        height: 60%;
    }
    .ingredients{
        display: grid;
        grid-template-columns: repeat(4, auto);
        align-items: center;
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
@media(max-width: $mobile-screen) {
    .header-content{
        .ingredients{
            grid-template-columns: repeat(2, auto);
            justify-items: center;
        }
    }
}
</style>