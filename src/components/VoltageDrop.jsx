

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

        <form className="formulario">

            <div>
                <p>Tipo:</p>
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






            <label htmlFor="voltage">Tensión:</label>
            <input
                type="number"
                id="voltage"
                name="voltage"
                autoComplete='off'
                onChange={onInputChange}
                value={voltage}
            />

            <div>
                <label htmlFor="loadCurrent">Carga:</label>
                <input
                    type="number"
                    id="loadCurrent"
                    name="loadCurrent"
                    autoComplete='off'
                    onChange={onInputChange}
                    value={loadCurrent}
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



            <div>
                <div>
                    <p>Material:</p>
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


