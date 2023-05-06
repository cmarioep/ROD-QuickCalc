import { awgCurrent } from './wireData.js';


export const getCurrentCapacity = (material, temperature, current) => {

    if (!current) {
        return;
    }

    current = Number(current);

    for (let currentVal in awgCurrent[material][temperature]) {

        if (currentVal >= current) {
            return awgCurrent[material][temperature][currentVal];
        }
    }

    return null; // Retorna null si no se encuentra ningún calibre correspondiente
}


// console.log(getCurrentCapacity('Cu', '90', 130));
// console.log(getCurrentCapacity('Cu', '60', ));