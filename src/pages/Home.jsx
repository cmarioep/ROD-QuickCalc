import { Link } from "react-router-dom";
import { ForwardIcon } from "../components/icons/ForwardIcon.jsx";
import { WireIcon } from "../components/icons/WireIcon.jsx";
import { CalculatorICon } from "../components/icons/CalculatorIcon.jsx";
import { PieChart } from "../components/icons/PieChart.jsx";

import '../styles/pages/Home.scss';
import home from '../assets/imagotipo.webp';


export const Home = () => {

    return (
        <div className="home">

            <figure>
                <img src={home} alt="Imagen del Home" />
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
                    <Link to="/conduitfill">
                        <PieChart />
                        <span>Ocupación de Ductos</span>
                    </Link>
                </li>
                <li className="home__items__item">
                    <Link to="/conduitfill">
                        <PieChart />
                        <span>Calcular Corriente</span>
                    </Link>
                </li>
            </ul>

        </div>
    )

}