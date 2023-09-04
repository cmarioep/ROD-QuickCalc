import { useForm } from '../hooks/useForm';

import { WiresOnConduit } from '../components/WiresOnConduit';

import '../styles/pages/ConduitFill.scss';

const wiresInfo = [
    {
        awg: "1/0",
        isolation: "THHN",
        quantity: 3
    },
    {
        awg: "2",
        isolation: "THHN",
        quantity: 3
    }
]

export const ConduitFill = () => {

    const { conduitType, diameter, awg, awgType, quantity, formState, onInputChange, onResetForm } = useForm(
        {
            conduitType: 'PVC',
            diameter: '3/4',
            awg: '8',
            awgType: 'THHN',
            quantity: '10',
        }
    );

    return (
        <div className="conduit-fill">

            <div className='formulario__container'>

                <p>Tipo de Ducto</p>

                <div className="label-input">
                    <label htmlFor="fp">Tipo de Ducto:</label>
                    <select id="conduitType" name="conduitType" onChange={onInputChange} defaultValue="THWN">
                        <option value="">Seleccionar</option>
                        <option value="PVC">PVC</option>
                        <option value="EMT">EMT</option>
                        <option value="IMC">IMC</option>
                        <option value="SCH40 ">SCH40 </option>
                    </select>
                </div>

                <div className="label-input">
                    <label htmlFor="fp">Diametro:</label>
                    <select id="diameter" name="diameter" onChange={onInputChange} defaultValue="Seleccionar">
                        <option value="">Seleccionar</option>
                        <option value="1">1"</option>
                        <option value="3/4">3/4"</option>
                        <option value="1/2">1/2"</option>
                        <option value="1-1/4">1-1/4"</option>
                    </select>
                </div>

            </div>

            <div className='formulario__container'>
                <WiresOnConduit wiresInfo={wiresInfo} />
            </div>

        </div>
    )

}