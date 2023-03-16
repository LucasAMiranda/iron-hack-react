import React from "react";
import '../StyleCss/Footer.css'
import { FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';
import {Container, Row, Col} from "react-bootstrap";


    
const Footer = () => {

  return (
      
    <footer className="bg-dark text-light py-3">
    <Container>
      <Row className="justify-content-center">
        <Col xs="auto" className="auto">
          <a className="icon-link"href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} /></a>
        </Col>
        <Col xs="auto" className="auto">
          <a className="icon-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
        </Col>
        <Col xs="auto" className="auto">
          <a className="icon-link" href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <p className="m-0">Entre em contato pelo WhatsApp ou Instagram</p>
        </Col>
        <Col xs="auto">
          <p className="m-0">Visite meu perfil no GitHub</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <p className="m-0">&copy; 2023 Meu Site - Todos os direitos reservados</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer


    

