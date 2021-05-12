import { useEffect, useState } from "react";
import Card from "../Cards/Cards";
import "./style.css";

function Article() {
  const [lauches, setLaunches] = useState([]);

  // Query Term
  const LANCHES_QUERY = `{
    launchesPast(limit: 5) {
      rocket {
        rocket_name
        rocket {
          first_stage {
            thrust_sea_level {
              kN
            }
            thrust_vacuum {
              kN
            }
          }
          stages
          second_stage {
            thrust {
              kN
            }
          }
        }
      }
      id
      launch_date_utc
    }
  }
  `;

  // load information on load with fetch
  useEffect(() => {
    fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: LANCHES_QUERY })
    })
      .then((response) => response.json())
      .then((data) => setLaunches(data.data.launchesPast));
  }, []);

  return (
    <div>
      <div className="intro">
        <h2>The Last Frontier</h2>
        <p>The 5 latest SpaceX launches.</p>
        <p>With rocket name, date, rocket stages & thrust on every stage</p>
      </div>
      <div className="App-Body">
        {lauches.map((launch) => {
          const date = launch.launch_date_utc.split("T");
          return (
            <div className="flex" key={launch.id}>
              <Card
                name={launch.rocket.rocket_name}
                date={date[0]}
                stages={launch.rocket.rocket.stages}
                stageOneThrustSea={
                  launch.rocket.rocket.first_stage.thrust_sea_level.kN
                }
                stageOneThrustVacume={
                  launch.rocket.rocket.first_stage.thrust_vacuum.kN
                }
                stageTwoThrust={launch.rocket.rocket.second_stage.thrust.kN}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Article;
