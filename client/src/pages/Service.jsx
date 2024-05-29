import { useAuth } from "../store/auth";
import { Card, Row, Col } from "react-bootstrap";

export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Our Services</h1>
      </div>
      <div className="container">
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((currElem, index) => {
            const { service, description, price, provider } = currElem;
            return (
              <Col key={index}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/images/download.jpeg"
                    alt="Service Image"
                  />
                  <Card.Body>
                    <Card.Title>{service}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    <Row>
                      <Col md={6}>
                        <p className="mb-0">Provider: {provider}</p>
                      </Col>
                      <Col md={6}>
                        <p className="text-end mb-0">Price: {price}</p>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};
