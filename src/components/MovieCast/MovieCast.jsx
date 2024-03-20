import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { getMovieCreditsById } from "../../helpers/movies-api";


export default function MovieCast({ }) {
    const [data, setData] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
    async function getData() {
        try {
            const data = await getMovieCreditsById(movieId);
            setData(data);
        } catch (error) {
            console.log(error);
        }
        };
        getData()
    }, [movieId]) 
    
    return (
        <div>
            
            {data.cast &&
                <ul>
                {data.cast.map((actor) => {
                    return (
                         <li key={actor.id}>
                         <h3>{actor.name}</h3>
                            <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                            <p>{actor.character}</p>
                         </li>
                    )
                })}
            </ul>}
            
       
        </div>
    )
}