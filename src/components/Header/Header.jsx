import {Link} from 'react-router-dom'
import './Header.css'

import imdbLogo from '../../assets/images/imdb-logo-transparent.png'
import movieLogo from '../../assets/images/pngwing.png'

const Header = () => {
    return (
        <div className="header">
            <div className='headerLeft'>
                <Link to='/'><img src={movieLogo} alt="" className='header__icon'/></Link>
                <Link to='/movies/popular'><span> Popular </span></Link>
                <Link to='/movies/top_rated'><span> Top Rated </span></Link>
                <Link to='/movies/upcoming'><span>Upcoming </span> </Link>
            </div>
        </div>
    )
}

export default Header