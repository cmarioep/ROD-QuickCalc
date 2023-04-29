import { NavBar } from '../components/NavBar';

import '../styles/layout/Layout.scss';


export const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <NavBar />
            {children}
        </div>
    );
};