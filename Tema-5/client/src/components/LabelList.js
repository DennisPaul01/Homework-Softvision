const LabelList = ({ color, dataNumbers, response }) => {
  return (
    <li>
      <div
        style={{
          background: `${color}`,
        }}
      />
      <p
        style={{
          color: `${color}`,
        }}
      >
        {dataNumbers} - {response}
      </p>
    </li>
  );
};

export default LabelList;
