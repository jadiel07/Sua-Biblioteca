import style from "./style.module.css";

export default function InputForm() {
  return (
    <>
      <form>
        <input type="text" placeholder="digite o nome" />
        <input type="text" placeholder="cole a url aqui" />
        <br />
        <button>Enviar</button>
      </form>
    </>
  );
}
