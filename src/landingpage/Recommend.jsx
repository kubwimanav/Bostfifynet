import { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/picture/assets/inyugwe.jpg";
import Destination2 from "../assets/picture/assets/kibeho.jpg";
import Destination3 from "../assets/picture/assets/Gishwati.jpg";
import Destination4 from "../assets/picture/assets/huye.jpg";
import Destination5 from "../assets/picture/assets/nyanza.jpg";
import Destination6 from "../assets/picture/assets/musanze.jpg";
import info1 from "../assets/picture/assets/info1.png";
import info2 from "../assets/picture/assets/info2.png";
import info3 from "../assets/picture/assets/info3.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Nyungwe National Park",
      subTitle:
        "One of the oldest rainforests in Africa, Nyungwe is rich in biodiversity and spectacularly beautiful. The mountainous region is teaming with wildlife, including a small population of chimpanzees as well as 12 other species of primate",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Kibeho",
      subTitle:
        "Kibeho Parish has been a global pilgrimage destination for Roman Catholics since the Virgin Mary appeared on 28 November 1981",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Gishwati Mukura National Park",
      subTitle:
        "Rwanda's fourth National Park, Gishwati Mukura is made up of two separate forests - the larger Gishwati and small Mukura. It is home to chimpanzees, golden, blue and L'Hoest's monkeys as well as a host of birds and smaller animals.",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Huye",
      subTitle:
        "Peaceful and compact, Huye was founded in the early colonial era. Today is a centre of academia, as well as housing the Ethnographic Museum.",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Nyanza",
      subTitle:
        "Home to the King's Palace - a reconstruction of the traditional royal residence,a beautifully-crafted thatched dwelling shaped like a beehiv",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "Musanze",
      subTitle:
        "Close to the Volcanoes National Park, Musanze is a hassle-free and buzzing city, with plenty of choice for eating out, ATMs to withdraw cash, vibrant nightlife, markets and artisanal trades.",
      cost: "38,800",
      duration: "Approx all day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The christianity Break",
    "The  Forestly  Holiday tour",
    "The  Group Tour",
    "Cultural places  Travel",
    "Long Term parks Travel",
  ];

  const [active, setActive] = useState(1);
  const filteredDestinations =
    active > 0 ? data.filter((_, index) => index < active) : [];
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
              key={index}
                className={active === index + 1 ? "active" : "" }
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
         {filteredDestinations.map((destination, index) => {
        // {data.map((destination, index) => {
          return (
            <div className="destination" key={index}>
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle.slice(0, 100)}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="connection failed" />
                  <img src={info2} alt="connection failed " />
                  <img src={info3} alt=" connection failed" />
                </div>
                <button>ReadMore</button>
              </div>
              <div className="distance">
                <span>1000 Kms from kigali</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    cursor: pointer;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 1.5rem;
        border-bottom: 0.1rem solid black;
        // color:red;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
