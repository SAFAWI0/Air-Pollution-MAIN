import "./card.css";
import Container from "../Container/container";
import { Items } from "../../fake";
import { Element } from "react-scroll";

export const Card = () => {
  return (
       <Element name="section1">
    <div className="card">
      <Container>
        <div className="content-card">
          {Items.map((item, i) => (
            <div key={i} className="card">
              <span>{item.name}</span>
              <div className="card-title ">
                <p>{item.value}</p>
                <span>{item.symbol}</span>
              </div>
              <img src={item.img} alt={item.name} className="card-image" />
            </div>
          ))}
        </div>
        <div className="card-real">
          <div className="container-card">
            <p>Air Quality Status</p>
            <span>100%</span>
          </div>
        </div>
        <hr/>
      </Container>
    </div>
      </Element>
  );
};
