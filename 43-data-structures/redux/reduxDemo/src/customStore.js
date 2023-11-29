import reducer from "./reducer.js";

function createStore(reducer) {
    let state;
    let listenersList = [
    //     () => {
    //     console.log("component 1");
    // },
    // () => {
    //     console.log("component 2");
    // }
]

    function subscribe(listener) {
        listenersList.push(listener)
    }

    function getState() {
        return state
    }

    function dispatch(action) {
        //change store
        state = reducer(state, action)
        // notify the subscribers
        for (let i = 0; i < listenersList.length; i++) {
            listenersList[i]()
        }
    }

    return {
        state,
        getState,
        dispatch,
        subscribe
    }
}

export default createStore(reducer);