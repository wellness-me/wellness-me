const NavBar = () => {
    return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/" style={{marginLeft:"20px"}}>wellness.me</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto" style={{marginRight:"20px"}}>
                <a class="nav-item nav-link active" href="/form">Daily Check-In</a>
                <a class="nav-item nav-link" href="#">Analytics</a>
                <a class="nav-item nav-link" href="#">Settings</a>
                </div>
            </div>
          </nav>
      </div>
    );
  };

export default NavBar;