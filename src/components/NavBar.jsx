import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../styles/components/NavBar.scss';

const modulesRoutes = {
    '/': 'Cálculo Rápido',
    '/voltagedrop': 'Caida de Tensión',
    '/awgbycurrent': 'Selección de Alimentador',
    '/conduitfill': 'Ocupación de Ductos',
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
        console.log(path);
        const module = getModule(path);
        setActiveModule(module);
    }, [location.pathname, setActiveModule]);

    return (
        <nav className="NavBar">
            <p>{activeModule}</p>
        </nav>
    );
};
