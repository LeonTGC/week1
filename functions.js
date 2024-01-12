let minus = (fah) => {
    return fah - 32
}

let getCelsius = (fah) => {
    return minus(fah) * 5/9
}

console.log(getCelsius(59))

