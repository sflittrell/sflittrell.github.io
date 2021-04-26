function ProjectPage() {

    return (
        <div className="container">
        <h1 className={"text-center display-2 mt-5 mb-5"}>Here's what I've been working on:</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="./img/SillyStory.png" className="card-img-top" alt="Silly Story Generator" />
                        <div className="card-body">
                            <h5 className="card-title">The Silly Story Generator</h5>
                            <p className="card-text">Generate pseudo random silly story using a custom name and other user defined variables.</p>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="button" className="btn btn-outline-warning text-dark ms-2 me-2 mb-2">Github</button>
                            <button type="button" className="btn btn-outline-warning text-dark ms-2 me-2 mb-2">View Project</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Completed - to be refactored</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./img/DigitalClock.png" className="card-img-top" alt="Digital Clock" />
                        <div className="card-body">
                            <h5 className="card-title">Digital Clock</h5>
                            <p className="card-text">A digital clock showing current time in either military of standard time. Uses HTML, CSS, Java Script</p>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="button" className="btn btn-outline-warning text-dark ms-2 me-2 mb-2 ms-1">Github</button>
                            <button type="button" className="btn btn-outline-warning text-dark ms-2 me-2 mb-2">View Project</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Completed - to be refactored</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./img/BobRoss.png" className="card-img-top" alt="Bob Ross for Constable" />
                        <div className="card-body">
                            <h5 className="card-title">Bob Ross for Constable</h5>
                            <p className="card-text">A mock campaign site dedicated to Bob Ross for city constable. Uses HTML, CSS, Java Script, Bootstrap</p>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="button" className="btn btn-outline-warning text-dark ms-2 me-2 mb-2">Github</button>
                            <button type="button" className="btn btn-outline-warning text-dark ms-2 me-2 mb-2">View Project</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Completed - to be refactored</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./img/PuzzleSlider.png" className="card-img-top" alt="Bob Ross for Constable" />
                        <div className="card-body">
                            <h5 className="card-title">The Puzzle Slider</h5>
                            <p className="card-text">A simple puzzle slider game. Can you solve it? Uses HTML, CSS, Java Script, React, Bootstrap</p>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="button" className="btn btn-outline-warning text-dark ms-2 me-2 mb-2">Github</button>
                            <button type="button" className="btn btn-outline-warning text-dark ms-2 me-2 mb-2">View Project</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Completed - to be refactored</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./img/WeatherApp.png" className="card-img-top" alt="Bob Ross for Constable" />
                        <div className="card-body">
                            <h5 className="card-title">Weather App</h5>
                            <p className="card-text">An app that shows the local weather for a given location. Uses HTML, CSS, Java Script, REST API Call, Bootstrap</p>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="button" className="btn btn-outline-warning text-dark ms-2 me-2 mb-2">Github</button>
                            <button type="button" className="btn btn-outline-warning text-dark ms-2 me-2 mb-2">View Project</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Completed - to be refactored</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./img/ToDoList.png" className="card-img-top" alt="Bob Ross for Constable" />
                        <div className="card-body">
                            <h5 className="card-title">To Do List</h5>
                            <p className="card-text">A simple app that helps you keep track of things to do. Uses HTML, CSS, Java Script, React, Bootstrap, Local Storage</p>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="button" className="btn btn-outline-warning text-dark ms-2 me-2 mb-2">Github</button>
                            <button type="button" className="btn btn-outline-warning text-dark ms-2 me-2 mb-2">View Project</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Completed - to be refactored</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProjectPage;