import { useEffect, useState } from 'react';

import { useForm } from '../hooks/useForm';
import { getAWGByCurrent } from '../utils/getAwgByCurrent.js';


import '../styles/pages/CurrentCapacity.scss';

export const AwgByCurrent = () => {

    const { material, temperature, environmentTemperature, occupation, current, type, voltage, fp, conduit, long, formState, onInputChange } = useForm(
        {
            material: 'Cu',
            temperature: '75',
            environmentTemperature: '26',
            occupation: '3',
            current: '',
            type: 'trifasico',
            voltage: '208',
            fp: '0.9',
            conduit: 'PVC',
            long: ''
        }
    );

    const [awg, setAwg] = useState('');
    const [voltageDrop, setVoltageDrop] = useState(false);

    useEffect(() => {
        setAwg(getAWGByCurrent(material, temperature, environmentTemperature, occupation, current));
    }, [formState])

    useEffect(() => {
        const handleViewportChange = () => {
            if (window.innerWidth > 688) {
                setVoltageDrop(true);
            } else {
                setVoltageDrop(false);
            }
        };

        handleViewportChange(); // Check initial viewport width

        window.addEventListener('resize', handleViewportChange);

        return () => {
            window.removeEventListener('resize', handleViewportChange);
        };
    }, []);



    return (
        <div className='current-capacity'>

            <form className='current-capacity__container'>

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

                <h3 className='system-result'>Calibre AWG: {(awg) ? awg : null}
                    {(awg) ? <div className='btn-primary ' onClick={() => setVoltageDrop(!voltageDrop)}>Verificar Caida de Tension</div> : null}
                </h3>

            </form>

            {(voltageDrop) ? <form className='current-capacity__container current-capacity__voltage-dropchecker'>

                <div className='system-options'>
                    <p>Sistema:</p>
                    <div className='radio-input'>
                        <label htmlFor="type">Monofásico
                            <input
                                type="radio"
                                value="monofasico"
                                name="type"
                                checked={type === "monofasico"}
                                onChange={onInputChange}
                            />
                        </label>
                        <label htmlFor="type">Trifásico
                            <input
                                type="radio"
                                value="trifasico"
                                name="type"
                                checked={type === "trifasico"}
                                onChange={onInputChange}
                            />
                        </label>
                    </div>
                </div>

                <div className="label-input">
                    <label htmlFor="voltage">Tensión:</label>
                    <input
                        type="number"
                        id="voltage"
                        name="voltage"
                        autoComplete='off'
                        placeholder='Voltios'
                        value={voltage}
                        onChange={onInputChange}
                    />
                </div>

                <div className="label-input">
                    <label htmlFor="fp">Factor de Potencia:</label>
                    <select id="fp" name="fp" onChange={onInputChange} defaultValue="0.9">
                        <option value="">Selecciona una opción</option>
                        <option value="1">1</option>
                        <option value="0.95">0.95</option>
                        <option value="0.9">0.9</option>
                        <option value="0.85">0.85</option>
                    </select>
                </div>

                <div className="system-options">
                    <p>Canalización:</p>
                    <div className='radio-input'>
                        <label htmlFor="conduit">PVC
                            <input
                                type="radio"
                                value="PVC"
                                name="conduit"
                                checked={conduit === "PVC"}
                                onChange={onInputChange}
                            />
                        </label>
                        <label htmlFor="conduit">Metalica
                            <input
                                type="radio"
                                value="ACERO"
                                name="conduit"
                                checked={conduit === "ACERO"}
                                onChange={onInputChange}
                            />
                        </label>
                    </div>
                </div>

                <div className="label-input">
                    <label htmlFor="long">Longitud:</label>
                    <input
                        type="number"
                        id="long"
                        name="long"
                        autoComplete='off'
                        placeholder='Metros'
                        value={long}
                        onChange={onInputChange}
                    />
                </div>

                <h3 className='system-result'>Calibre AWG: {awg}
                    <button className='btn-primary ' onClick={() => setVoltageDrop(!voltageDrop)}>Aceptar</button>
                </h3>



            </form> : null}




        </div>
    )

}