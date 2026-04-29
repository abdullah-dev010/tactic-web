import "./services.css";
import { Link } from "react-router-dom";

export function Services(){
    return(
        <div>
            <section>

                <h1 className="heading">Overview</h1> 
              
                <p className="overview">
                    Tactic Solutions provides expert software, IT, and digital solutions for businesses. We deliver custom applications, web and mobile platforms, IT consultancy, and secure digital services. Our client-first approach, technical expertise, and practical solutions help businesses grow, streamline operations, and achieve measurable results.
                </p>

                <Link to="/contacts">
                    <button className="request">Request Services</button>
                </Link>
        
                <p>
                    <p className="contact-text">
            For further details, please contact us on this email: 
      <b>abdullah.dev0101@gmail.com</b>
</p>
                </p>

           
                <div className="cards">

                    <div className="card"><h3>Custom Software Development</h3></div>

                    <div className="card"><h3>Mobile Application Development</h3></div>

                    <div className="card"><h3>iOS Development</h3></div>

                    <div className="card"><h3>Android Development</h3></div>

                    <div className="card"><h3>Web Development</h3></div>

                    <div className="card"><h3>SaaS Development</h3></div>

                    <div className="card"><h3>Cloud Application Development</h3></div>

                    <div className="card"><h3>IT Consulting</h3></div>

                    <div className="card"><h3>Information Security</h3></div>

                    <div className="card"><h3>Cybersecurity</h3></div>

                </div>
            

            </section>
        </div>
    )
}