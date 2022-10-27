export const addCart = (payload) => {
    return {
        type: 'ADD_CART',
        payload: { ...payload}
    }
}