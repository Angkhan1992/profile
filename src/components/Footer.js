import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/nav-icon4.svg";
import upwork from "../assets/img/nav-icon5.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} mt={3}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} mt={3} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={upwork} alt="Icon" style={{ width: '20px' }} /></a>
              <a href="https://github.com/Angkhan1992?tab=repositories"><img src={github} alt="Icon" style={{ width: '20px' }} /></a>
            </div>
            <p>@2020-2022 Angkhan Bouasavanh</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
