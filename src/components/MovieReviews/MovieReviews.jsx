import css from "./MovieReviews.module.css";
import {getMovieReviewsById} from "../../helpers/movies-api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader"

export default function MovieReviews({ }) {
    const [data, setData] = useState([]);
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
    async function getData() {
        try {
            setIsLoading(true);
            const data = await getMovieReviewsById(movieId);
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
console.log(data);
    return (
    <>
        {(data.length === 0) ? <h3>We have no reviews on this movie yet</h3> :
             <>
            {isLoading ? 
                <Loader /> :
            <ul className={css.list}>
    {data.map((review) => {
                    return (
    <li className={css.reviewCard} key={review.id}>
    <h3 className={css.author}>{review.author}</h3>
    <p className={css.date}>{review.updated_at}</p>  
    <p className={css.content}>{review.content}</p>
    </li>
               )})}
            </ul>}</>} 
    </>
    )
}