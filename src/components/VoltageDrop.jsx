

import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/components/VoltageDrop.scss';
import { getVoltageDrop } from '../utils/getVoltageDrop';



export const VoltageDrop = () => {

    const { type, material, conduit, voltage, fp, loadType, loadCurrent, awg, long, formState, onInputChange, onResetForm } = useForm({ type: '', material: '', conduit: '', voltage: '', fp: '', loadType: '', loadCurrent: '', awg: '', long: '' });

    const [voltageDrop, setVoltageDrop] = useState('')

    useEffect(() => {
        setVoltageDrop(getVoltageDrop(type, material, conduit, voltage, fp, loadType, loadCurrent, awg, long))
        console.log(formState)
    }, [formState])

    return (

        <form className="formulario">

            <div className="formulario__container">

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

            <div className="formulario__container">

                <div className="system-options">
                    <p>Carga:</p>
                    <div className="radio-input">
                        <label htmlFor="type">kVA
                            <input
                                type="radio"
                                value="kva"
                                name="loadType"
                                checked={loadType === "kva"}
                                onChange={onInputChange}
                            />
                        </label>
                        <label htmlFor="type">Amperios
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

                <div className="label-input">
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
                    <select id="fp" name="fp" onChange={onInputChange}>
                        <option value="" disabled selected>Selecciona una opción</option>
                        <option value="1">1</option>
                        <option value="0.95">0.95</option>
                        <option value="0.9">0.9</option>
                        <option value="0.85">0.85</option>
                    </select>
                </div>

            </div>


            <div className="formulario__container">

                <div className="system-options">
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
                    <select id="awg" name="awg" onChange={onInputChange}>
                    <option value="" disabled selected>Selecciona una opción</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
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

            <h3>{voltageDrop ? `%Reg: ${voltageDrop}` : null}</h3>

        </form>

    );
};


