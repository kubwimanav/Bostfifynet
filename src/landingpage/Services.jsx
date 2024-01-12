
import styled from "styled-components";
import service1 from "../assets/picture/assets/service1.png";
import service2 from "../assets/picture/assets/b-icon.png";
import service3 from "../assets/picture/assets/service3.png";
import service4 from "../assets/picture/assets/service4.png";
import'../Styles/Services.css'
export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Watch & Earn",
      subTitle: "Get Payed through our application Just By Watching Video.",
    },
    {
      icon: service2,
      title: "Boost Your Youtube Channel ",
      subTitle: "Find Youtube Views,Like and Subscription ",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Explore the Best Content",
      subTitle:
        "Stream Our Latest HD Vdeo For Free.",
    },
  ];
  return (
    <div
      id="services"
      style={{
       
        
      }}
      className="services-section"
    >
      <div className="services-col">
        <div>
          <h2 style={{ color: "#191943" }}>Our Service</h2>
        </div>
        <div className="services-row">
          {data.map((service, index) => {
            return (
              <div className="service" style={{ width: "200px" }} key={index}>
                <div className="icon">
                  <img src={service.icon} style={{color:"blue"}} alt="Connection failed" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


