import { useState, useEffect } from "react";
import axios from "axios";

function Games() {


  const [fixture, setFitxture] = useState("");

  // const fetchData = () => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setFitxture(response.data.response[13].league.name);
  //       console.log(response.data);
  //       console.log(response.data.response[13].league.name);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  return (
    <div>
      <h1>Test</h1>
      {/* <button className="btn btn-primary" onClick={fetchData}>
        Run
      </button> */}
      {fixture}
    </div>
  );
}

export default Games;
