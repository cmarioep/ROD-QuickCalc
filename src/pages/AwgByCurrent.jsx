import { useEffect, useState } from 'react';

import { useForm } from '../hooks/useForm';
import { getCurrentCapacity } from '../utils/getCurrentCapacity';


import '../styles/pages/CurrentCapacity.scss';

export const AwgByCurrent = () => {

    const { material, temperature, environmentTemperature, occupation, current, formState, onInputChange } = useForm({ material: 'Cu', temperature: '75', environmentTemperature: '26', occupation: '3', current: '' });

    const [awg, setAwg] = useState('');

    useEffect(() => {
        console.log(formState);
        setAwg(getCurrentCapacity(material, temperature, environmentTemperature, occupation, current));
    }, [formState])



    return (
        <div className='current-capacity'>

            <form >

                <div className='system-options'>
                    <p>Material:</p>
                    <div className='radio-input'>
                        <label htmlFor="material">Cobre
                            <input
                                type="radio"
                                value="Cu"
                                name="material"
                                checked={material === "Cu"}
                                onChange={onInputChange}
                            />
                        </label>
                        <label htmlFor="material">Aluminio
                            <input
                                type="radio"
                                value="Al"
                                name="material"
                                checked={material === "Al"}
                                onChange={onInputChange}
                            />
                        </label>
                    </div>
                </div>

                <div className="label-input">
                    <label htmlFor="awg">Temperatura del Conductor:</label>
                    <select id="awg" name="temperature" onChange={onInputChange} defaultValue="75">
                        <option value="">Selecciona una opción</option>
                        <option value="60">60 °C</option>
                        <option value="75">75 °C</option>
                        <option value="90">90 °C</option>
                    </select>
                </div>

                <div className="label-input">
                    <label htmlFor="awg">Temperatura Ambiente:</label>
                    <select id="awg" name="environmentTemperature" onChange={onInputChange} defaultValue="30">
                        <option value="">Selecciona una opción</option>
                        <option value="25">21-25 °C</option>
                        <option value="30">26-30 °C</option>
                        <option value="35">31-35 °C</option>
                        <option value="40">36-40 °C</option>
                        <option value="45">41-45 °C</option>
                        <option value="50">46-50 °C</option>
                        <option value="55">51-55 °C</option>
                        <option value="60">56-60 °C</option>
                        <option value="70">61-70 °C</option>
                        <option value="80">71-80 °C</option>
                    </select>
                </div>

                <div className="label-input">
                    <label htmlFor="awg">Portadores de Corriente:</label>
                    <select id="awg" name="occupation" onChange={onInputChange} defaultValue="3">
                        <option value="">Selecciona una opción</option>
                        <option value="3"> De 1 a 3</option>
                        <option value="6">De 4 a 6</option>
                        <option value="9">De 7 a 9</option>
                        <option value="20">De 10 a 20</option>
                        <option value="30">De 21 a 30</option>
                        <option value="40">De 31 a 40</option>
                        <option value="100">De 41 y más</option>
                    </select>
                </div>

                <div className="label-input">
                    <label htmlFor="voltage">Corriente:</label>
                    <input
                        type="number"
                        id="current"
                        name="current"
                        autoComplete='off'
                        placeholder='Amperios'
                        value={current}
                        onChange={onInputChange}
                    />
                </div>

                <h3 className='system-result'>Calibre AWG: {awg} </h3>


            </form>

        </div>
    )

}