import * as constants from './constants'
export const setSearchField = (text) => {
    // console.log(text)
    return {
        type: constants.CHANGE_SEARCH_FIELD,
        payload: text,
    }
}