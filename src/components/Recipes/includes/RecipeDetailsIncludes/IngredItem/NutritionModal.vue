<template>
    <transition name="background">
        <div class="fade-in" v-if="modalOpen" @click="$emit('close-modal')"></div>
    </transition>
    <transition name="modal">
        <base-modal v-if="modalOpen">
            <template v-slot:content>
                <nutritions
                    :ingredId="ingredId"
                    :ingredNutrition="ingredNutrition"
                />
            </template>
        </base-modal>
    </transition>
</template>
<script>
import Nutritions from './Nutritions'
export default {
    components:{
        Nutritions,
    },
    props:{
        ingredId: {
            type: Number
        },
        modalOpen:{
            type: Boolean
        }
    },
}
</script>
<style lang="scss" scoped>
.fade-in{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba($color: $dark, $alpha: .7);
    top: 0;
    left: 0;
    z-index: 3;
}

.background-enter-active,
.background-leave-active {
  transition: opacity .3s ease;
}

.background-enter-from,
.background-leave-to {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: all .5s ease-in;
}

.modal-enter-from,
.modal-leave-to {
  transform: translateY(-150%);
}
</style>