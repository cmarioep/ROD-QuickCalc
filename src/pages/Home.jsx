import { Link } from "react-router-dom";
import { ForwardIcon } from "../components/icons/ForwardIcon";
import '../styles/pages/Home.scss';


export const Home = () => {

    return (
        <ul className="home">
            <li>
                <Link className="home__item" to="/voltagedrop">
                    Caida de Tensión
                    <ForwardIcon />
                </Link>
            </li>
            <li>
                <Link className="home__item" to="/awgbycurrent">
                    Selección de Alimentador
                    <ForwardIcon />
                </Link>

            </li>
            <li>
                <Link className="home__item" to="/currentcapacity">
                    Llenado de Bandeja
                    <ForwardIcon />
                </Link>
            </li>
        </ul>
    )

}