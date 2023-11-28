import { ICE_CREAM_ADDED, ICE_CREAM_REMOVED } from "./actionTypes.js"

export function iceCreamAdded(flavor) {
    return {
        type: ICE_CREAM_ADDED,
        payload: {
            flavor
        }
    }
}

export function iceCreamRemoved(id) {
    return {
        type: ICE_CREAM_REMOVED,
        payload: {
            id
        }
    }
}