import types from '../actions/types'

const DEFAULT_STATE={
  details:null
}

export default (state = DEFAULT_STATE,action)=>{
    // console.log("action", action)
    switch(action.type){
      case types.GET_GUEST_ORDER_DETAILS:
        return{
          ...state,
          details: action.details
          
        }
        default:
          return{
            ...state
          }
    }
  } 