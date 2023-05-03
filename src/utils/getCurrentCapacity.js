const awgCurrent = {
    100: 2,
    80: 4,
    60: 6,
    40: 8,
    30: 10,
    20: 12,
    10: 14
};

function getCurrentCapacity(current) {
    for (let currentVal in awgCurrent) {
        if (currentVal >= current) {
            return awgCurrent[currentVal];
        }
    }
    return null; // Retorna null si no se encuentra ningún calibre correspondiente
}

console.log(getCurrentCapacity(25));
