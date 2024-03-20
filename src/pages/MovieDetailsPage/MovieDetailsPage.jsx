import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../../helpers/movies-api";
import css from "./MovieDetailsPage.module.css";
import { useState, useEffect, useRef } from "react";


export default function MovieDetailsPage({ }) {
    
    const [data, setData] = useState({});
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = useRef(location.state ?? "/movies")
    useEffect(() => {
    async function getData() {
        try {
            const data = await getMovieById(movieId);
            setData(data);
        } catch (error) {
            console.log(error);
        }
        };
        getData()
    }, [movieId]) 
    
    return (
        <div>
            <Link to={backLink.current}>Go back</Link>

            <div>
<img src={`https://image.tmdb.org/t/p/w200${data.
poster_path}`} alt={data.title} />
            </div>

            <ul>
                <li><NavLink to="cast">Cast</NavLink></li>
                <li><NavLink to="reviews">Reviews</NavLink></li>
            </ul>
            <Outlet/>
        </div>
    )
}