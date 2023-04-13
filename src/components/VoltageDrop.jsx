

import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/components/VoltageDrop.scss';
import { getVoltageDrop } from '../utils/getVoltageDrop';



export const VoltageDrop = () => {

    const { type, material, conduit, voltage, fp, loadCurrent, awg, long, formState, onInputChange, onResetForm } = useForm({ type: '', material: '', conduit: '', voltage: '', fp: '', loadCurrent: '', awg: '', long: '' });

    const [voltageDrop, setVoltageDrop] = useState('')

    useEffect(() => {
        setVoltageDrop(getVoltageDrop(type, material, conduit, voltage, fp, loadCurrent, awg, long))
        console.log(formState)
    }, [formState])

    return (

        <div className="formulario">

            <label htmlFor="type">Tipo:</label>
            <select id="type" name="type" onChange={onInputChange}>
                <option value=""></option>
                <option value="trifasico">Trifásico</option>
                <option value="monofasico">Monofásico</option>
            </select>


            <label htmlFor="fp">FP:</label>
            <select id="fp" name="fp" onChange={onInputChange}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="0.95">0.95</option>
                <option value="0.9">0.9</option>
                <option value="0.85">0.85</option>
            </select>


            <label htmlFor="voltage">Tensión:</label>
            <input
                type="number"
                id="voltage"
                name="voltage"
                autoComplete='off'
                onChange={onInputChange}
                value={voltage}
            />

            <label htmlFor="loadCurrent">Carga:</label>
            <input
                type="number"
                id="loadCurrent"
                name="loadCurrent"
                autoComplete='off'
                onChange={onInputChange}
                value={loadCurrent}
            />


            <label htmlFor="awg">AWG:</label>
            <select id="awg" name="awg" onChange={onInputChange}>
                <option value=""></option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
            </select>

            <label htmlFor="awg">Material:</label>
            <select id="awg" name="material" onChange={onInputChange}>
                <option value=""></option>
                <option value="Cu">Cobre</option>
                <option value="Al">Aluminio</option>
            </select>

            <label htmlFor="awg">Canalización:</label>
            <select id="awg" name="conduit" onChange={onInputChange}>
                <option value=""></option>
                <option value="PVC">PVC</option>
                <option value="ACERO">ACERO</option>
            </select>


            <label htmlFor="long">Longitud:</label>
            <input
                type="number"
                id="long"
                name="long"
                autoComplete='off'
                onChange={onInputChange}
                value={long}
            />

            <h3>{`%Reg: ${voltageDrop}`}</h3>

        </div>

    );
};


