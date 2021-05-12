import "./style.css";

function Card(props) {
  return (
    <div className="App-Card">
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      <p>Stages: {props.stages} </p>
      <p> Stage 1 Sea Level Thrust: {props.stageOneThrustSea} kN </p>
      <p> Stage 1 Vacume Thrust: {props.stageOneThrustVacume} kN </p>
      <p> Stage 2 Thrust: {props.stageTwoThrust} kN </p>
    </div>
  );
}

export default Card;
