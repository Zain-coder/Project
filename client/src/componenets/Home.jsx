import React from "react";
import { Link } from "react-router-dom";
import Wide from "./Wide";
function Home() {
  return (
    <div>
      {/* <CenterCard /> */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light nav-pills nav-fill"
        style={{ marginBottom: "-50px", marginTop: "-40px" }}
      >
        <div className="container-fluid  ">
          <img
            src="leads.png"
            alt=""
            style={{ width: "160px", marginRight: "20px", marginTop: "-20px" }}
          />
          <a
            className="navbar-brand"
            style={{ fontWeight: "bold", marginLeft: "-20px" }}
            href="#"
          >
            GetLeads
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <Link to="/">
                <li className="nav-item">
                  <h4
                    className="nav-link active h6 mt-2"
                    aria-current="page"
                    href="Home.jsx"
                    style={
                      ({ textDecorationLine: "underline" }, { color: "white" })
                    }
                  >
                    Home
                  </h4>
                </li>
              </Link>

              <Link to="SignUp">
                <li className="nav-item ms-2">
                  <h4
                    className="nav-link active h6 mt-2"
                    style={
                      ({ textDecorationLine: "underline" }, { color: "white" })
                    }
                  >
                    Register
                  </h4>
                </li>
              </Link>

              <Link to="/Services">
                <li className="nav-item ms-2">
                  <h4
                    className="nav-link active h6 mt-2"
                    style={
                      ({ textDecorationLine: "underline" }, { color: "white" })
                    }
                  >
                    Services
                  </h4>
                </li>
              </Link>

              <Link to="Fetchuser">
                <li className="nav-item ms-2">
                  <h4
                    className="nav-link active h6 mt-2"
                    style={
                      ({ textDecorationLine: "underline" }, { color: "white" })
                    }
                  >
                    Recent Sucess Story
                  </h4>
                </li>
              </Link>
              <Link to="Users">
                <li className="nav-item ms-2">
                  <h4
                    className="nav-link active h6 mt-2"
                    style={
                      ({ textDecorationLine: "underline" }, { color: "white" })
                    }
                  >
                    Current Users
                  </h4>
                </li>
              </Link>
            </ul>
            <form className="d-flex">
              {/* <input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/> */}
              {/* <button className="btn btn-outline-success" type="submit">
								Search
							</button> */}
            </form>
          </div>
        </div>
      </nav>
      {/* <img src="new.jpg" alt="" srcset="" style={{ width: "1700px" }} /> */}
      {/* <Video /> */}

      <Wide />
    </div>
  );
}

export default Home;
