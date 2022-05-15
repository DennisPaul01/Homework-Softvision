import { useState } from "react";
import AddFormColor from "../addFormColor";
import ColorLabel from "../ColorLabel";

const Exercitiu3 = () => {
  // acest state contine culorile din care v-a fi creat gradientul
  const [gradientColors, setGradientColors] = useState([
    {
      id: 0,
      color: "#111111",
    },
  ]);

  // Scopul acestei functii este de a adauga culori noi in state (care randeaza componenta de fiecare data cand este modificat)
  // El contine valorile anterioare + noua valoare care este adaugata folosind componenta <AddFormColor /> care paseaza eventul folosind props

  const addGradient = (color) => {
    const newGradientColors = [...gradientColors];
    color.id = gradientColors.length;
    newGradientColors.push(color);
    setGradientColors(newGradientColors);
  };

  // Scopul acestei functii este de a scoate din state culorile care nu le mai dorim
  // Eventul este pasat catre aceasta functie prin props veniti de la copil catre parinte (din <ColorLabels />)
  const deleteColor = (id) => {
    const newGradientColors = gradientColors.filter((color) => color.id !== id);
    setGradientColors(newGradientColors);
  };

  // Acesta variabila are scopul de a genera labels pentru culorile pe care le-am adaugat noi din form
  // Din <ColorLabel /> putem sterge si culori din state-ul care contine culorile din care v-a fi format gradientul
  // <ColorLabel /> primeste props key, id (care il vom folosi ca sa putem identifica ce culori dorim sa stergem), si culoare in sine
  const colorLabels = gradientColors.map((color) => (
    <ColorLabel
      key={color.id}
      id={color.id}
      color={color.color}
      handlerDeleteColor={deleteColor}
    />
  ));

  // Aceasta variabila are scopul de adauga gradient la box-ul nostru
  // Am folosit un if statement pentru a face un check in caz ca in state-ul nostru nu este nici o culoare adaugat, sau este doar una sigura si nu se poate forma gradientul
  let gradient;
  if (gradientColors.length > 1) {
    gradient = `linear-gradient(to right, ${gradientColors
      .map((color) => color.color)
      .join(", ")}`;
  } else if (gradientColors.length === 1) {
    gradient = `${gradientColors[0].color}`;
  } else {
    gradient = "#000000";
  }

  return (
    <div className="box-exercitiu">
      <div className="box-title">
        <h5>Exercitiu 3</h5>
        <AddFormColor handleClick={addGradient}></AddFormColor>
      </div>
      <div className="box-colors">
        <div className="box-labels">{colorLabels}</div>
        <div
          className="box-gradient"
          style={{ background: `${gradient}` }}
        ></div>
      </div>
    </div>
  );
};
export default Exercitiu3;
