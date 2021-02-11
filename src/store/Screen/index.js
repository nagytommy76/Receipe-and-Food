export default {
    state(){
        return{
            mobileWidth: false,
        }
    },
    getters:{
        getMobileWidth(state){
            if (window.innerWidth <= 700) {
                return state.mobileWidth = true
            }
            return state.mobileWidth
        }
    }
}