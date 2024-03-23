import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { getMovieCreditsById } from "../../helpers/movies-api";
import Loader from "../../components/Loader/Loader"

export default function MovieCast({ }) {
    const [data, setData] = useState({});
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
    async function getData() {
        try {
            setIsLoading(true);
            const data = await getMovieCreditsById(movieId);
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
    
    return (
        <>
{isLoading ? 
<Loader /> :
<div>
{data.cast && (data.cast.length === 0 ? <h3>We have no information about cast of this movie</h3> : 
<ul className={css.castList}>
     {data.cast.map((actor) => {
    const makeImgSrc = () => {
     if (actor.profile_path) {
        return `https://image.tmdb.org/t/p/w500${actor.profile_path}`
     } else {
         return "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
     }
    };  
    return (
     <li className={css.actorCard} key={actor.id}>
            <img className={css.actorImage} src={makeImgSrc()} alt={actor.name} />
            <h3 className={css.actorName}>{actor.name}</h3>
        <p className={css.actorChar}>As: {actor.character}</p>
    </li>
        )
                })}
            </ul>)                
}
        </div>
            }
        </>
    )
}