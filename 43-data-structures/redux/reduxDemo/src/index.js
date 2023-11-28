import customStore from "./customStore.js";
import { iceCreamAdded, iceCreamRemoved } from "./actionCreators.js";


const store = customStore

store.subscribe(() => {
    console.log("store changed");
})
store.dispatch(iceCreamAdded("pistachio"))

console.log(store.getState());