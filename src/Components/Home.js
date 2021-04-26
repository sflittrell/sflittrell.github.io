import './Home.css';

function Home() {
    return (
        <div className="container-fluid hero">
            <div className="row">
                <div className="col p-0">
                    <div className="card bg-dark rounded-0 text-white d-flex">
                        <img className="img-fluid card-img" src="./img/Header1.png" alt="" />
                        <div className="card-img-overlay mt-3 text-center position-absolute top-50 start-50 translate-middle">
                            <h1 className="card-title h1_shadow fw-bold display-1 text-lite">Steven Littrell</h1>
                            <h3 className="display-5 h3_shadow fw-light text-light">Full Stack Web Developer</h3>
                            <h5 className="fs-4 h5_shadow text-light fw-light">Designing solutions one byte at a time</h5>
                            <div className="row">
                                <div className="col pt-5">
                                    <a href="#blogPost" className="link-light">
                                        <svg className="arrow-shadow" xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="black" className="bi bi-caret-down-square" viewBox="0 0 16 16">
                                            <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
                                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-warning text-warning" id="blogPost">
                    .
                    </div>

                <div className="row">
                    <div className="mt-5 col-5 offset-1">
                        <h1 >About Me</h1>
                        <h5 className="text-muted pb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco laboris.
                    </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                        <div className="row pt-4">
                            <div className="col-2">
                                <img height="60" src="./img/GitHub-Mark-120px-plus.png" />
                            </div>
                            <div className="col-2">
                                <img height="60" src="./img/linkedIn.png" />
                            </div>
                            <div className="col-2">
                                <img height="60" src="./img/twitter.png" />
                            </div>
                            <div className="col-2">
                                <img height="64" src="./img/Instagram.png" />
                            </div>
                            <div className="col-2">
                                <img height="60" src="./img/facebook.png" />
                            </div>

                        </div>
                        <div className="row pt-4">

                        </div>
                    </div>
                    <div className="col-5 offset-1">
                        <img id="plan" height="500" src="./img/ArchDrawing.jpeg" />
                    </div>
                </div>
                <div className="row ms-3 pt-4 pb-5">
                    <div className="col">
                        <img height="200" src="./img/berlin.png" />
                    </div>
                    <div className="col">
                        <img height="200" src="./img/dayofthedead.png" />
                    </div>
                    <div className="col">
                        <img height="200" src="./img/rafting.png" />
                    </div>
                    <div className="col">
                        <img height="200" src="./img/buda.png" />
                    </div>
                    <div className="col">
                        <img height="200" src="./img/t-shirts.png" />
                    </div>
                </div>
                <div className="bg-dark text-dark p-5" id="blogPost">
                    .
                    </div>
                    <div className="bg-warning text-warning mb-5" id="blogPost">
                    .
                    </div>
            </div>
        </div>
    );
}

export default Home;