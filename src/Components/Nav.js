function Nav(props) {

    return (
        <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className="fw-light">Steven</span> <span className="fw-bold text-warning">Littrell</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" onClick={(e) => props.changePage('about')}>About</a>
                        <a className="nav-link" onClick={(e) => props.changePage('portfolio')}>Portfolio</a>
                        <a className="nav-link" onClick={(e) => props.changePage('resume')}>Resume</a>
                        <a className="nav-link" onClick={(e) => props.changePage('blog')}>Blog</a>
                        <a className="nav-link" onClick={(e) => props.changePage('contact')}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;