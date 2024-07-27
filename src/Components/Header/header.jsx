import "./header.css";
import Container from "../Container/container";
import img from "../../assets/pic.jpg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="header-content">
          
          <div className="title-logo">
            <img src={img} alt="Air Pollution" />
            <h2 className="title">Air Pollution</h2>
          </div>

          <div className="nav">
                <Link to="section1" smooth={true} duration={500}>
              Real Number
            </Link>
                <Link to="section2" smooth={true} duration={700}>
              Chart
            </Link>
                <Link to="section3" smooth={true} duration={900}>
              Table
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Header;
