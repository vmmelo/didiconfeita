import React from 'react'
import PropTypes from 'prop-types'
import {
  Card, Badge
} from 'react-bootstrap';
import { floatToReal } from '../../util/funcoes-comuns';

function Product(props) {
  const {
    title, description, image, price
  } = props
  return (
    <Card className="mt-3 mx-auto">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Badge variant="pink">{floatToReal(price)}</Badge>
      </Card.Footer>
    </Card>
  )
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Product
