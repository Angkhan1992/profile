import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
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
              <a href="https://www.upwork.com/freelancers/~013bb6a46a263a687c?viewMode=1"><img src={upwork} alt="Icon" style={{ width: '20px' }} /></a>
              <a href="https://github.com/Angkhan1992?tab=repositories"><img src={github} alt="Icon" style={{ width: '20px' }} /></a>
            </div>
            <p>@2020-2022 Angkhan Bouasavanh</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
