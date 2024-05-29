import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import digitalMarketing from "/images/digital.webp";
import webdesign from "/images/webdesign.webp";
import socialmedia from "/images/socialmedia.webp";
import SEO from "/images/seo.webp";
import graphic from "/images/graphic.webp";
import DigitalAdvertising from "/images/digitaladvertising.webp";
import { Link } from "react-router-dom";

function Cards() {
  // Array of card data
  const cardData = [
    {
      id: 1,
      title: "Digital Marketing",
      text: "Supercharge Your Brand's Online Visibility With Our Comprehensive Digital Marketing Services! From Strategic Social Media Campaigns And Targeted SEO Optimization To Engaging Content Creation And Data-Driven Analytics, We're Your Partner In Driving Results.",
      image: digitalMarketing, // Example image URL
    },
    {
      id: 2,
      title: "Website Design",
      text: "Our Skilled Team Specializes In Crafting Dynamic And User-Friendly Websites Tailored To Your Unique Needs. Whether You're Starting From Scratch Or Looking To Revamp Your Existing Site, We're Here To Deliver Stunning Designs And A Seamless User Experience.",
      image: webdesign, // Example image URL
    },
    {
      id: 3,
      title: "Social Media Managment",
      text: "Elevate Your Social Media Game With Our Expert Management Services! We Curate, Schedule, And Engage To Perfection, Ensuring Your Brand Shines Across Platforms. We've Got Your Social Success Covered.",
      image: socialmedia, // Example image URL
    },
    {
      id: 4,
      title: "SEO",
      text: "Reach Out To Our Expert Search Engine Optimization Consultants For Their SEO Mastery. Don’t Settle For Less, It’s Time To Snatch The Spotlight From Your Other Competitors. Get Discovered And Enjoy Your True Online Potential.",
      image: SEO, // Example image URL
    },
    {
      id: 5,
      title: "Graphic Designing",
      text: "Transform Your Ideas Into Captivating Visuals With Our Top-Notch Graphic Design Services! Our Creative Wizards Specialize In Crafting Eye-Catching Designs That Leave A Lasting Impression. We're Here To Turn Your Vision Into Stunning Reality.",
      image: graphic, // Example image URL
    },
    {
      id: 6,
      title: "Digital Advertising",
      text: "Amplify Your Reach And Drive Results With Our Dynamic Digital Advertising Services! From Targeted Campaigns That Capture Attention To Data-Driven Strategies That Deliver ROI, We're Your Partner In Navigating The Digital Landscape. ",
      image: DigitalAdvertising, // Example image URL
    },
  ];

  return (
    <div className="container">
      <h1 className="pb-5">Digital Marketing Services :</h1>
      <div className="row">
        {/* Map over the card data array */}
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`col-lg-4 col-md-6 mb-4 ${index > 2 ? "mt-lg-0" : ""}`}
          >
            <Card className="bg-dark text-light border-rounded p-3">
              <Card.Img
                className="w-25 p-3 text-success"
                variant="top"
                src={card.image}
                style={{
                  transform: "rotateX(50)",
                  maxWidth: "70px",
                  filter: "grayscale(100%)",
                }}
              />
              <Card.Body>
                <Card.Title className="py-2 fs-2">{card.title}</Card.Title>
                <Card.Text className="fs-4">{card.text}</Card.Text>
                <Link to="/service">
                  <Button className="bg-dark p-3 text-light border-dark fs-3">
                    learn more
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
