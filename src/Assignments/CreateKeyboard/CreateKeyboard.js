
import { useEffect, useState } from "react";
import "./CreateKeyboard.css";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const CreateKeyboard = () => {

    const [input, setInput] = useState("");
    const [quote, setQuote] = useState(null);

    function handleKeyPress(key){
        setInput((prev) => prev + key);
    }

    useEffect(() => {
        if(input.toLowerCase() === "forty two"){
            fetch("https://api.quotable.io/random")
            .then((response) => response.json())
            .then((data) => setQuote(data.content))
            .catch((erroe) => console.error("Error fetching quote:", erroe));
        }else{
            setQuote(null);
        }
        
    }, [input])

    if(quote){
        return <div className="quote">{quote}</div>
    }

  return (
    <div className="keyboard">
      <div className="preview">{input}</div>
      <div>
        {keys.map((key) => (
          <button key={key} id={key === " " ? `key-space` : `key-${key}`}
          onClick={() => handleKeyPress(key)}>
            {key === " " ? "Space" : key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CreateKeyboard;