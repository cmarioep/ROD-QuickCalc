const parametros = {
    loadType: 'kVA',
    load: '',
    fp: '0.9',
    type: 'trifasico',
    voltage: '208',
}


export const getLoadCurrent = (loadType, load, fp, type, voltage) => {
    voltage = Number(voltage);

    if (type === 'trifasico') {
        voltage = 1.732 * voltage;
    }

    if (type === 'monofasico' || type === 'bifasico') {
        voltage = voltage;
    }

    if (loadType === 'kVA') {
        const current = (load * 1000) / voltage;
        return Number(current.toFixed(2));
    }

    if (loadType === 'kW') {
        const loadKVA = load / fp;
        const current = (loadKVA * 1000) / voltage;
        return Number(current.toFixed(2));
    }
}
