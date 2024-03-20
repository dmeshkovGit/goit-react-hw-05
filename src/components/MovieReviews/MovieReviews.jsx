import css from "./MovieReviews.module.css";
import {getMovieReviewsById} from "../../helpers/movies-api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieReviews({ }) {
    const [data, setData] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
    async function getData() {
        try {
            const data = await getMovieReviewsById(movieId);
            setData(data); 
        } catch (error) {
            console.log(error);
        }
        };
        
        getData()
    }, [movieId]) 
    console.log(data);
    return (
        <div>
            {data.results &&
            <ul>
                {data.results.map((review) => {
                    return (
                    <li key={review.id}>
                            <img src={review.author_details.avatar_path} alt={`${review.author} avatar`} /> 
                            <h3>{review.author}</h3>
                       <p>{review.content}</p>
                       <p>{review.updated_at}</p>     
                   </li>
               )})}
            </ul>}
        </div>
    )
}