

import '../styles/components/VoltageDrop.scss';


export const VoltageDrop = () => {




    return (

        <div className="formulario">

            <label htmlFor="type">Tipo:</label>
            <select id="type" name="type">
                <option value="trifasico">Trifásico</option>
                <option value="monofasico">Monofásico</option>
            </select>


            <label htmlFor="fp">FP:</label>
            <select id="fp" name="fp" >
                <option value=""></option>
                <option value="1">1</option>
                <option value="0.95">0.95</option>
                <option value="0.9">0.9</option>
                <option value="0.85">0.85</option>
            </select>


            <label htmlFor="voltage">Tensión:</label>
            <input
                type="number"
                id="voltage"
                name="voltage"
                autoComplete='off'
            />

            <label htmlFor="loadCurrent">Carga:</label>
            <input
                type="number"
                id="loadCurrent"
                name="loadCurrent"
                autoComplete='off'
            />


            <label htmlFor="awg">AWG:</label>
            <select id="awg" name="awg" >
                <option value=""></option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
            </select>


            <label htmlFor="long">Longitud:</label>
            <input
                type="number"
                id="long"
                name="long"
                autoComplete='off'
            />

        </div>

    );
};


