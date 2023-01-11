import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [isNavToggled, setIsNavToggled] = useState(false);

    return (
        <header className="primary-header">
            <div className="header-top">
                <div className="contact">
                    <div>
                        
                        <span>0800-555-444</span>
                    </div>
                    <div><span>estudio@castillomilanesi.com</span></div>
                    <div><span>Lun - Vie 8am - 6pm</span></div>
                </div>
                <ul className="social-media">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <button className="consultation">AGENDAR CONSULTA</button>
            </div>
            <div className="header-main"></div>
                <a href="/" className="logo">
                    <Image src="/example2.png" width={170} height={90} alt="logo" />
                </a>
                <button
                    className={`mobile-nav-toggle`}
                    onClick={() => setIsNavToggled(!isNavToggled)}
                    aria-controls="primary-navigation"
                    aria-expanded={isNavToggled}
                >
                    <img
                        className="icon-hamburguer"
                        src="assets/svg/hamburguer.svg"
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="icon-close"
                        src="assets/svg/x.svg"
                        alt=""
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Menu</span>
                </button>
                <nav
                    className={`navbar ${!isNavToggled ? "hidden" : ""}`}
                    id="primary-navigation"
                >
                    <ul aria-label="Primary" role="list" className="nav-list">
                        <li>Contacto</li>
                        <li>Referencias</li>
                        <li>Area de Actuación</li>
                        <li><img className="icon-sun" src="assets/svg/sun.svg" alt="" /></li>
                    </ul>
                </nav>
            </header>
    )
}