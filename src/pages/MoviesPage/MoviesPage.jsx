import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { getMovies } from "../../helpers/movies-api";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader"
import { IoSearch } from "react-icons/io5";


export default function MoviesPage({ }) {
    const [params, setParams] = useSearchParams();
    const searchValue = params.get("searchQuery");
    const [searchQuery, setSearchQuery] = useState(searchValue ?? "");
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isMovies, setIsMovies] = useState(true)

    useEffect(() => {
    async function getData() {
        try {
            setIsLoading(true);
            const data = await getMovies(searchQuery);
            setData(data.results);
            if (data.results.length === 0) {
                setIsMovies(false)
            } else {
                setIsMovies(true)
            }
        } catch (error) {
            console.log(error);
        }
          finally {
            setIsLoading(false);
        }
        };
        if (searchQuery !== "") {
            getData()
        }
},[searchQuery]) 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.elements[0].value)
        params.set("searchQuery", e.target.elements[0].value);
        setParams(params);
        e.target.reset();
    };
    

    return (
        <div className={css.wrapper}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input className={css.input} type="text" /> 
                <button className={css.btn} type="submit"><IoSearch className={css.btnIcon}/></button>
            </form>
          {isLoading ?
                <Loader /> :
                (isMovies ?
                <MovieList movies={data} /> :
                <div>There are no movies with this title</div>)}
        </div>
    )
}