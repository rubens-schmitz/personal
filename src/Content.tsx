import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Content(): JSX.Element {
  return (
    <div style={{
      backdropFilter: "blur(5px) saturate(100%)",
      WebkitBackdropFilter: "blur(5px) saturate(100%)",
      backgroundColor: "rgba(248, 248, 248, 0.87)",
      borderRadius: "0 0 12px 12px",
      border: "1px solid rgba(209, 213, 219, 0.3)",
      display: "grid",
      gap: "8px",
      padding: "16px 32px 16px 32px",
      zIndex: "3"
    }}>
      <li>
        <a href="https://bitbucket.org/rubens-schmitz/nova-edutroniks">
          <span>Nova Edutroniks</span>
          <FontAwesomeIcon
            style={{ marginLeft: "4px" }}
            icon={faExternalLinkAlt}
          />
        </a>
      </li>
      <li>
        Fullstack{" "}
        <a href="https://github.com/rubens-schmitz/shop">
          <span>shop</span>
          <FontAwesomeIcon
            style={{ marginLeft: "4px" }}
            icon={faExternalLinkAlt}
          />
        </a>{" "}
        .
      </li>
      <li>
        A{" "}
        <a href="https://rubens-schmitz.github.io/shop-frontend/">
          <span>shop frontend</span>
          <FontAwesomeIcon
            style={{ marginLeft: "4px" }}
            icon={faExternalLinkAlt}
          />
        </a>{" "}
        .
      </li>
      <li>
        That{" "}
        <a href="https://rubens-schmitz.github.io/simon-game">
          <span>Simon game</span>
          <FontAwesomeIcon
            style={{ marginLeft: "4px" }}
            icon={faExternalLinkAlt}
          />
        </a>{" "}
        .
      </li>
    </div>
  );
}
