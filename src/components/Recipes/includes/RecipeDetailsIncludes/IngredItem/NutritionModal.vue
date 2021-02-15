<template>
    <transition name="background">
        <div class="fade-in" v-if="modalOpen" ></div>
    </transition>
    <transition name="modal">
        <section class="modal-bg" v-if="modalOpen" @click="$emit('close-modal')">
            <base-modal >
                <template v-slot:content>
                    <nutritions
                        :ingredId="ingredId"
                        :ingredNutrition="ingredNutrition"
                    />
                </template>
            </base-modal>
        </section>
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
    z-index: 4;
}
.modal-bg{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 4;
}

.background-enter-active,
.background-leave-active {
  transition: opacity .5s ease;
}

.background-enter-from,
.background-leave-to {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: all .5s ease;
}

.modal-enter-from,
.modal-leave-to {
  transform: translateY(-150%);
}
</style>