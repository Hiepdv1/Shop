import { getItem, removeItem, setItem } from "../localStorage"

const initialState = getItem() || []


const Reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'ADD_CART':
            setItem(action.payload)
            return
        case 'DELETE_ORDER':
            return removeItem(action.payload)
        default:
            return state
    }
}

export {
    Reducer,
    initialState
} 