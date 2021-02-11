<template>
    <router-link :to="{name: 'RecipeDetails', params: { recipeId: id }}" class="card" @mouseenter="isOverlay = true" @mouseleave="isOverlay = false">
        <img :src="image" alt="Food Image">
        <transition name="overlay">
            <div class="card-overlay" v-if="isOverlay">
                <h1 class="food-name">{{ title }}</h1>
                <span class="time">Time: {{ readyInMinutes }} minutes</span>
            </div>
        </transition>
    </router-link>
</template>
<script>
export default {
    name: 'BaseRecipeCard',
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        readyInMinutes:{
            type: Number,
        },
        image: {
            type: String,
        }
    },
    data() {
        return {
            isOverlay: false,
        }
    },
}
</script>
<style lang="scss" scoped>
.card{
    height: 20em;
    display: flex;
    position: relative;
    transition: all .2s ease;
    &:hover{
        transform: translateY(-3px);
        box-shadow: 2px 2px 19px #333;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &-overlay{
        position: absolute;
        color: white;
        width: 100%;
        height: 100%;
        top: 0;
        background-color: rgba($color: #111, $alpha: .6);
        .food-name{
            font-size: 2em;
            text-align: center;
            padding: .6em;
        }
        .time{
            font-size: 1.2em;
            position: absolute;
            bottom: 10px;
            left: 5px;
        }
    }
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.2s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>