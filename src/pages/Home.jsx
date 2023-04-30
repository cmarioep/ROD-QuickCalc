import { Link } from "react-router-dom";

import '../styles/pages/Home.scss';

export const Home = () => {

    return (
        <ul className="home">
            <li><Link className="home__item" to="/voltagedrop">Caida de Tensión</Link></li>
            <li><Link className="home__item" to="/currentcapacity">Selección de Alimentador</Link></li>
            <li><Link className="home__item" to="/currentcapacity">Capacidad de Corriente</Link></li>
        </ul>
    )

}