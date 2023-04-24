

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

            <p>Tipo de Sistema:</p>
            <div className='group-container'>
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

            <div>
                <p>Carga en:</p>
                <div className="group-container">
                    <label htmlFor="type">kVA
                        <input
                            type="radio"
                            value="kva"
                            name="loadType"
                            checked={loadType === "kva"}
                            onChange={onInputChange}
                        />
                    </label>
                    <label htmlFor="type">Amperrios
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

            <div>
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
                <label htmlFor="fp">FP:</label>
                <select id="fp" name="fp" onChange={onInputChange}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="0.95">0.95</option>
                    <option value="0.9">0.9</option>
                    <option value="0.85">0.85</option>
                </select>
            </div>

            <label htmlFor="voltage">Tensión:
                <input
                    type="number"
                    id="voltage"
                    name="voltage"
                    autoComplete='off'
                    placeholder='Voltios'
                    value={voltage}
                    onChange={onInputChange}
                />
            </label>

            <div>
                <div>
                    <p>Material:</p>
                    <label htmlFor="material">Cobre</label>
                    <input
                        type="radio"
                        value="Cu"
                        name="material"
                        checked={material === "Cu"}
                        onChange={onInputChange}
                    />
                    <label htmlFor="material">Aluminio</label>
                    <input
                        type="radio"
                        value="Al"
                        name="material"
                        checked={material === "Al"}
                        onChange={onInputChange}
                    />
                </div>

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
            </div>

            <div>
                <p>Canalización:</p>
                <label htmlFor="conduit">PVC </label>
                <input
                    type="radio"
                    value="PVC"
                    name="conduit"
                    checked={conduit === "PVC"}
                    onChange={onInputChange}
                />

                <label htmlFor="conduit">Metalica</label>
                <input
                    type="radio"
                    value="ACERO"
                    name="conduit"
                    checked={conduit === "ACERO"}
                    onChange={onInputChange}
                />
            </div>

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

        </form>

    );
};


