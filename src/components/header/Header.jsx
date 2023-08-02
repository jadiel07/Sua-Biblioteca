import style from "./style.module.css";
import logo from "/Logo.jpg";
export default function Header() {
  return (
    <>
      <nav>
        <ul>
          <a
            href="https://github.com/jadiel07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Contato</li>
          </a>
          <img src={logo} alt={logo} />
          <a
            href="https://youtu.be/PcWKRogn6F8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Como usar?</li>
          </a>
        </ul>
      </nav>
    </>
  );
}
