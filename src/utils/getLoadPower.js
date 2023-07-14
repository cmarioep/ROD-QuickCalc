export const getLoadPower = (current, type, voltage) => {
    voltage = Number(voltage);
    current = Number(current);

    if (type === 'trifasico') {
        const voltageComposite = 1.732 * voltage;
        const power = (current * voltageComposite) / 1000;
        return Number(power.toFixed(2));
    }

    if (type === 'monofasico' || type === 'bifasico') {
        const power = (current * voltage) / 1000;
        return Number(power.toFixed(2));
    }
}