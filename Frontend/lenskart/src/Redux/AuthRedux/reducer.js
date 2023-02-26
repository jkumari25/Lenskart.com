const initialState={
    name:"",
}

 const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "ADD NAME":
            return {
                ...state,name:action.payload
            }
        default:
            return state
    }
}

export {reducer};