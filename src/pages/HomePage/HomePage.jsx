import { Link, NavLink } from "react-router-dom";
import css from "./HomePage.module.css";
import { getTrendingMovies } from "../../helpers/movies-api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader"


export default function HomePage({ }) {

   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
    async function getData() {
        try {
            setIsLoading(true);
            const data = await getTrendingMovies();
            setData(data);
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
        };
        getData()
},[]) 


    return (
        <div className={css.wrapper}>
            <h1 className={css.title}>What`s on trend today ?</h1>
            {isLoading ?
                <Loader /> :
                <MovieList movies={data} />}
        </div>
    )
}