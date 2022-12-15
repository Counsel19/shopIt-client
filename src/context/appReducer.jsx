import * as ACTIONS from "./actions"

const appReducer = (state,action)=>{
    switch (action.type){
       case ACTIONS.CHANGE_FIELD_VALUE:
        return{
            ...state,
            [action.payload.field] : action.payload.value
        } 
       case ACTIONS.SET_PRODUCTS:
        return{
            ...state,
            products : action.payload.products
        } 
        default:
        return state;
    }
};

export default appReducer