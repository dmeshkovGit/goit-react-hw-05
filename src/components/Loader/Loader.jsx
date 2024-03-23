import { MagnifyingGlass } from 'react-loader-spinner'
import css from './Loader.module.css'


export default function Loader() {
    return (
        <div>
<MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="magnifying-glass-loading"
  wrapperClass={css.loader}
  glassColor="#c0efff"
  color="rgb(245, 167, 12)"
  />
        </div>
    )
}