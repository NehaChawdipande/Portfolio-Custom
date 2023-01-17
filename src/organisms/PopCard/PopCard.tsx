import React from "react";
import { useEffect } from "react";
import "./popCard.scss";

interface PopCardInterface {
  title: string;
  desc: string;
  imgsrc: string;
  buttonName: string;
  buttonRedirectUrl?: string;
}

const PopCard = (props: PopCardInterface): JSX.Element => {
  useEffect(() => {
    const card = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;
    //Items
    const title = document.querySelectorAll(".title");
    const sneaker = document.querySelectorAll(
      ".sneaker img"
    ) as NodeListOf<HTMLElement>;
    const purchase = document.querySelectorAll(
      ".purchase button"
    ) as NodeListOf<HTMLElement>;
    const description = document.querySelectorAll(
      ".info h3"
    ) as NodeListOf<HTMLElement>;
    for (let i = 0; i < card.length; i++) {
      card[i].addEventListener("mousemove", (e) => {
        // @ts-ignore
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        // @ts-ignore
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      });

      card[i].addEventListener("mouseenter", (e) => {
        card[i].style.transition = "none";
        //Popout
        // @ts-ignore
        title[i].style.transform = "translateZ(50px)";
        sneaker[i].style.transform = "translateZ(56px)";
        description[i].style.transform = "translateZ(45px)";
        purchase[i].style.transform = "translateZ(35px)";
      });
      card[i].addEventListener("mouseleave", (e) => {
        card[i].style.transition = "all 0.5s ease";
        card[i].style.transform = `rotateY(0deg) rotateX(0deg)`;
        //Popback
        // @ts-ignore
        title[i].style.transform = "translateZ(0px)";
        sneaker[i].style.transform = "translateZ(0px)";
        description[i].style.transform = "translateZ(0px)";
        purchase[i].style.transform = "translateZ(0px)";
      });
    }
  }, []);
  return (
    <>
      <div className="card">
        <div className="sneaker">
          <img src={`${props.imgsrc}`} alt="cardImg" />
        </div>
        <div className="info">
          <h2 className="title">{props.title}</h2>
          <h3 className="description">{props.desc}</h3>
          <div className="purchase">
            <button onClick={() => window.open(`${props?.buttonRedirectUrl}`)}>
              {props.buttonName}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PopCard;
