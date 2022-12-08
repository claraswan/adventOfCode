function validTime(str) {
    const hours = parseInt(str.split(':')[0]);
    const min = parseInt(str.split(':')[1]);
    if (hours > 23) return false;
    if (min > 60) return false;
    return true;
}

console.log(validTime('25:30'));