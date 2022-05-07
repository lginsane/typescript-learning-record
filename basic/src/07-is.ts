// is 类型谓词
type Fish1 = {
    name: string
    swim: () => void
}
type Bird1 = {
    name: string
    fly: () => void
}

function isFish(pet: Fish1 | Bird1): pet is Fish1 {
    return (pet as Fish1).swim !== undefined
}
