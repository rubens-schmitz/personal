import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGitlab, faGithub } from "@fortawesome/free-brands-svg-icons";

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
        Flutter ●{" "}
        <a href="https://github.com/rubens-schmitz/edutronics">
          <span>Edutronics</span>
          <FontAwesomeIcon
            style={{ marginLeft: "4px" }}
            icon={faGithub}
          />
        </a>
      </li>
      <li>
        Qt/QML/Kirigami ●{" "}
        <a href="https://gitlab.com/rubens-schmitz/nova-edutroniks">
          <span>Nova Edutroniks</span>
          <FontAwesomeIcon
            style={{ marginLeft: "4px" }}
            icon={faGitlab}
          />
        </a>
      </li>
      <li>
        Svelte, Go, SQL ●{" "}
        <a href="https://github.com/rubens-schmitz/shop">
          <span>Shop</span>
          <FontAwesomeIcon
            style={{ marginLeft: "4px" }}
            icon={faGithub}
          />
        </a>{" "}
        .
      </li>
      <li>
        React ●{" "}
        <a href="https://rubens-schmitz.github.io/shop-frontend/">
          <span>Shop frontend</span>
          <FontAwesomeIcon
            style={{ marginLeft: "4px" }}
            icon={faExternalLinkAlt}
          />
        </a>{" "}
        .
      </li>
      <li>
        React ●{" "}
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
