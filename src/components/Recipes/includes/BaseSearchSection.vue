<template>
<section class="search-container">
    <div class="open-search" @mouseenter="openSearchAside"><p>Search</p></div>
    <transition name="search">
    <aside class="search" v-if="isSearchOpen" @mouseleave="closeSearchAside">
        <h2 class="search-title">Search Food</h2>
        <form class="form">
            <form-input 
                v-model="storeData.foodName"
                :formName="'Food name'"
                :name="'foodName'"
            />
            <form-input 
                v-model="storeData.includeIngredients"
                :formName="'Include ingredient(s)'"
                :name="'includeIngredients'"
            />
            <form-input 
                v-model.number="storeData.maxReadyTime"
                :formName="'Maximum ready in (minutes)'"
                :name="'maxReadyTime'"
                :type="'number'"
            />
            <form-input 
                v-model.number="storeData.numberOfResults"
                :formName="'Number of results'"
                :name="'numberOfResults'"
                :type="'number'"
            />
            <form-select 
                v-model="storeData.sortBySelected"
                :formName="'Order by'"
                :name="'orderBy'"
                :data="sortByData"
            />
            <base-button
                :text="'Search'"
                @click.prevent="searchFoods"
            />
        </form>
    </aside>
    </transition>
</section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'BaseSearch',
    data() {
        return {
            storeData: {
                foodName: '',
                includeIngredients: '',
                numberOfResults: 10,
                maxReadyTime: null,
                sortBySelected: '',
            },
            sortByData: ['popularity', 'time', 'price', 'healthiness'],
            isSearchOpen: false,
        }
    },
    methods: {
        openSearchAside(){
            this.isSearchOpen = true  
        },
        closeSearchAside(){
            this.isSearchOpen = false
        },
        ...mapActions({
            receipeSearch: 'getReceipeSerachResult',
        }),
        searchFoods(){
            // Itt átalakítani az includeIngredients-et comma separated-re
            this.receipeSearch(this.storeData)
        }
    },
}
</script>
<style lang="scss" scoped>
.search-container{
        z-index: 3;
        position: fixed;
        width: 300px;
        height: 50vh;
        top: 25%;
        left: 0;
    .search{
        background-color: $dark;
        box-shadow: 1px 1px 25px $dark;
        width: 300px;
        height: 50vh;
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
    }
    .open-search{
        z-index: 3;
        width: 50px;
        height: 150px;
        background-color: #ffbb00;
        position: absolute;
        left: 0px;
        top: -150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
            font-size: 1.5em;
            transform: rotate(-90deg);
        }
    }
}
.search-enter-active,
.search-leave-active {
  transition: all 0.3s ease-in;
}

.search-enter-from,
.search-leave-to {
  transform: translateX(-300px);
}
</style>