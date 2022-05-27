import { useEffect, useState } from "react";
import colors from "./Colors";
import BoxBar from "./BoxBar";
import LabelList from "./LabelList";

const Results = ({ socket, responses }) => {
  const [responsesData, setResponsesData] = useState({});

  useEffect(() => {
    // setare daca sunt ceva raspunsuri
    setResponsesData(responses);

    // preluare la eveniment cand apasam send
    socket.on("reciveData", (data) => {
      setResponsesData(data);
    });
  }, [responses]);

  // for loop cu scopul de a calcula suma raspunsurilor (si cele dublate) - ele sunt stocate in backend*
  let objectLength = 0;
  for (let number in responsesData) {
    objectLength += responsesData[number];
  }

  // transformare obiect ce vinde din backend in array ca sa il folosim cu .map
  let responsesArray = [];
  if (responsesData) {
    responsesArray = Object.keys(responsesData);
  }

  // functie care calculeaza procentele pentru bara
  const calcPercentages = (num) => {
    return `${((num / objectLength) * 100).toFixed(2)}%`;
  };

  // check sa vedem daca nu a fost trimis un raspuns
  if (Object.keys(responsesData).length === 0) {
    return <div></div>;
  }

  return (
    <div className="results-box ">
      <h2>Results - {objectLength} responses </h2>
      <div className="results-graphic">
        {responsesArray.map((data, index) => {
          return (
            <BoxBar
              key={data}
              color={colors[index]}
              percentages={calcPercentages(responsesData[data])}
              response={data}
            ></BoxBar>
          );
        })}
      </div>
      <ul className="results-list">
        {responsesArray.map((data, index) => {
          return (
            <LabelList
              key={data}
              color={colors[index]}
              dataNumbers={responsesData[data]}
              response={data}
            ></LabelList>
          );
        })}
      </ul>
    </div>
  );
};

export default Results;
