import { ICE_CREAM_ADDED, ICE_CREAM_REMOVED } from "./actionTypes.js"
// { actions
//     type: "addIceCream",
//     payload: {
//          flavor: "pistachio"
//    }
// }

// { actions
//     type: "removeIceCream",
//     payload: {
//          id: 1
//    }
// }
let iceCreamId = 0;

function reducer(state = [], action) {
    switch (action.type) {
        case ICE_CREAM_ADDED:
            return [
                ...state,
                {
                   id: ++ iceCreamId,
                   flavor: action.payload.flavor
                }
            ];
        case ICE_CREAM_REMOVED:
            return state.filter( iceCreamObj => iceCreamObj.id !== action.payload.id)
        default:
            return state;
    }
}

export default reducer;