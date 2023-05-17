import { Link } from "react-router-dom";
import { ForwardIcon } from "../components/icons/ForwardIcon";
import { WireIcon } from "../components/icons/WireIcon";
import { CalculatorICon } from "../components/icons/CalculatorICon";

import '../styles/pages/Home.scss';


export const Home = () => {

    return (
        <div className="home">

            <figure>
                <img src="src/assets/home-splash.webp" alt="Imagen del Home" />
            </figure>

            <ul className="home__items">
                <li className="home__items__item">
                    <Link to="/voltagedrop">
                        <CalculatorICon />
                        <span>Caida de Tensión</span>
                    </Link>
                </li>
                <li className="home__items__item">
                    <Link to="/awgbycurrent">
                        <WireIcon />
                        <span>Selección de Alimentador</span>
                    </Link>

                </li>
                <li className="home__items__item">
                    <Link to="/currentcapacity">
                        <ForwardIcon />
                        <span>Llenado de Bandeja</span>
                    </Link>
                </li>
            </ul>
        </div>
    )

}