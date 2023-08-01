import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
        id: uuidv4(),
        name: name,
        image: image,
      };
      setCards((prevCards) => [...prevCards, newCard]);
      setName("");
      setImage("");

      localStorage.setItem("cards", JSON.stringify([...cards, newCard]));
    }
  };

  const handleDelete = (cardId) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  //para carregar os dados quando usuario entrar novamente
  useEffect(() => {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

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
            <button onClick={() => handleDelete(card.id)}>X</button>
          </div>
        ))}
      </div>
    </>
  );
}
