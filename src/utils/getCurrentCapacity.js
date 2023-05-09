import { CurrentAWG } from './wireData.js';
import { temperatureCorrectionFactor, conduitDensityFactor } from './currentCorrecionFactors.js';


const setCurrentData = (material, temperature, factor) => {
    const newObj = {};
    if (CurrentAWG[material] && CurrentAWG[material][temperature]) {
        const currentObj = CurrentAWG[material][temperature];
        for (const key in currentObj) {
            let newKey = key * factor;
            newKey = newKey.toFixed(2);
            newObj[newKey] = currentObj[key];
        }
    }
    return newObj;
}


const getTemperatureFactor = (material, temperature, environmentTemperature) => {

    for (let currentEnvironmentTemperature in temperatureCorrectionFactor[material][temperature]) {

        if (currentEnvironmentTemperature >= environmentTemperature) {
            return temperatureCorrectionFactor[material][temperature][currentEnvironmentTemperature];
        }
    }

    return null; // Retorna null si no se encuentra ningún valor de temperatura correspondiente

}


const getDensityFactor = (occupation) => {

    for (let currentOccupation in conduitDensityFactor) {

        if (currentOccupation >= occupation) {
            return conduitDensityFactor[currentOccupation];
        }
    }

    return null; // Retorna null si no se encuentra ningún calibre correspondiente
}


const getAWGByCurrent = (currentData, current) => {

    for (let currentVal in currentData) {

        if (currentVal >= current) {
            return currentData[currentVal];
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


    const temperatureFactor = getTemperatureFactor(material, temperature, environmentTemperature);
    const densityFactor = getDensityFactor(occupation);
    const correctionFactor = temperatureFactor * densityFactor;

    const currentData = setCurrentData(material, temperature, correctionFactor);
    const awg = getAWGByCurrent(currentData, current);

    return awg;

}



