import Slicks from "../components/Slicks";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>
                Welcome{" "}
                {user ? `${user.username} to our website` : `to our website`}
              </p>
              <h1>Why Choose Us? </h1>
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We are
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="btn btn-group">
                <Link to="/contact">
                  <button className="btn bg-primary p-3 bg-dark text-white">
                    Connect Now
                  </button>
                </Link>
                <Link to="/service">
                  <button className="btn bg-light p-3 bg-light text-dark border-dark mx-3">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            {/* images */}
            <div className="hero-image">
              <img
                src="/images/about.webp"
                alt="Registration image"
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      <Slicks />
    </>
  );
};
