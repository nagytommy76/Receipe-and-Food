export default {
    state(){
        return{
            mobileWidth: false,
        }
    },
    getters:{
        getMobileWidth: state => state.mobileWidth
    },
    mutations: {
        setScreenWidth(state){
            if (window.innerWidth <= 700) {
                state.mobileWidth = true
            }else{
                state.mobileWidth = false
            }
        }
    }
}