import { CurrentAWG } from './wireData.js';
import { temperatureCorrectionFactor, conduitDensityFactor } from './currentCorrecionFactors.js';


const getTemperatureFactor = (material, temperature, environmentTemperature) => {

    for (let currentEnvironmentTemperature in temperatureCorrectionFactor[material][temperature]) {

        if (currentEnvironmentTemperature >= environmentTemperature) {
            return temperatureCorrectionFactor[material][temperature][currentEnvironmentTemperature];
        }
    }

    return null; // Retorna null si no se encuentra ningún valor de temperatura correspondiente

}


const getAWGByCurrent = (material, temperature, environmentTemperature, current) => {

    for (let currentVal in CurrentAWG[material][temperature]) {

        if (currentVal >= current) {
            return CurrentAWG[material][temperature][currentVal];
        }
    }

    return null; // Retorna null si no se encuentra ningún calibre correspondiente
}


const getDensityFactor = (occupation) => {

    for (let currentOccupation in conduitDensityFactor) {

        if (currentOccupation >= occupation) {
            return conduitDensityFactor[currentOccupation];
        }
    }

    return null; // Retorna null si no se encuentra ningún calibre correspondiente
}


export const getCurrentCapacity = (material, temperature, environmentTemperature, occupation, current) => {

    if (!current) {
        return;
    }

    current = Number(current);
    environmentTemperature = Number(environmentTemperature);
    occupation = Number(occupation);

    const initAWG = getAWGByCurrent(material, temperature, environmentTemperature, current);

    const temperatureFactor = getTemperatureFactor(material, temperature, environmentTemperature);
    const densityFactor = getDensityFactor(occupation);

    const currentCapacity = (initAWG * temperatureFactor * densityFactor).toFixed(2);

    if (currentCapacity) {

    }

}


// console.log(getCurrentCapacity('Cu', '90', 130));
// console.log(getCurrentCapacity('Cu', '60', ));