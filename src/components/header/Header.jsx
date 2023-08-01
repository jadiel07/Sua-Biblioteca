import style from "./style.module.css";
import logo from "/Logo.jpg";
export default function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>Contato</li>
          <img src={logo} alt={logo} />
          <li>Como usar?</li>
        </ul>
      </nav>
    </>
  );
}
