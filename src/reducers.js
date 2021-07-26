import * as constants from './constants'

const initialStateSearch = {
    searchField: '',
}
const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
}

export const searchRobots = (state=initialStateSearch, action) => {
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

export const requestRobots = (state=initialStateRobots, action) => {
    switch(action.type) {
        case constants.REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true}
        case constants.REQUEST_ROBOTS_SUCCESS:
            return {...state, robots: action.payload, isPending: false}
        case constants.REQUEST_ROBOTS_FAILED:
            return {...state, error: action.payload, isPending: false}
        default:
            return state
    }
}