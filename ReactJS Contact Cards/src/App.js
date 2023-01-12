import { render } from "react-dom";
import "./styles.css";

export default function App() {
  let details = [
    {
      name: "Mike",
      email: "mike@gmail.com",
      skills: ["HTML", "CSS", "JS"]
    },
    {
      name: "leo",
      email: "leo@gmail.com",
      skills: ["JAVA", "Spring", "Boot"]
    },
    {
      name: "marry",
      email: "marry@gmail.com",
      skills: ["php", "laraval"]
    }
  ];
  let cardData = details.map((data) => {
    return <Card detail={data} />;
  });

  return <div className="App">{cardData}</div>;
}

function Card(props) {
  let skills = props.detail.skills.map((data) => {
    return <Skills skill={data} />;
  });
  return (
    <div style={{ border: "1px solid red" }}>
      <p>
        {props.detail.name} <br /> {props.detail.email}
      </p>
      {skills}
    </div>
  );
}
function Skills(props) {
  let styleSkills = {
    marginRight: "10px",
    backgroundColor: "Yellow",
    padding: "5px"
  };
  return <span style={styleSkills}>{props.skill}</span>;
}
