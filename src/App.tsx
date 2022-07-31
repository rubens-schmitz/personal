import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";

import Content from "./Content";
import OrangeBall from "./OrangeBall";
import GreenBall from "./GreenBall";
import YellowBall from "./YellowBall";
import profile from './profile.png';

const backgroundColor: string = "#f5f7fa";
const darkBackgroundColor: string = "darkslategrey";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: backgroundColor,
        fontFamily: "helvetica",
        overflowX: "hidden",
        position: "absolute",
        color: darkBackgroundColor,
      }}
    >
      <OrangeBall darkBackgroundColor={darkBackgroundColor} />
      <GreenBall darkBackgroundColor={darkBackgroundColor} />
      <YellowBall darkBackgroundColor={darkBackgroundColor} />

      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "370px"
      }}>
        <div
          style={{
            backdropFilter: "blur(3px) saturate(180%)",
            WebkitBackdropFilter: "blur(3px) saturate(180%)",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            borderRadius: "12px 12px 0 0",
            border: "1px solid rgba(209, 213, 219, 0.3)",
            display: "grid",
            gap: "8px",
            padding: "16px 32px 16px 32px",
            zIndex: "3"
          }}
        >
          <h1 style={{ margin: "0" }}>Rubens Schmitz</h1>

          <img style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            marginBottom: "8px"
          }} src={profile} alt="profile" />

          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gap: "8px",
              justifyContent: "start",
            }}
          >
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+3580417941605">
              +358 041 794 1605
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gap: "8px",
              justifyContent: "start",
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:rubens.schmitz@outlook.com">
              rubens.schmitz@outlook.com
            </a>
          </div>
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gap: "8px",
              justifyContent: "start",
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
            <a href="https://github.com/rubens-schmitz">
              github.com/rubens-schmitz
            </a>
          </div>
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gap: "8px",
              justifyContent: "start",
            }}
          >
            <FontAwesomeIcon icon={faGitlab} />
            <a href="https://gitlab.com/rubens-schmitz">
              gitlab.com/rubens-schmitz
            </a>
          </div>
        </div>

        <Content />
      </div>
    </div>
  );
}

export default App;
