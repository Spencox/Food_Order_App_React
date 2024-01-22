import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import categories from "../../categories";
import cuisines from "../../cuisines";
import restaurants from "../../restaurants";

const HomePage = () => {
  return (
    <>
      {/* Implement Task 1 - Displaying cuisine names and images */}
      {/* Example given below */}
      <h4>Try New Cuisines</h4>
      <Container fluid>
        <Row>
          {cuisines.map((cuisine) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <ItemCard 
                itemName="cuisine"
                item={cuisine}
              ></ItemCard>
            </Col>
          ))}
        </Row>
      </Container>

      <h4>Get inspiration for your order</h4>
      <Container fluid>
        <Row>
          {categories.map(category => (
            <Col xs={12} sm={6} md={4} lg={3}>
               <ItemCard 
            itemName="category"
            item={category}
            ></ItemCard>
            </Col>
          ))}
        </Row>
      </Container>
      
      <h4>Available restaurants</h4>
        {/* Implement Task 1 - Displaying restaurant names and images */}
        <Container fluid>
        <Row>
          {restaurants.map(restaurants => (
            <Col xs={12} sm={6} md={4} lg={3}>
               <ItemCard 
            itemName="restaurant"
            item={restaurants}
            ></ItemCard>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
