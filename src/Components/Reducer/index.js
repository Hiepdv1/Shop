import { getItem, setItem } from "../localStorage"

const initialState = getItem() || []


const Reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'ADD_CART':
            const prevData = getItem() || []
            setItem([...prevData, action.payload])
            return
        default:
            return state
    }
}

export {
    Reducer,
    initialState
} 