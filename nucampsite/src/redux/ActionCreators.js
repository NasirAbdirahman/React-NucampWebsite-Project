import * as ActionTypes from './ActionTypes';//asterisk is a wild card that allows us to import all the exportsactions from the file at once//

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});