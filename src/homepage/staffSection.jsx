import arrowimg from "../images/right-triangle.png";
import doctor2 from "../images/doctor2.jpeg";
import { Link } from "react-router-dom";
export default function StaffSection({ arrow }) {
  return (
    <section className="home-staff">
      <div className="doctor-bio">
        <div className="doctor-body-image">
          <img src={doctor2} alt="doctor" />
        </div>
        <div className="doctor-description">
          <h1>Meet Your Doctor</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore...
            <Link to="/staff#fullbio">
              <button onClick={() => console.log("click")} className="full-bio">
                Read More
              </button>
            </Link>
            <img className={arrow} src={arrowimg} alt="arrow" />
          </p>
        </div>
      </div>
    </section>
  );
}
