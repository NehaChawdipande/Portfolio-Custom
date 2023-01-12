import * as React from "react";
import { useEffect } from "react";
import "./myJourney.css";
const MyJourney = () => {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="journey">
      <div
        className="background"
        style={{
          transform: `translateY(${offsetY * -0.5}px)`,
        }}
      />
      <div
        className="page1"
        style={{
          gridTemplateColumns: "60% 40% ",
        }}
      >
        <div className="responsiveImg">
          <img
            id="dev"
            src="/step1.png"
            alt="dev"
            style={{
              transform: `translateY(${offsetY * -0.7}px)`,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            paddingRight: "32px",
          }}
        >
          <h1
            style={{
              color: "#ececec",
              fontFamily: "monospace",
              transform: `translateY(${offsetY * -0.9}px)`,
              alignSelf: "center",
            }}
          >
            It all starts with childhood
            <strong id="highlight"> drawings</strong>..
          </h1>
        </div>
      </div>

      {/* <div
        className="background"
        style={{
          transform: `translateY(${offsetY * -0.5}px)`,
        }}
      /> */}
      <div className="page1">
        <div
          style={{
            display: "flex",
            paddingLeft: "32px",
          }}
        >
          <h1
            style={{
              color: "#ececec",
              fontFamily: "monospace",
              transform: `translateY(${offsetY * -0.9}px)`,
              alignSelf: "center",
            }}
          >
            Growing up I had always been
            <strong id="highlight"> creative</strong>..
          </h1>
        </div>
        <div className="responsiveImg">
          <img
            id="dev"
            src="/step2.png"
            alt="dev"
            style={{
              transform: `translateY(${offsetY * -0.7}px)`,
            }}
          />
        </div>
      </div>

      {/* <div
        className="background"
        style={{
          transform: `translateY(${offsetY * -0.5}px)`,
        }}
      /> */}
      <div
        className="page1"
        style={{
          gridTemplateColumns: "60% 40% ",
        }}
      >
        <div className="responsiveImg">
          <img
            id="dev"
            src="/step3.png"
            alt="dev"
            style={{
              transform: `translateY(${offsetY * -0.7}px)`,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            paddingRight: "32px",
          }}
        >
          <h1
            style={{
              color: "#ececec",
              fontFamily: "monospace",
              transform: `translateY(${offsetY * -0.8}px)`,
              alignSelf: "center",
            }}
          >
            I loved to try new things and
            <strong id="highlight"> paint</strong>..
          </h1>
        </div>
      </div>

      {/* <div
        className="background"
        style={{
          transform: `translateY(${offsetY * -0.5}px)`,
        }}
      /> */}
      <div className="page1">
        <div
          style={{
            display: "flex",
            paddingLeft: "32px",
          }}
        >
          <h1
            style={{
              color: "#ececec",
              fontFamily: "monospace",
              transform: `translateY(${offsetY * -0.8}px)`,
              alignSelf: "center",
            }}
          >
            Paper illustrations turned into
            <strong id="highlight"> digital art</strong> and{" "}
            <strong id="highlight">illustrations</strong>.
            <br />
            <br />
            check some out{" "}
            <strong id="highlight" className="scaleOnHoverRed">
              here
            </strong>
            !
          </h1>
        </div>
        <div className="responsiveImg">
          <img
            id="dev"
            src="/step4.png"
            alt="dev"
            style={{
              transform: `translateY(${offsetY * -0.7}px)`,
            }}
          />
        </div>
      </div>

      {/* <div
        className="background"
        style={{
          transform: `translateY(${offsetY * -0.5}px)`,
        }}
      /> */}
      <br />
      <div
        className="page1"
        style={{
          gridTemplateColumns: "60% 40% ",
        }}
      >
        <div className="responsiveImg">
          <img
            id="dev"
            src="/step5.png"
            alt="dev"
            style={{
              transform: `translateY(${offsetY * -0.7}px)`,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            paddingRight: "32px",
          }}
        >
          <h1
            style={{
              color: "#ececec",
              fontFamily: "monospace",
              transform: `translateY(${offsetY * -0.8}px)`,
              alignSelf: "center",
            }}
          >
            And online art turned into a{" "}
            <strong id="highlight"> passion for building beautiful </strong>{" "}
            online experiences ..
            <br />
            <br />
            <strong id="highlight" className="scaleOnHoverRed">
              {" "}
              Like this one!
            </strong>
          </h1>
        </div>
      </div>

      <br />
      <br />
      <div className="page1">
        <div
          style={{
            display: "flex",
            paddingLeft: "32px",
          }}
        >
          <h1
            style={{
              color: "#ececec",
              fontFamily: "monospace",
              transform: `translateY(${offsetY * -0.7}px)`,
              alignSelf: "center",
            }}
          >
            I have just started..
            <br />
            <br />
            And there is still
            <br />
            <strong id="highlight"> A long way to go..</strong>
            <br />
            <br />
            But I am
            <strong id="highlight" className="scaleOnHoverRed">
              {" "}
              excited to explore
            </strong>
            , are you?
          </h1>
        </div>
        <div className="responsiveImg">
          <img
            id="dev"
            src="/step6.png"
            alt="dev"
            style={{
              transform: `translateY(${offsetY * -0.7}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default MyJourney;
