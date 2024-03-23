import { NavLink, useLocation } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from 'clsx';

export default function Navigation({ }) {
const location = useLocation().pathname;
const isMoviesPageActive = location.includes("/movies");
const createLinkClass = ({ isActive }) => { 
    return clsx(css.link, isActive ? css.active : css.notActive)
};
    const ghostOnHomeClass = clsx(css.homeGhost,isMoviesPageActive ? css.ghostOnMovies : css.ghostOnHome);
    const ghostOnMoviesClass = clsx(css.moviesGhost,isMoviesPageActive ? css.ghostOnMovies : css.ghostOnHome)


    return (
        <div className={css.mainWrapper}>
            <div className={css.navWrapper}>
            <NavLink className={createLinkClass} to="/">Home</NavLink>
            <div className={ghostOnMoviesClass}></div> 
            <NavLink className={createLinkClass} to="/movies">Movies</NavLink>
            <div className={ghostOnHomeClass}></div>    
        </div>
       </div>
    )
}