export const Navbar = ({setCategory}) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsToday</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <div onClick={()=>setCategory("technology")} type="button" className="btn btn-outline-light m-1">Technology</div>
            </li>
            <li className="nav-item">
              <div onClick={()=>setCategory("business")} className="btn btn-outline-light m-1">Business</div>
            </li>
            <li className="nav-item">
              <div onClick={()=>setCategory("health")} className="btn btn-outline-light m-1">Health</div>
            </li>
            <li className="nav-item">
              <div onClick={()=>setCategory("science")} className="btn btn-outline-light m-1">Science</div>
            </li>
            <li className="nav-item">
              <div onClick={()=>setCategory("sports")} className="btn btn-outline-light m-1">Sports</div>
            </li>
            <li className="nav-item">
              <div onClick={()=>setCategory("entertainment")} className="btn btn-outline-light m-1">Entertainment</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
