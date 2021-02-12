<template>
    <footer class="footer">
        <p class="title"><a target="_blank" href="https://nagytamas93.hu/">Nagy Tamás &copy;</a> Budapest</p>
        <section class="icons">
            <a class="icons-icon" target="_blank" href="https://github.com/nagytommy76/Receipe-and-Food">
                <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
            </a>
            <a class="icons-icon" target="_blank" href="https://www.linkedin.com/in/nagy-tam%C3%A1s-27355116b/">
                <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
            </a>
        </section>
    </footer>
</template>
<style lang="scss" scoped>
.footer{
    height: 8em;
    background-color: $navbar-bg;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title{
        font-size: 1.5em;
        margin-bottom: .7em;
    }
    a{
        color: white;
    }
    .icons{
        &-icon{
            margin-right: .4em;
            transition: color .3s ease;
            font-size: 1.3em;
            &:hover{
                color: $navbar-hover-color;
            }
        }
    }
}
</style>