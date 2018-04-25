import React from "react";
import "../assets/stylesheets/AboutUs.css";
import Navbar from "./Navbar";
// import splashImage from '../assets/images/splashimage.jpg'
// import arrow from '../assets/images/arrow.png'

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <div className="about justify-content-center">
          <div className="about-container justify-content-center">
            <div className="row justify-content-center">
              <div className="about-heading col-10 col-md-8">
                <div className="pipes" id="left-pipe">
                  |
                </div>
                MACK-CALI CORPORATION
                <div className="pipes" id="right-pipe">
                  |
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-10 col-md-8">
                <p>
                  Mack-Cali Realty Corporation is an owner, manager and
                  developer of premier office and multifamily properties in
                  select waterfront and transit-oriented markets throughout the
                  Northeast. Mack-Cali is headquartered in Jersey City, New
                  Jersey, and is the visionary behind the city&#39;s flourishing
                  waterfront, where the company is leading development,
                  improvement and place-making initiatives for Harborside, a
                  master-planned destination comprised of class A offices,
                  luxury apartments, diverse retail and restaurants, and public
                  space.
                </p>
                <p className="last-p">
                  A fully-integrated and self-managed company, Mack-Cali has
                  provided world-class management, leasing, and development
                  services throughout New Jersey and the surrounding region for
                  two decades. By regularly investing in its properties and
                  innovative lifestyle amenity packages, Mack-Cali creates
                  environments that empower tenants and residents to reimagine
                  the way they work and live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AboutUs;
