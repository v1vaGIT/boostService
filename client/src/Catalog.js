import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";

function Catalog() {
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/catalog/")
      .then((res) => res.json())
      .then((data) => setCatalog(data));
  }, []);
  return (
    <div>
      <Container className="py-4">
        <Row>
          <Col xs={3}>
            <ListGroup>
              <ListGroup.Item>Буст аккаунтов</ListGroup.Item>
              <ListGroup.Item>Читы</ListGroup.Item>
              <ListGroup.Item>Випки</ListGroup.Item>
              <ListGroup.Item>Стать бустером</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={9}>
            <Row>
              {
                  catalog.map(el => (
                    <Col sm={12} md={6} xl={4}>
                    <Card className="mb-3">
                      <Card.Img variant="top" src={el.image} className="product-img"/>
                      <Card.Body>
                        <Card.Title>{el.name}</Card.Title>
                        <Card.Text className="d-flex justify-content-between align-items-center">
                          <span>Price:</span>
                          <span>{el.price}</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Catalog;
