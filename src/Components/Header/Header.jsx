import './Header.css'
import { Link } from 'react-router-dom';

import Logo from '/src/assets/Hartland-logo.png'

function Header(){
    function openNav() {
        let nav = document.getElementById("nav");

        const toggleBtnIcon = document.querySelector(".toggle_btn i");

        nav.classList.toggle("open");
        const isOpen = nav.classList.contains("open");

        toggleBtnIcon.classList = isOpen ? "hamburger1" : "hamburger";
    }

    return(
        <header className="header">
            <Link to="/">
                <img src={Logo} alt="Hartland Logo" width="40" />
            </Link>

            <button className="toggle_btn" onClick={() => openNav()}>
                <ion-icon name="albums-outline" class="hamburger"></ion-icon>
            </button>

            <div className="menuBlock" id="menu">
                <nav className="nav" id="nav">
                    <Link to='/' className='navLink'>Home</Link>
                    <Link to='/graphic-design' className='navLink'>Graphic Designing</Link>
                    <Link to='/videography' className='navLink'>Videography</Link>
                    <Link to='/web-dev' className='navLink'>Website Development</Link>
                </nav>
            </div>
            <div className="socialBlock">
                <a href="https://www.youtube.com/@HARTLANDdigital"><ion-icon name="logo-youtube" class="menuIcon"></ion-icon></a>
                <a href="https://www.facebook.com/hartlanddigital"><ion-icon name="logo-facebook" class="menuIcon"></ion-icon></a>
            </div>
        </header>
    );
}

export default Header