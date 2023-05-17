import { Link } from "react-router-dom";
import { ForwardIcon } from "../components/icons/ForwardIcon";

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
                        Caida de Tensión
                        <ForwardIcon />
                    </Link>
                </li>
                <li>
                    <Link className="home__items__item" to="/awgbycurrent">
                        Selección de Alimentador
                        <ForwardIcon />
                    </Link>

                </li>
                <li>
                    <Link className="home__items__item" to="/currentcapacity">
                        Llenado de Bandeja
                        <ForwardIcon />
                    </Link>
                </li>
            </ul>
        </div>
    )

}