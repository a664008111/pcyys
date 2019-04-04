const data={
    wode: 0,
    yinyue:0,
    login:{
        userName:'',
        userID:'',
        VIPlevel:'',
        userImg:'',
        show:false,
        visible:false
    },
}
const YiDon = {
    
}
// const wode = (state,action) =>{
//     switch(action.type){
//         case "count":
//         return action.text
//         default :
//         return state.wode
//     }
// }
// const yinyue = (state,action) =>{
//     switch(action.type){
//         case "count":
//         return action.text
//         default :
//         return state.yinyue
//     }
// }
const login = (state,action) =>{
    switch(action.type){
        case "count":
        return action.text
        default :
        return state.login
    }
}
export default (state=data,action)=>{
    return {
        // wode:wode(state,action),
        // yinyue:yinyue(state,action),
        login:login(state,action)
    }
}