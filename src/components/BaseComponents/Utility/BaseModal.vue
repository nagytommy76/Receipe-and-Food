<template>
    <section class="modal">
        <slot name="content"></slot>
    </section>
</template>
<style lang="scss" scoped>
.modal{
    background: rgba($color: $footer-bg, $alpha: .9);
    color: white;
    width: 300px;
    padding: 1.5rem;
    box-shadow: 3px 3px 20px $dark;
    border-radius: 10px;
    position: absolute;
    z-index: 4;
}
</style>