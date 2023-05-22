import { NavBar } from '../components/NavBar';
import { ShapeDivider } from "../components/ShapeDivider.jsx";

import '../styles/layout/Layout.scss';


export const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <NavBar />
            {children}
            <ShapeDivider />
        </div>
    );
};