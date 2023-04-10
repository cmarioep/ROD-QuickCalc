const sinFP = {
    1: 0,
    0.95: 0.31,
    0.9: 0.44,
    0.85: 0.53
}



const getEffectiveImpedance = (awg, fp) => {

    const sin = sinFP[fp];
    const resistance = resistanceAWG[awg];
    const inductance = inductanceAWG[awg];

    const effectiveImpedance = (resistance * fp) + (inductance * sin);

    return Number(effectiveImpedance.toFixed(4));

}



export const getVoltageDrop = (type, long, voltage, loadCurrent, awg, fp) => {

    let deltaDrop = getEffectiveImpedance(awg, fp) * (long / 1000) * loadCurrent;


    if (type === 'trifasico') {
        deltaDrop = 1.732 * deltaDrop;
    }

    if (type === 'monofasico') {
        deltaDrop = 2 * deltaDrop;
    }

    const dropVoltage = (deltaDrop / voltage) * 100;

    return Number(dropVoltage.toFixed(2));

}