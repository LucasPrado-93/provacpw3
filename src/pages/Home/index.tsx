import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Home = () => {
  const [sentence, setSentence] = useState("");
  const [numberOfWords, setNumberOfWords] = useState(0);
  const [numberOfChars, setNumberOfChars] = useState(0);

  useEffect(() => {
    const size = sentence
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, " ")
      .split(/\s+/)
      .filter((word) => word !== "").length;
    setNumberOfWords(size);
  }, [sentence]);

  useEffect(() => {
    const size = sentence.length;
    setNumberOfChars(size);
  }, [sentence]);

  return (
    <div>
      <div className={styles.container}>
        <div>
          <input
          placeholder="Digite aqui "
            className={styles.input}
            type="text"
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
          />
          <div>
          <div>
            <span>Quantidade de caracteres: {numberOfChars}</span>
          </div>
            <span className={styles.span}>
              Quantidade de palavras: {numberOfWords}
            </span>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
