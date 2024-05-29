import Cards from "../components/Cards";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
export const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the world best IT company</p>
              <h1>Welcome {user.username} to the Zolix.CO</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT Solutions ? Look no further! At Zolix.Co , we
                specialized in providing innovative IT services and solutions
                tailored to meet your uniqu needs.
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
                src="/images/zolixHome.webp"
                alt="Registration image"
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      <Cards />
      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/zolixHome.webp"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              lets discuss how Zolix.Co can help your business thrive in the
              digital age.
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
        </div>
      </section>
    </>
  );
};
