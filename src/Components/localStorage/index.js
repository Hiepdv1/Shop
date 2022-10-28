

const getItem = () => {
    const arr = localStorage.getItem("Data_Order")
    const parsedArr = JSON.parse(arr)
    return parsedArr || []
}

const setItem = (item) => {
    const arr = getItem("Data_Order")

    const index = arr.find((crr) => crr.id === item.id)


    if (index) {
        arr.forEach((crr) => {
            if (crr.id === item.id) {
                crr.quantity = crr.quantity + item.quantity
                crr.priceInt = crr.priceInt * crr.quantity
            }
        })
    } else {
        arr.push(item)
    }

    const jsonData = JSON.stringify(arr)
    return localStorage.setItem('Data_Order', jsonData)
}

const removeItem = (item) => {
    const arr = getItem()

    arr.forEach((i, index) => {
        if (i.id === item) {
            arr.splice(index, 1)
        }
    })

    const jsonData = JSON.stringify(arr)

    localStorage.setItem('Data_Order', jsonData)

    return arr
}

export {
    getItem,
    setItem,
    removeItem
}