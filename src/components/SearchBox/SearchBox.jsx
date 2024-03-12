import css from './SearchBox.module.css'



export default function SearchBox({ value, onChange }) {

    return (
        <div className={css.searchBoxWrapper}>
            <label className={css.searchBarLabel} htmlFor="searchBar">Find contacts by name</label>
            <input className={css.searchBarInput} type="text" id='searchBar' value={value} onChange={e => {
                onChange(e.target.value)
            }} />
        </div>
    )

}