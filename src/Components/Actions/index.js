export const addCart = (payload) => {
    return {
        type: 'ADD_CART',
        payload: { ...payload }
    }
}

export const deleteOrder = (payload) => {
    return {
        type: 'DELETE_ORDER',
        payload: payload
    }
}