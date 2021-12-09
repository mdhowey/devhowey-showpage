import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import screenWidths from '../libs/configVars';
import { MdSubject } from 'react-icons/md';
import { RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [currentSize, setCurrentSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleScreenSize = () => {
            setCurrentSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("navbarResize", handleScreenSize);

        return () => window.removeEventListener("navbarResize", handleScreenSize);
    }, []);

    useEffect(() => {
        if (currentSize.width > screenWidths.phone && isMenuActive) {
            setIsMenuActive(false);
        }
    }, [currentSize.width, isMenuActive]);

    const handleMenuToggle = () => {
        setIsMenuActive((e) => !e);
    };

    const handleBlogClick = () => {
        // @TODO change to blog
        setIsMenuActive();
        navigate("/");
    };
    const handleContactClick = () => {
        // @TODO change to contact 
        setIsMenuActive();
        navigate("/");
    };

    return (
        <header className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar-logo">
                    devhowey
                </Link>
                <nav>
                    <ul className="menu">
                        <li className="item">
                            <Link to="/" onClick={handleMenuToggle}>
                                Home
                            </Link>
                        </li>
                        <li className="item">
                            {/* @TODO change to about */}
                            <Link to="/" onClick={handleMenuToggle}>
                                About
                            </Link>
                        </li>
                        <li className="item has-submenu">
                            <a tabIndex="0">Projects</a>
                            <ul className="submenu">
                                <li className="subitem">
                                    <Link to="/" onClick={handleMenuToggle}>
                                        {/* @TODO change to Fullstack/CRUD */}
                                        Fullstack/CRUD
                                    </Link>
                                </li>
                                <li className="subitem">
                                    <Link to="/" onClick={handleMenuToggle}>
                                        {/* @TODO change to Games */}
                                        Games
                                    </Link>
                                </li>
                                <li className="subitem">
                                    <Link to="/" onClick={handleMenuToggle}>
                                        {/* @TODO change to CLI Applications */}
                                        CLI Applications
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="item has-submenu">
                            <a tabIndex="0">Services</a>
                            <ul className="submenu">
                                <li className="subitem">
                                    <Link to="/" onClick={handleMenuToggle}>
                                        {/* @TODO change to webpage design */}
                                        Web Design
                                    </Link>
                                </li>
                                <li className="subitem">
                                    <Link to="/" onClick={handleMenuToggle}>
                                        {/* @TODO change to content writing */}
                                        Content Writing
                                    </Link>
                                </li>
                                <li className="subitem">
                                    <Link to="/" onClick={handleMenuToggle}>
                                        {/* @TODO change to teaching */}
                                        Teaching
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <button className="item btn primary" onClick={handleBlogClick}>Blog</button>
                    <button className="item btn secondary" onClick={handleContactClick}>Contact</button>
                </nav>
                <div className="header-toggle">
                    {!isMenuActive ? (
                        <MdSubject />
                    ) : (
                        <RiCloseLine />
                    )}
                </div>
            </div>
        </header>
    )
}

export default Navbar
