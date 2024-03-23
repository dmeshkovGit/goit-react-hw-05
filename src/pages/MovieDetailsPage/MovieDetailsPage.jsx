import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../../helpers/movies-api";
import css from "./MovieDetailsPage.module.css";
import { useState, useEffect, useRef } from "react";
import Loader from "../../components/Loader/Loader"
import clsx from "clsx";


export default function MovieDetailsPage({ }) {
    
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = useRef(location.state ?? "/movies")

    const createLinkClass = ({ isActive }) => {
        return (clsx(css.link, isActive && css.active))
    };

    useEffect(() => {
    async function getData() {
        try {
            setIsLoading(true);
            const data = await getMovieById(movieId);
            setData(data);
        } catch (error) {
            console.log(error);
        }
         finally {
            setIsLoading(false);
        }
        };
        getData()
    }, [movieId]) 

    const genres = () => {
        if (data.genres) {
        return data.genres.flatMap((genre) => {
                return genre.name
            }).join(", ")
        } else {
            return [];
        }
    };
    const votes = () => {
        if (data.vote_average) {
        return data.vote_average.toFixed(1)
        } else {
            return 0;
        }
    };
    const countries = () => {
        if (data.production_countries
) {
        return data.production_countries
.flatMap((country) => {
                return country.name
            }).join(", ")
        } else {
            return [];
        }
    };

    return (
        <div className={css.mainWrapper}>{isLoading ?
                <Loader /> :
            <div>
<div className={css.movieDetailWrapper}>
<img className={css.poster} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title}/>
<div className={css.movieInfoWrapper}>
    <h3 className={css.title}>{data.title}</h3>
    <h4 className={css.tagLine}>{data.tagline}</h4>
 <hr className={css.line} />
  <ul className={css.infoList}>
<li><p><b>Realese:</b> {data.release_date}</p></li>
<li><p><b>Runtime:</b> {data.runtime} min.</p></li>
<li><p><b>Genres:</b> {genres()}</p></li> <li><p><b>Votes:</b> {votes()}</p></li> 
<li>
<p><b>Countries:</b> {countries()}</p>
</li>                            
 </ul>
 <hr className={css.line} />
<p>{data.overview}</p>                       
</div>
</div>
            <ul className={css.addInfoList}>
                <li><NavLink className={createLinkClass} to="cast">Cast</NavLink></li>
                <li><NavLink className={createLinkClass} to="reviews">Reviews</NavLink></li>
            </ul>
                </div>
            }
            <Outlet />
    <Link className={css.backLink} to={backLink.current}>Go back</Link>
        </div>
    )
}