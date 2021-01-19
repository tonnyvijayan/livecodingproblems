
function rotateLeft(d, arr) {
    let newArr=arr.slice(0,d)
    let newArr2=arr.slice(d,arr.length)
    let newArr3=[...newArr2,...newArr]
    return newArr3


}