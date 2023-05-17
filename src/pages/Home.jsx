import { Link } from "react-router-dom";
import { ForwardIcon } from "../components/icons/ForwardIcon";
import { WireIcon } from "../components/icons/WireIcon";

import '../styles/pages/Home.scss';


export const Home = () => {

    return (
        <div className="home">

            <figure>
                <img src="src/assets/home-splash.webp" alt="Imagen del Home" />
            </figure>

            <ul className="home__items">
                <li>
                    <Link className="home__items__item" to="/voltagedrop">
                        <ForwardIcon />
                        <span>Caida de Tensión</span>
                    </Link>
                </li>
                <li className="home__items__item">
                    <Link to="/awgbycurrent">
                        <WireIcon />
                        <span>Selección de Alimentador</span>
                    </Link>

                </li>
                <li>
                    <Link className="home__items__item" to="/currentcapacity">
                        <ForwardIcon />
                        <span>Llenado de Bandeja</span>
                    </Link>
                </li>
            </ul>
        </div>
    )

}