import { awgCurrent } from './wireData.js';
import { temperatureCorrectionFactor } from './currentCorrecionFactor.js';


const getTemperatureFactor = (material, temperature, environmentTemperature) => {

    for (let currentEnvironmentTemperature in temperatureCorrectionFactor[material][temperature]) {

        if (currentEnvironmentTemperature >= environmentTemperature) {
            return temperatureCorrectionFactor[material][temperature][currentEnvironmentTemperature];
        }
    }

    return null; // Retorna null si no se encuentra ningún valor de temperatura correspondiente

}


const getAWGByCurrent = (material, temperature, environmentTemperature, current) => {

    for (let currentVal in awgCurrent[material][temperature]) {

        if (currentVal >= current) {
            return awgCurrent[material][temperature][currentVal];
        }
    }

    return null; // Retorna null si no se encuentra ningún calibre correspondiente
}





export const getCurrentCapacity = (material, temperature, environmentTemperature, current) => {

    if (!current) {
        return;
    }

    current = Number(current);
    environmentTemperature = Number(environmentTemperature);

    const temperatureFactor = getTemperatureFactor(material, temperature, environmentTemperature);
    const awg = getAWGByCurrent(material, temperature, environmentTemperature, current);

}


// console.log(getCurrentCapacity('Cu', '90', 130));
// console.log(getCurrentCapacity('Cu', '60', ));