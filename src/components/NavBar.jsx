import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

import { BackwardIcon } from './icons/BackWardIcon';

import '../styles/components/NavBar.scss';

const modulesRoutes = {
    '/': 'Cálculo Rápido',
    '/voltagedrop': 'Caida de Tensión',
    '/awgbycurrent': 'Selección de Alimentador',
    '/conduitfill': 'Ocupación de Ductos',
    '/getcurrent' :  'Cálculo de Corriente'
}

const getModule = (path) => {
    return modulesRoutes[path];
}


export const NavBar = () => {
    const [activeModule, setActiveModule] = useState('');
    const location = useLocation();

    // Actualizar activeModule cuando la ruta cambie
    useEffect(() => {
        const path = location.pathname;
        const module = getModule(path);
        setActiveModule(module);
    }, [location.pathname, setActiveModule]);

    return (
        <nav className="NavBar">

            {
                (location.pathname !='/') &&
                <Link to="/">
                    <BackwardIcon />
                </Link>
            }


            <p>{activeModule}</p>
        </nav>
    );
};
