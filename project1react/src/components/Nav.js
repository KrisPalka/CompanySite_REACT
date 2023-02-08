const Nav = () => {
    return (
        <div className="navbar_main_container ">
            <div className="page_container">
                <nav className="navbar_container">
                    <a className="anchor_company" href="/">
                        moja firma
                    </a>
                    <ul className="main_nav">
                        <li>
                            <a className="nav-el1" href="#our_spec">
                                o nas
                            </a>
                        </li>
                        <li>
                            <a className="nav-el2" href="#heading3">
                                oferta
                            </a>
                        </li>
                        <li>
                            <a className="nav-el3" href="/">
                                kontakt
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
export default Nav;
