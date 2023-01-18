import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
function App() {
  const [text, setText] = useState("");

  /*
    //Using Async and Await
    const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    console.log(data);

    setText(data.slip);
  };*/
  function fetchAdvice() {
    /*
        //Using Fetch 
       fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setText(data.slip));*/
    //Using Axios
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => setText(res.data.slip));
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container">
      <h2>Advice #{text.id}</h2>
      <p>{text.advice}</p>

      <button onClick={fetchAdvice}>Get Advice</button>
    </div>
  );
}

export default App;
