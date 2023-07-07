const parametros =         {
    loadType: 'kVA',
    load: '',
    fp: '0.9',
    type: 'trifasico',
    voltage: '208',
}


export const getLoadCurrent = (type, voltage, loadType = 'Amperios', loadCurrent) => {

    voltage = Number(voltage);

    if (type === 'trifasico') {
        voltage = 1.732 * voltage;
    }

    if (type === 'monofasico') {
        voltage = voltage;
    }

    if (loadType === 'kVA') {
        loadCurrent = (loadCurrent * 1000) / voltage;
        return Number(loadCurrent);
    }

    if (loadType === 'Amperios') {
        return Number(loadCurrent);
    }
}