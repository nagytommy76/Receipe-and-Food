<template>
    <span class="ingredients-item" v-for="ingred in singleRecipeDetail.extendedIngredients" :key="ingred.id">
        <DesktopIngredItem v-if="!screenSize"
            @open-modal="openModal"
            :ingred="ingred"
        />
        <MobileIngredItem v-else
            @open-modal="openModal"
            :ingred="ingred"
        />
    </span>
    <nutrition-modal
        :modalOpen="isModalOpen"
        @close-modal="closeModal"
        :ingredId="selectedIngredId"
    ></nutrition-modal>
</template>
<script>
import { mapGetters } from 'vuex'
import NutritionModal from './IngredItem/NutritionModal'
import DesktopIngredItem from './IngredItem/DesktopIngredItem'
import MobileIngredItem from './IngredItem/MobileIngredItem'

export default {
    components:{
        NutritionModal,
        DesktopIngredItem,
        MobileIngredItem,
    },
    data() {
        return {
            isModalOpen: false,
            selectedIngredId: 0
        }
    },
    computed: {
        ...mapGetters({
            singleRecipeDetail: 'getSingleRecipeDetail',
            screenSize: 'getMobileWidth',
        }),
    },
    methods: {
        openModal(ingredId){
            // Set the selected ingredient's id
            this.selectedIngredId = ingredId
            this.isModalOpen = !this.isModalOpen
        },
        closeModal(){
            this.isModalOpen = false
        }
    },
}
</script>
<style lang="scss" scoped>
.ingredients-item{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 150px;
}
@media(max-width: $mobile-screen) {
    .ingredients-item{
        height: 220px;
    }
}
</style>