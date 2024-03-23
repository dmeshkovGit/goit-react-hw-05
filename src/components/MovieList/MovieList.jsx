import { Link, useLocation } from "react-router-dom"
import css from "./MovieList.module.css"
import MovieCard from "../MovieCard/MovieCard";


export default function MovieList({ movies }) {
  const location = useLocation(); 
  return (
<div>
<ul className={css.list}>
{movies.map((movie) => {
return (
<li className={css.listItem} key={movie.id}>
        <Link className={css.link} to={`/movies/${movie.id}`} state={location}>
            <MovieCard movie={movie} />
</Link>
</li>)})}
</ul>
</div>
    )
}