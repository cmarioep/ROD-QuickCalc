import { wireData } from './wireData.js';


const sinFP = {
    1: 0,
    0.95: 0.31,
    0.9: 0.44,
    0.85: 0.53
}


const getResistance = (material, conduit, awg) => {

    if (material === 'Cu' && conduit === 'PVC') {
        const resistance = wireData.resistanceCuOnPVC[awg];
        return resistance;
    }

    if (material === 'Cu' && conduit === 'ACERO') {
        const resistance = wireData.resistanceCuOnAcero[awg];
        return resistance;
    }

    if (material === 'Al' && conduit === 'PVC') {
        const resistance = wireData.resistanceALOnPVC[awg];
        return resistance;
    }

    if (material === 'Al' && conduit === 'ACERO') {
        const resistance = wireData.resistanceALOnAcero[awg];
        return resistance;
    }
}


const getInductance = (conduit, awg) => {

    if (conduit === 'PVC') {
        const inductance = wireData.inductanceOnPVC[awg];
        return inductance;
    }

    if (conduit === 'ACERO') {
        const inductance = wireData.inductanceOnAcero[awg];
        return inductance;
    }

}


const getEffectiveImpedance = (material, conduit, awg, fp) => {

    const sin = sinFP[fp];

    const resistance = getResistance(material, conduit, awg);

    const inductance = getInductance(conduit, awg);

    const effectiveImpedance = (resistance * fp) + (inductance * sin);

    return Number(effectiveImpedance.toFixed(4));

}


const getLoadCurrent = (type, voltage, loadType, loadCurrent) => {

    voltage = Number(voltage);

    if (type === 'trifasico') {
        voltage = 1.732 * voltage;
    }

    if (type === 'monofasico') {
        voltage = voltage;
    }

    if (loadType === 'kva') {
        loadCurrent = (loadCurrent * 1000) / voltage;
        return Number(loadCurrent);
    }

    if (loadType === 'amperios') {
        return Number(loadCurrent);
    }
}



export const getVoltageDrop = (type, material, conduit, voltage, fp, loadType, loadCurrent, awg, long) => {

    voltage = Number(voltage);
    fp = Number(fp);
    awg = Number(awg);
    long = Number(long);

    const current = getLoadCurrent(type, voltage, loadType, loadCurrent);

    let deltaDrop = getEffectiveImpedance(material, conduit, awg, fp) * (long / 1000) * current;


    if (type === 'trifasico') {
        deltaDrop = 1.732 * deltaDrop;
    }

    if (type === 'monofasico') {
        deltaDrop = 2 * deltaDrop;
    }

    const dropVoltage = (deltaDrop / voltage) * 100;

    return Number(dropVoltage.toFixed(2));

}