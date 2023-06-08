import { useEffect, useState } from 'react';

import { useForm } from '../hooks/useForm';
import { getVoltageDrop } from '../utils/getVoltageDrop';

import '../styles/pages/VoltageDrop.scss';


export const VoltageDrop = () => {

    const { type, material, conduit, voltage, fp, loadType, loadCurrent, awg, long, formState, onInputChange, onResetForm } = useForm(
        {
            type: 'trifasico',
            voltage: '208',
            loadType: 'amperios',
            loadCurrent: '',
            fp: '0.9',
            material: 'Cu',
            conduit: 'PVC',
            awg: '',
            long: ''
        }
    );

    const [voltageDrop, setVoltageDrop] = useState('')

    useEffect(() => {
        setVoltageDrop(getVoltageDrop(type, material, conduit, voltage, fp, loadType, loadCurrent, awg, long));
    }, [formState])

    return (
        <>
            <form className="formulario">

                <div className="formulario__container grid-system-type">

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

                </div>

                <div className="formulario__container grid-system-current">

                    <div className="system-options">
                        <p>Carga:</p>
                        <div className="radio-input">
                            <label htmlFor="loadType">kVA
                                <input
                                    type="radio"
                                    value="kva"
                                    name="loadType"
                                    checked={loadType === "kva"}
                                    onChange={onInputChange}
                                />
                            </label>
                            <label htmlFor="loadType">Amperios
                                <input
                                    type="radio"
                                    value="amperios"
                                    name="loadType"
                                    checked={loadType === "amperios"}
                                    onChange={onInputChange}
                                />
                            </label>
                        </div>
                    </div>

                    <div className="label-input --mb-1">
                        <label htmlFor="loadCurrent">Carga:</label>
                        <input
                            type="number"
                            id="loadCurrent"
                            name="loadCurrent"
                            autoComplete='off'
                            placeholder='kVA o Amperios'
                            value={loadCurrent}
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="label-input">
                        <label htmlFor="fp">Factor de Potencia:</label>
                        <select id="fp" name="fp" onChange={onInputChange} defaultValue="0.9">
                            <option value="">Seleccionar</option>
                            <option value="1">1</option>
                            <option value="0.95">0.95</option>
                            <option value="0.9">0.9</option>
                            <option value="0.85">0.85</option>
                        </select>
                    </div>

                </div>


                <div className="formulario__container grid-system-path">

                    <div className="system-options grid-system-path-wire">
                        <p>Alimentador:</p>
                        <div className="radio-input">
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
                        <label htmlFor="awg">Calibre AWG:</label>
                        <select id="awg" name="awg" onChange={onInputChange} defaultValue="">
                            <option value="">Seleccionar</option>
                            <option value="14">14</option>
                            <option value="12">12</option>
                            <option value="10">10</option>
                            <option value="8">8</option>
                            <option value="6">6</option>
                            <option value="4">4</option>
                            <option value="2">2</option>
                            <option value="1/0">1/0</option>
                            <option value="2/0">2/0</option>
                            <option value="4/0">4/0</option>
                            <option value="250">250</option>
                            <option value="300">300</option>
                            <option value="350">350</option>
                            <option value="500">500</option>
                            <option value="750">750</option>
                        </select>
                    </div>

                    <div className="system-options grid-system-path-conduit">
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

                </div>

                <h3 className='system-result grid-system-result'>%Reg: {(voltageDrop) ? voltageDrop : null} </h3>

            </form>

        </>

    );
};


