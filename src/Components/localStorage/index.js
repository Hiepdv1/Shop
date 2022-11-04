

const getItem = () => {
    const arr = localStorage.getItem("Data_Order")
    const parsedArr = JSON.parse(arr)
    return parsedArr || []
}

const setItem = (item) => {
    const arr = getItem("Data_Order")

    const index = arr.find((crr) => crr.id === item.id)

    if (index) {
        const find = arr.find((crr) => crr.id === item.id && crr.activeImage.id_img === item.activeImage.id_img)
        const findType = arr.find((crr) => crr.id_type === item.id_type)
        if (item.id_type) {
            if (findType) {
                findType.quantity = findType.quantity + item.quantity
            } else {
                arr.push(item)
            }
        } else {
            if (find) {
                find.quantity = find.quantity + item.quantity
            } else {
                arr.push(item)
            }
        }
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