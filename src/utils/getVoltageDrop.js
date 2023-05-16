import { electrictParamsAWG } from './wireData.js';


const sinFP = {
    1: 0,
    0.95: 0.31,
    0.9: 0.44,
    0.85: 0.53
}


const getResistance = (material, conduit, awg) => {
    const resistance = electrictParamsAWG['resistance'][material][conduit][awg];
    return resistance;
}


const getInductance = (conduit, awg) => {
    const inductance = electrictParamsAWG['inductance'][conduit][awg];
    return inductance;
}


const getEffectiveImpedance = (material, conduit, awg, fp) => {

    const sin = sinFP[fp];

    const resistance = getResistance(material, conduit, awg);

    const inductance = getInductance(conduit, awg);

    const effectiveImpedance = (resistance * fp) + (inductance * sin);

    return Number(effectiveImpedance.toFixed(4));

}


const getLoadCurrent = (type, voltage, loadType = 'amperios', loadCurrent) => {

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
    loadCurrent = Number(loadCurrent);
    fp = Number(fp);
    awg = Number(awg);
    long = Number(long);

    console.log('en voltage drop')

    const current = getLoadCurrent(type, voltage, loadType, loadCurrent);

    console.log('current', current)


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

export const checkVoltageDrop = (type, material, conduit, voltage, fp, loadType, loadCurrent, awg, long) => {

    console.log('calibre', awg)

    const initialResult = getVoltageDrop(type, material, conduit, voltage, fp, loadType, loadCurrent, awg, long);
    console.log('Caida de tension:', initialResult);

    if (!initialResult) return;

    if (initialResult <= 3) {
        console.log('menor al 3', initialResult);
        return awg;
    } else {
        const awgList = [14, 12, 10, 8, 6, 4, 2, '1/0', '2/0', '4/0', 250, 350, 400, 500, 750];
        const startIndex = awgList.indexOf(awg) + 1; // get index of initial awg and add 1
        console.log('startIndex', startIndex, 'awg', awg);
        let result;
        for (let i = startIndex; i < awgList.length; i++) {
            const newAwg = awgList[i];
            result = getVoltageDrop(type, material, conduit, voltage, fp, loadType, loadCurrent, newAwg, long);
            console.log('nueva drop', result)
            if (result <= 3) {
                console.log('nuevo calibre', newAwg);
                return newAwg;
            }
        }
        // If no value is found, return the initial value
        return awg;
    }
}

