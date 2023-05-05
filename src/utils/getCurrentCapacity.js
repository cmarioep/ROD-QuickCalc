import { awgCurrent } from './wireData.js';


export const getCurrentCapacity = (material,temperature, current ) => {

    if (!current) {
        return;
    }

    current = Number(current);

    if (material === 'Cu' && temperature === '60') {

        for (let currentVal in awgCurrent.CuSixty) {

            if (currentVal >= current) {
                return awgCurrent.CuSixty[currentVal];
            }
        }

        return null; // Retorna null si no se encuentra ningún calibre correspondiente
    }

    if (material === 'Cu' && temperature === '75') {

        for (let currentVal in awgCurrent.CuSeventyFive) {

            if (currentVal >= current) {
                return awgCurrent.CuSeventyFive[currentVal];
            }
        }

        return null;
    }

    if (material === 'Cu' && temperature === '90') {

        for (let currentVal in awgCurrent.CuNinety) {

            if (currentVal >= current) {
                return awgCurrent.CuNinety[currentVal];
            }
        }

        return null;
    }
}

// console.log(getCurrentCapacity('Cu', '60', 100));
// console.log(getCurrentCapacity('Cu', '60', ));