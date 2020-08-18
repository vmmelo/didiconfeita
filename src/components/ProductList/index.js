import React from 'react'
import {
  Row,
  Container
} from 'react-bootstrap';
import PropTypes
  from 'prop-types';
import componentList from './components'

function ProductList(props) {
  const { title, description } = props
  return (
    <section id={title} className="bg-green pt-3 pb-3">
      <Container>
        <h2 className="page-section-heading text-center text-uppercase mb-2">{title}</h2>
        <p className="text-center">
          {description}
        </p>
        <Row className="justify-content-between align-items-center bg-green">
          {
            componentList && componentList[title] && componentList[title].map((card, index) => (
              <card.component
                key={`card_${index}`}
                {...card.props}
              />
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProductList
