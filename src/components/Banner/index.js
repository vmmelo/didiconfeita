import React from 'react'
import {
  Carousel,
  Row,
  Image,
  Container
} from 'react-bootstrap';
import components from './components'

function Banner() {
  return (
    <section id="home" className="bg-green pt-3 pb-3">
      <Container>
        <Row className="justify-content-between align-items-center bg-green">
          <Carousel className="fluid">
            {components && components.map((key, index) => (
              <Carousel.Item data-testid="carousel-item" key={`banner_${index}`} interval={1000}>
                <Image
                  rounded
                  className="d-block w-100"
                  src={key.image}
                  alt={key.title}
                />
                <Carousel.Caption>
                  <h4>{key.title}</h4>
                  <p>{key.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
