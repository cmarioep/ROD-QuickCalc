import { useForm } from '../hooks/useForm';

import '../styles/pages/ConduitFill.scss';

export const ConduitFill= () => {

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
            <h3>Ocupación de Ductos</h3>

            <div>
                <p>Tipo de Ducto: </p>
                <p>{conduitType}</p>
                <p>Diametro: </p>
                <p>{diameter}</p>

            </div>
        </div>
    )

}