import { Link } from "react-router-dom";

import '../styles/pages/Home.scss';
import { ForwardIcon } from "../components/icons/ForwardIcon";




export const Home = () => {

    return (
        <ul className="home">
            <li><Link className="home__item" to="/voltagedrop">Caida de Tensión <ForwardIcon/> </Link></li>
            <li><Link className="home__item" to="/awgbycurrent">Capacidad de Corriente <ForwardIcon/> </Link></li>
            <li><Link className="home__item" to="/currentcapacity">Selección de Alimentador<ForwardIcon/> </Link></li>
        </ul>
    )

}