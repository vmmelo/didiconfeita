import React from 'react'
import {
  Container, Row, Col
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { serialize } from '../../util/funcoes-comuns'

function Footer() {
  const queryStringWhatsapp = serialize({
    phone: process.env.REACT_APP_WHATSAPP,
    text: 'Olá, gostaria de comprar alguns itens do didiconfeita'
  })

  return (
    <section className="bg-pink footer text-center" id="footer">
      <Container fluid>
        <Row>
          <Col className="col-lg-6 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Onde comprar</h4>
            <p className="lead mb-0">
              Recife, Pernambuco
            </p>
          </Col>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">
              Entre em contato
            </h4>
            <a
              className="btn btn-social mx-1 btn-outline-dark"
              rel="noopener noreferrer"
              /* eslint-disable-next-line max-len */
              href={`https://api.whatsapp.com/send?${queryStringWhatsapp}`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              className="btn btn-social mx-1 btn-outline-dark"
              href="https://www.instagram.com/didiconfeita"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Footer
