import { combineReducers } from 'redux'
const reducer = (state = {}, action) => {
    switch (action.type) {
     case 'ADD_PROFILE_DETAILS':
         console.log('state',state)
      return {
       profileDetails: action.payload
      }
     default:
      return state
    }
   }
export default combineReducers({reducer})