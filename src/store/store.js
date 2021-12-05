export const setStore = (item, value) => {
    return localStorage.setItem(item,value)
}

export const getStore = (item) => {
    return localStorage.getItem(item)
}