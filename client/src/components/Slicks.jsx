import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Row, Col } from "react-bootstrap";

const Slicks = () => {
  const slidesData = [
    {
      imgSrc: "/images/placeholder.png",
      altText: "WordPress Developer",
      title: "Abdullah Malik",
      text: "WordPress Developer",
      details:
        "Emily is a skilled WordPress developer who specializes in building custom themes and plugins. She has a deep understanding of wordpress and also React.js",
    },
    {
      imgSrc: "/images/placeholder.png",
      altText: "Social Media Manager",
      title: "Hamza Zahoor",
      text: "Social Media Manager",
      details:
        "Hamza is a social media manager, excels in managing social media accounts and creating engaging content. He has experience in developing social media strategies.",
    },
    {
      imgSrc: "/images/placeholder.png",
      altText: "Graphic Designer",
      title: "Mudassir Nasir",
      text: "Graphic Designer",
      details:
        "Mike is a creative graphic designer with a keen eye for detail. He excels in designing logos, banners, and illustrations, and enjoys experhmimenting with different design styles.",
    },

    {
      imgSrc: "/images/placeholder.png",
      altText: "Web Developer",
      title: "Bilal Rafique",
      text: "MERN Stack Developer",
      details:
        "Abdullah is a passionate web developer with expertise in development. He enjoys building responsive and user-friendly websites in MERN Stack",
    },
    {
      imgSrc: "/images/placeholder.png",
      altText: "MERN Stack Developer",
      title: "Sadam Muneer",
      text: "MERN Stack Developer",
      details:
        "Sadam is a passionate web developer with expertise in development. He enjoys building responsive and user-friendly websites in MERN Stack",
    },
  ];

  const settings = {
    dots: false,
    arrows: true,
    autoplaySpeed: 7000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="container mt-2">
      <div className="pb-5">
        <h1>Our Team :</h1>
      </div>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index}>
            <Row className="justify-content-center">
              <Col className="mx-4">
                <Card className="text-center bootcard">
                  <Card.Img
                    variant="top"
                    src={slide.imgSrc}
                    alt={slide.altText}
                    className="mx-auto zoom-effect rounded"
                    style={{ width: "100px" }}
                  />

                  <Card.Body>
                    <Card.Title>{slide.title}</Card.Title>
                    <Card.Text className="text-bold fs-2">
                      {slide.text}
                    </Card.Text>
                    <Card.Text>{slide.details}</Card.Text>{" "}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slicks;
