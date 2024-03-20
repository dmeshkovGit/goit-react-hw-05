import { Link, NavLink } from "react-router-dom";
import css from "./HomePage.module.css";
import { getTrendingMovies } from "../../helpers/movies-api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";


export default function HomePage({ }) {

   const [data, setData] = useState([])

    useEffect(() => {
    async function getData() {
        try {
            const data = await getTrendingMovies();
            setData(data);
        } catch (error) {
            console.log(error);
        }
        };
        getData()
},[]) 


    return (
        <div>
            <h1>Trending today</h1>
            <MovieList movies={data} />
        </div>
    )
}