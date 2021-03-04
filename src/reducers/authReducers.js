const InitalState = {
    isSignedIn:null,
    userId:null
};
export default(state=InitalState,action)=>{
    switch(action.type){
        case 'SIGN_IN':
            return{...state,isSignedIn:true,userId:action.payload.userId};
        case 'SIGN_OUT':
            return{...state,isSignedIn:false,userId:null}
        default:
            return state;
    }
}