import { useState, useEffect } from 'react';

import { useForm } from '../hooks/useForm';
import { getLoadCurrent } from '../utils/getCurrent';

import '../styles/pages/GetCurrent.scss';


export const GetCurrent = () => {

    const { loadType, load, type, fp, voltage, onInputChange, formState } = useForm(
        {
            loadType: 'kVA',
            load: '',
            fp: '0.9',
            type: 'trifasico',
            voltage: '208',
        }
    );


    const [current, setCurrent] = useState('');

    useEffect(() => {
        setCurrent(getLoadCurrent(loadType, load, fp, type, voltage));
    }, [formState])


    return (
        <div className="get-current">

            <div className="formulario__container grid-system-current">

                <div className="system-options">
                    <p>Carga:</p>
                    <div className="radio-input">
                        <label htmlFor="loadType">kVA
                            <input
                                type="radio"
                                value="kVA"
                                name="loadType"
                                checked={loadType === "kVA"}
                                onChange={onInputChange}
                            />
                        </label>
                        <label htmlFor="loadType">kW
                            <input
                                type="radio"
                                value="kW"
                                name="loadType"
                                checked={loadType === "kW"}
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
                        name="load"
                        autoComplete='off'
                        placeholder={loadType}
                        value={load}
                        onChange={onInputChange}
                    />
                </div>

                {(loadType === 'kW') && <div className="label-input">
                    <label htmlFor="fp">Factor de Potencia:</label>
                    <select id="fp" name="fp" onChange={onInputChange} defaultValue="0.9">
                        <option value="">Seleccionar</option>
                        <option value="1">1</option>
                        <option value="0.95">0.95</option>
                        <option value="0.9">0.9</option>
                        <option value="0.85">0.85</option>
                    </select>
                </div>}

            </div>

            <div className="formulario__container grid-system-type">

                <div className='system-options system-options--three-options'>
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
                        <label htmlFor="type">Bifásico
                            <input
                                type="radio"
                                value="bifasico"
                                name="type"
                                checked={type === "bifasico"}
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
                    <select id="voltage" name="voltage" onChange={onInputChange} defaultValue="208">
                        <option value="">Seleccionar</option>
                        <option value="120">120 V</option>
                        <option value="127">127 V</option>
                        <option value="208">208 V</option>
                        <option value="220">220 V</option>
                        <option value="240">240 V</option>
                        <option value="277">277 V</option>
                        <option value="440">440 V</option>
                        <option value="460">460 V</option>
                    </select>
                </div>

            </div>

            <div className='system-result grid-system-result'>
                <h3>Corriente: {(current) ? `${current}A` : null}</h3>
                {(current) ? <span>Corriente al 125%: {1.25 * current}A </span> : null}
            </div>


        </div>
    )

}