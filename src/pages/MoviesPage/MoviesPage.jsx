import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { getMovies } from "../../helpers/movies-api";
import { useLocation, useSearchParams } from "react-router-dom";


export default function MoviesPage({ }) {
    const [params, setParams] = useSearchParams();
    const searchValue = params.get("searchQuery");
    const [searchQuery, setSearchQuery] = useState(searchValue ?? "");
    const [data, setData] = useState([])
    
    useEffect(() => {
    async function getData() {
        try {
            const data = await getMovies(searchQuery);
            setData(data);
        } catch (error) {
            console.log(error);
        }
        };
        getData()
},[searchQuery]) 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.elements[0].value)
        params.set("searchQuery", e.target.elements[0].value);
        setParams(params);
        e.target.reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" /> 
                <button type="submit">Search</button>
            </form>
            <MovieList movies={data}/>
        </div>
    )
}