const ColorLabel = (props) => {
  // Destructuring la props pentru a folosi id, ca sa putem sterge culorile
  const { id, color } = props;

  // Delete function pentru culorile din gradient
  const handlerDeleteColor = () => {
    props.handlerDeleteColor(id);
  };
  return (
    <div className="label-color" style={{ backgroundColor: `${color}` }}>
      <p onClick={handlerDeleteColor}>Delete Color</p>
    </div>
  );
};

export default ColorLabel;
