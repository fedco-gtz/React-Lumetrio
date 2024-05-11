import React from 'react';
import '../../styles/Header.css'
import logo from '../../images/logo.png';
import NavBar from './NavBar/NavBar';

function Header() {
    return (
        <header>
            <NavBar />
            <section className='header'>
            <img className='logo' src={logo} alt="Logo ZapaTienda" />
            <h3 className='caption'>¡COMPRA FUNKO POP EN ARGENTINA!</h3>
            </section>
            <div className='text'>
                <p>Envío rápido a domicilio gratis con tu compra de 2 o más Funko Pop. Tu pedido despachado en 24hs.</p>
            </div>
        </header>
    );
}

export default Header;