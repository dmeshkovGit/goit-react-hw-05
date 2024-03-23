import css from './MovieCard.module.css'
export default function MovieCard({ movie }) {

    const movieName = () => {
        if (movie.title.length <= 19) {
        return movie.title
        } else {
         return `${movie.title.substring(0,18)}...`
        }
    }; 

    const vote = () => { return movie.vote_average.toFixed(1) };
  
    
return (
    <div className={css.wrapper}>
    <div className={css.poster}><img className={css.posterImg} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /></div>
    <h3 className={css.title}>{movieName()}</h3>
    <p className={css.realese}>{movie.release_date}</p>
    <p className={css.vote}>{vote()}</p>
    </div>
)
}