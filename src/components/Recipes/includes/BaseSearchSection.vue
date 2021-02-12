<template>
<!-- <section class="search-container" @mouseleave="closeSearchAside"> -->
    <div class="open-search" @mouseenter="openSearchAside" @click="toggleSearchAside"><p>Search</p></div>
    <transition name="search">
    <aside class="search" @mouseleave="closeSearchAside" v-if="isSearchOpen">
        <h2 class="search-title">Search Food</h2>
        <form class="form">
            <form-input 
                v-model="storeData.foodName"
                :formName="'Food name'"
                :name="'foodName'"
                :hasError="hasErrors"
                :errorMsg="errorMsgs.foodName"
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
<!-- </section> -->
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'BaseSearch',
    data() {
        return {
            storeData: {
                foodName: null,
                includeIngredients: '',
                numberOfResults: 10,
                maxReadyTime: null,
                sortBySelected: '',
            },
            sortByData: ['popularity', 'time', 'price', 'healthiness'],
            isSearchOpen: false,
            hasErrors: false,
            errorMsgs: {
                foodName: '',
            }
        }
    },
    methods: {
        openSearchAside(){
            if (!this.isSearchOpen) {
                this.isSearchOpen = true    
            }
        },
        closeSearchAside(){
            this.isSearchOpen = false
        },
        toggleSearchAside(){
            this.isSearchOpen = !this.isSearchOpen
        },
        ...mapActions({
            receipeSearch: 'getReceipeSerachResult',
        }),
        searchFoods(){
            // Itt átalakítani az includeIngredients-et comma separated-re
            this.validateFormInputs()
            if (!this.hasErrors) {
                this.receipeSearch(this.storeData)
            }
        },
        validateFormInputs(){
            if (this.storeData.foodName === null || this.storeData.foodName === '') {
                this.hasErrors = true
                this.errorMsgs.foodName = 'Food name is required!'
                setTimeout(() =>{
                    this.hasErrors = false
                }, 10000)
            }
        }
    },
}
</script>
<style lang="scss" scoped>
// .search-container{
//         z-index: 3;
//         position: fixed;
//         width: 300px;
//         min-height: 50vh;
//         top: 25%;
//         left: 0;
    .search{
        z-index: 5;
        position: fixed;
        width: 300px;
        min-height: 50vh;
        top: 25%;
        left: 0;
        background-color: $dark;
        box-shadow: 1px 1px 25px $dark;
        // width: 300px;
        // height: 50vh;
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
        z-index: 5;
        width: 150px;
        height: 50px;
        background-color: #ffbb00;
        position: fixed;
        left: 0px;
        top: 22vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
            font-size: 1.5em;
        }
    }
// }
@media (max-width: $mobile-screen) {
    .search-container{
        top: 50px;
        height: calc(100vh - 50px);
        width: 100%;
        .search{
            height: calc(100vh - 50px);
            width: 100%;
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