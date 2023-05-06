import { useEffect, useState } from 'react';

import { useForm } from '../hooks/useForm';
import { getCurrentCapacity } from '../utils/getCurrentCapacity';


import '../styles/pages/CurrentCapacity.scss';

export const AwgByCurrent = () => {

    const { material, temperature, current, formState, onInputChange } = useForm({ material: '', temperature: '', current: '' });

    const [awg, setAwg] = useState('');

    useEffect(() => {
        console.log(formState)
        setAwg(getCurrentCapacity(material, temperature, current))
    }, [formState])



    return (
        <div className='current-capacity'>

            <h3>Capacidad de Corriente</h3>

            <form >

                <div >
                    <label htmlFor="awg">Temperatura:</label>
                    <select id="awg" name="temperature" onChange={onInputChange} defaultValue="">
                        <option value="">Selecciona una opción</option>
                        <option value="60">60 °C</option>
                        <option value="75">75 °C</option>
                        <option value="90">90 °C</option>
                    </select>
                </div>

                <div >
                    <p>Material:</p>
                    <div >
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

                <div>
                    <label htmlFor="voltage">Tensión:</label>
                    <input
                        type="number"
                        id="current"
                        name="current"
                        autoComplete='off'
                        placeholder='Corriente en Amperios'
                        value={current}
                        onChange={onInputChange}
                    />
                </div>

                <h3 >Calibre AWG: {awg} </h3>


            </form>

        </div>
    )

}