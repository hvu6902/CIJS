export function helloByVN() {
    console.log('Xin chào');
}
export function helloByFrancais() {
    console.log(toUpper('Bonjour'));
}
// export {helloByVN, helloByFrancais}

function toUpper(str) {
    return str.toUpperCase()
}

