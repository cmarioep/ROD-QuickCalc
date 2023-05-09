import { CurrentAWG } from './wireData.js';
import { temperatureCorrectionFactor, conduitDensityFactor } from './AwgCorrecionFactors.js';


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


const getTemperatureFactor = (temperature, environmentTemperature) => {

    for (let currentEnvironmentTemperature in temperatureCorrectionFactor[temperature]) {

        if (currentEnvironmentTemperature >= environmentTemperature) {
            return temperatureCorrectionFactor[temperature][currentEnvironmentTemperature];
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


const getAWG = (currentData, current) => {

    for (let currentVal in currentData) {

        if (currentVal >= current) {
            return currentData[currentVal];
        }
    }

    return null; // Retorna null si no se encuentra ningún calibre correspondiente
}


export const getAWGByCurrent = (material, temperature, environmentTemperature, occupation, current) => {

    if (!current) {
        return;
    }

    current = Number(current);
    environmentTemperature = Number(environmentTemperature);
    occupation = Number(occupation);


    const temperatureFactor = getTemperatureFactor(temperature, environmentTemperature);
    const densityFactor = getDensityFactor(occupation);
    const correctionFactor = temperatureFactor * densityFactor;

    const currentData = setCurrentData(material, temperature, correctionFactor);
    const awg = getAWG(currentData, current);

    return awg;

}



