import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from 'clsx';

const createLinkClass = ({ isActive }) => { 
    return clsx(css.link, isActive && css.active)
 };

export default function Navigation({}) {
    return (
        <div>
            <NavLink className={createLinkClass} to="/">Home</NavLink>
            <NavLink className={createLinkClass} to="/movies">Movies</NavLink>
        </div>
    )
}