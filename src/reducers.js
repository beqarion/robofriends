import * as constants from './constants'
const initialState = {
    searchField: '',
}

export const searchRobots = (state=initialState, action) => {
    switch(action.type){
        case constants.CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload,
            }
        default:
            return state
    }
}