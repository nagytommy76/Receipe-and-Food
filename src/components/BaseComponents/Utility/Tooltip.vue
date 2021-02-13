<template>
    <div class="tooltip" @mouseenter="openTooltip" @mouseleave="closeTooltip">
        <span class="tooltip-item"><slot name="item"></slot></span>
        <transition name="tooltip">
            <div class="tooltip-text" v-if="isTooltipOpen">
                <slot name="text"></slot>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isTooltipOpen: false,
        }
    },
    methods: {
        openTooltip(){
            this.isTooltipOpen = true
        },
        closeTooltip(){
            this.isTooltipOpen = false
        }
    },
}
</script>
<style lang="scss" scoped>
.tooltip{
    position: relative;
    &-item{
        cursor: pointer;
    }
    &-text{
        z-index: 4;
        position: absolute;
        top: -60px;
        right: 0;
        left: 0;
        color: white;
        min-width: 170px;
        min-height: 40px;
        padding: .3rem;
        background-color: rgba($color: #111, $alpha: .9);
        border-radius: 5px;
        text-align: center;
        box-shadow: 1px 1px 20px $dark;
    }
}

@media(max-width: $mobile-screen) {
    .tooltip{
        &-text{
        top: -35px;
        left: -50px;
        }
    }
}

.tooltip-enter-active,
.tooltip-leave-active{
    transition: all .4s ease;
}

.tooltip-enter-from,
.tooltip-leave-to{
    transform: scale(0);

}
</style>