import * as React from "react";
import PopCard from "../organisms/PopCard/PopCard";
import "./myJourney.css";
const MyJourney = () => {
  return (

    <><div style={{ marginTop: "2rem" }}>
      <h4 id="hi" className="highlight" style={{ color: "#1c3c2a", marginBottom: "12px", marginTop: "1rem" }}>
        Projects, Designs, Games and More..
      </h4>
    </div>
      <div className="container">
        <PopCard
          title="Spline Portfolio"
          desc="A 3d portfolio built in Spline and Reactjs"
          buttonName="View"
          imgsrc="portfolio.png"
          buttonRedirectUrl="https://whining-apple-short.on-fleek.app/"
          width="90%"
        />

        <PopCard
          title="Aroma Oils"
          desc="A brandsite designed by me and made with webFlow"
          buttonName="View"
          imgsrc="aroma.png"
          buttonRedirectUrl="https://illusionist-ca140d.webflow.io/"
          width="90%"
        />
        <PopCard
          title="Little Lemon"
          desc="Restraunt reservation website developed as part of 'Meta Frontend Developer' Professional certification"
          buttonName="View"
          imgsrc="proj1.png"
          buttonRedirectUrl="https://github.com/NehaChawdipande/LittleLemon"
          width="90%"
        />
        <PopCard
          title="NewsUp"
          desc="Angular-Ionic News Application with newsApi, weatherApi.,"
          buttonName="View"
          imgsrc="proj2.png"
          buttonRedirectUrl="https://github.com/NehaChawdipande/NewsUp"
        />
        <PopCard
          title="My NFT Collection"
          desc="A small collection of authentic handmade illustration art by me."
          buttonName="View"
          imgsrc="nft1.png"
          buttonRedirectUrl="https://opensea.io/collection/untitled-collection-264563453/"
        />
        <PopCard
          title="My Medium Blog"
          desc="Blog with interesting articles, authored by me."
          buttonName="Visit"
          imgsrc="blog.png"
          width="84%"
          buttonRedirectUrl="https://medium.com/@nehachawdipande10"
        />

        <PopCard
          title="Journey"
          desc="An endless Journey into the Seas - developed with Unity and C#"
          buttonName="Play online"
          imgsrc="game1.png"
          buttonRedirectUrl="https://neyha.itch.io/journey"
          width="90%"
        />
        <PopCard
          title="Chaos"
          desc="A casual game with groovy music and killer cubes - developed with Unity and C#"
          buttonName="Play online"
          imgsrc="game2.png"
          buttonRedirectUrl="https://neyha.itch.io/chaos"
          width="90%"
        />

      </div>
    </>
    // <div className="journey">
    //   <div
    //     className="background"
    //     style={{
    //       transform: `translateY(${offsetY * -0.5}px)`,
    //     }}
    //   />
    //   <div
    //     className="page1"
    //     style={{
    //       gridTemplateColumns: "60% 40% ",
    //     }}
    //   >
    //     <div className="responsiveImg">
    //       <img
    //         id="dev"
    //         src="/step1.png"
    //         alt="dev"
    //         style={{
    //           transform: `translateY(${offsetY * -0.7}px)`,
    //         }}
    //       />
    //     </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         paddingRight: "32px",
    //       }}
    //     >
    //       <h1
    //         style={{
    //           color: "#ececec",
    //           fontFamily: "monospace",
    //           transform: `translateY(${offsetY * -0.9}px)`,
    //           alignSelf: "center",
    //         }}
    //       >
    //         It all starts with childhood
    //         <strong id="highlight"> drawings</strong>..
    //       </h1>
    //     </div>
    //   </div>

    //   {/* <div
    //     className="background"
    //     style={{
    //       transform: `translateY(${offsetY * -0.5}px)`,
    //     }}
    //   /> */}
    //   <div className="page1">
    //     <div
    //       style={{
    //         display: "flex",
    //         paddingLeft: "32px",
    //       }}
    //     >
    //       <h1
    //         style={{
    //           color: "#ececec",
    //           fontFamily: "monospace",
    //           transform: `translateY(${offsetY * -0.9}px)`,
    //           alignSelf: "center",
    //         }}
    //       >
    //         Growing up I had always been
    //         <strong id="highlight"> creative</strong>..
    //       </h1>
    //     </div>
    //     <div className="responsiveImg">
    //       <img
    //         id="dev"
    //         src="/step2.png"
    //         alt="dev"
    //         style={{
    //           transform: `translateY(${offsetY * -0.7}px)`,
    //         }}
    //       />
    //     </div>
    //   </div>

    //   {/* <div
    //     className="background"
    //     style={{
    //       transform: `translateY(${offsetY * -0.5}px)`,
    //     }}
    //   /> */}
    //   <div
    //     className="page1"
    //     style={{
    //       gridTemplateColumns: "60% 40% ",
    //     }}
    //   >
    //     <div className="responsiveImg">
    //       <img
    //         id="dev"
    //         src="/step3.png"
    //         alt="dev"
    //         style={{
    //           transform: `translateY(${offsetY * -0.7}px)`,
    //         }}
    //       />
    //     </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         paddingRight: "32px",
    //       }}
    //     >
    //       <h1
    //         style={{
    //           color: "#ececec",
    //           fontFamily: "monospace",
    //           transform: `translateY(${offsetY * -0.8}px)`,
    //           alignSelf: "center",
    //         }}
    //       >
    //         I loved to try new things and
    //         <strong id="highlight"> paint</strong>..
    //       </h1>
    //     </div>
    //   </div>

    //   {/* <div
    //     className="background"
    //     style={{
    //       transform: `translateY(${offsetY * -0.5}px)`,
    //     }}
    //   /> */}
    //   <div className="page1">
    //     <div
    //       style={{
    //         display: "flex",
    //         paddingLeft: "32px",
    //       }}
    //     >
    //       <h1
    //         style={{
    //           color: "#ececec",
    //           fontFamily: "monospace",
    //           transform: `translateY(${offsetY * -0.8}px)`,
    //           alignSelf: "center",
    //         }}
    //       >
    //         Paper illustrations turned into
    //         <strong id="highlight"> digital art</strong> and{" "}
    //         <strong id="highlight">illustrations</strong>.
    //         <br />
    //         <br />
    //         check some out{" "}
    //         <strong id="highlight" className="scaleOnHoverGold">
    //           here
    //         </strong>
    //         !
    //       </h1>
    //     </div>
    //     <div className="responsiveImg">
    //       <img
    //         id="dev"
    //         src="/step4.png"
    //         alt="dev"
    //         style={{
    //           transform: `translateY(${offsetY * -0.7}px)`,
    //         }}
    //       />
    //     </div>
    //   </div>

    //   {/* <div
    //     className="background"
    //     style={{
    //       transform: `translateY(${offsetY * -0.5}px)`,
    //     }}
    //   /> */}
    //   <br />
    //   <div
    //     className="page1"
    //     style={{
    //       gridTemplateColumns: "60% 40% ",
    //     }}
    //   >
    //     <div className="responsiveImg">
    //       <img
    //         id="dev"
    //         src="/step5.png"
    //         alt="dev"
    //         style={{
    //           transform: `translateY(${offsetY * -0.7}px)`,
    //         }}
    //       />
    //     </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         paddingRight: "32px",
    //       }}
    //     >
    //       <h1
    //         style={{
    //           color: "#ececec",
    //           fontFamily: "monospace",
    //           transform: `translateY(${offsetY * -0.8}px)`,
    //           alignSelf: "center",
    //         }}
    //       >
    //         And online art turned into a{" "}
    //         <strong id="highlight"> passion for building beautiful </strong>{" "}
    //         online experiences ..
    //         <br />
    //         <br />
    //         <strong id="highlight" className="scaleOnHoverGold">
    //           {" "}
    //           Like this one!
    //         </strong>
    //       </h1>
    //     </div>
    //   </div>

    //   <br />
    //   <br />
    //   <div className="page1">
    //     <div
    //       style={{
    //         display: "flex",
    //         paddingLeft: "32px",
    //       }}
    //     >
    //       <h1
    //         style={{
    //           color: "#ececec",
    //           fontFamily: "monospace",
    //           transform: `translateY(${offsetY * -0.7}px)`,
    //           alignSelf: "center",
    //         }}
    //       >
    //         I have just started..
    //         <br />
    //         <br />
    //         And there is still
    //         <br />
    //         <strong id="highlight"> A long way to go..</strong>
    //         <br />
    //         <br />
    //         But I am
    //         <strong id="highlight" className="scaleOnHoverGold">
    //           {" "}
    //           excited to explore
    //         </strong>
    //         , are you?
    //       </h1>
    //     </div>
    //     <div className="responsiveImg">
    //       <img
    //         id="dev"
    //         src="/step6.png"
    //         alt="dev"
    //         style={{
    //           transform: `translateY(${offsetY * -0.7}px)`,
    //         }}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};
export default MyJourney;
