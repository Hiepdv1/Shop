

const getItem = () => {
    const arr = localStorage.getItem("Data_Order")
    const parsedArr = JSON.parse(arr)
    return parsedArr || []
}

const setItem = (item) => {
    const jsonData = JSON.stringify(item)
    return localStorage.setItem('Data_Order', jsonData)
}

const removeItem = (item) => {
    return localStorage.clear()
}

export {
    getItem,
    setItem,
    removeItem
}