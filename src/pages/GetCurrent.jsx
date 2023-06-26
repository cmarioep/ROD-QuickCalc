import { useForm } from '../hooks/useForm';

import '../styles/pages/GetCurrent.scss';


export const GetCurrent = () => {

    const { conduitType, diameter, awg, awgType, quantity, formState, onInputChange, onResetForm } = useForm(
        {
            loadType: 'KVA',
            load: '3/',
            fp: '0.9',
        }
    );

    return (
        <div className="get-current">

            <h1>Calcular Corriente</h1>

        </div>
    )

}