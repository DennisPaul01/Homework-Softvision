const BoxBar = ({ color, percentages, response }) => {
  return (
    <div
      className="results-graphic-box"
      style={{
        background: `${color}`,
        width: `${percentages}`,
      }}
    >
      <p>
        {percentages} {response}
      </p>
    </div>
  );
};

export default BoxBar;
