import { Link } from "react-router-dom";

export const Home = () => {

    return (
        <>
            <Link to="/voltagedrop">Caida de Tension</Link>
            <Link to="/currentcapacity">Capacidad de Corriente</Link>
        </>
    )

}