import { Link } from "react-router-dom";

import '../styles/pages/Home.scss';

export const Home = () => {

    return (
        <div className="home">
            <Link to="/voltagedrop">Caida de Tension</Link>
            <Link to="/currentcapacity">Capacidad de Corriente</Link>
        </div>
    )

}