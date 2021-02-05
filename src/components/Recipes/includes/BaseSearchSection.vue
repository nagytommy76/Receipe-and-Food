<template >
    <aside class="search">
        <div class="open"></div>
        <h2 class="search-title">Search Food</h2>
        <form class="form">
            <form-input 
                v-model="foodName"
                :formName="'Food name'"
                :name="'foodName'"
            />
            <form-input 
                v-model="includeIngredients"
                :formName="'Include ingredient(s)'"
                :name="'includeIngredients'"
            />
            <form-input 
                v-model.number="maxReadyTime"
                :formName="'Maximum ready in (minutes)'"
                :name="'maxReadyTime'"
                :type="'number'"
            />
            <form-select 
                v-model="sortBySelected"
                :formName="'Order by'"
                :name="'orderBy'"
                :data="sortByData"
            />
            <base-button
                :text="'Search'"
                @click.prevent="searchFoods"
            />
            <!-- <button @click.prevent class="btn btn-primary">Search</button> -->
        </form>
    </aside>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            foodName: '',
            includeIngredients: '',
            maxReadyTime: null,
            sortByData: ['popularity', 'time', 'price', 'healthiness'],
            sortBySelected: '',
        }
    },
    methods: {
        ...mapActions({
            receipeSearch: 'getReceipeSerachResult',
        }),
        searchFoods(){
            // Itt átalakítani az includeIngredients-et comma separated-re
            this.receipeSearch(this.foodName)
            console.log('search')
        }
    },
}
</script>
<style lang="scss" scoped>
.search{
    position: fixed;
    top: 25%;
    left: 0;
    margin: 0 2em 0 0;
    background-color: $dark;
    width: 300px;
    height: 40vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-title{
        text-align: center;
        padding: 1rem;
    }
    .form{
        width: 75%;
    }

    .open{
        width: 50px;
        height: 50px;
        background-color: #ffbb00;
        position: absolute;
        right: -50px;
        top: 50%;
    }
}
</style>