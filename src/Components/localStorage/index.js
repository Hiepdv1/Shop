

const getItem = () => {
    const arr = localStorage.getItem("Data_Order")
    const parsedArr = JSON.parse(arr)
    return parsedArr || []
}

const setItem = (item) => {
    const arr = getItem("Data_Order")
    arr.push(item)

    const jsonData = JSON.stringify(arr)
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