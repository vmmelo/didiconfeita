import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
} from 'react-bootstrap';

function Product(props) {
  const { title, description, image } = props
  return (
    <Card className="mt-3 mx-auto">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Product
