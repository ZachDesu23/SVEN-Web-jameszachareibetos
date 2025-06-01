import Button from "./Button";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Nav({ scrollToSection, aboutRef, contactRef, homeRef, navTextColor = 'white' }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top p-4 h4">
      <div className="container">
        <a
          href="#"
          className="navbar-brand"
          style={{ color: navTextColor }}
          onClick={e => {
            scrollToSection(homeRef);
          }}
        >  <img src="/images/pets.png" alt="dog-paw" className="rounded-circle bg-white p-1 me-2" style={{width:'45px'}}/>
          PAWTASTIC
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Button
                color={navTextColor}
                className="btn nav-link"
                onClick={() => scrollToSection(aboutRef)}
              >
                About Us
              </Button>
            </li>
            <li className="nav-item">
              <Button
                color={navTextColor}
                className="btn nav-link"
                onClick={() => scrollToSection(contactRef)}
              >
                Schedule a visit
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
