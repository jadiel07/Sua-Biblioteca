import { useState } from "react";
import style from "./style.module.css";

export default function InputForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [cards, setCards] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "image") {
      setImage(value);
    }
  };

  const handleSubbmit = (event) => {
    event.preventDefault();
    if (name && image) {
      const newCard = {
        name: name,
        image: image,
      };
      setCards((prevCards) => [...prevCards, newCard]);
      setName("");
      setImage("");
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="digite o nome"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="cole a url aqui"
          name="image"
          value={image}
          onChange={handleInputChange}
        />
        <br />
        <button onClick={handleSubbmit}>Enviar</button>
      </form>
      <div className={style.card}>
        {cards.map((card, index) => (
          <div key={index}>
            <h1>{card.name}</h1>
            <img src={card.image} alt={card.name} />
          </div>
        ))}
      </div>
    </>
  );
}
