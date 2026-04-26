import { Link } from "react-router-dom";
import "./home.css";

export function Home() {
  return (
    <div className="home-container">

      
      <section className="hero">
        <h1>Welcome to Tactic Solutions</h1>

        <p>
          We build modern, fast and scalable digital solutions for your business.
        </p>

        <Link to="/contact">
          <button className="btn">Get Started</button>
        </Link>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About Us</h2>

        <p>
          Tactic Solutions is a tech company focused on delivering high-quality
          web and mobile applications with modern design and performance.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-list">

          <div className="card">Web Development</div>

          <div className="card">App Development</div>

          <div className="card">UI/UX Design</div>

        </div>
      </section>

    </div>
  );
}
   