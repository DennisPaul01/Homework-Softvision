import { useState, useEffect } from "react";

const Exercitiu4 = () => {
  // In acest exercitiu as fi putut face return impreuna cu if statement sa afisez ceva dar am ales sa folosesc && (and) ca sa adaug si spinnerul

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);

  return (
    <div className="box-exercitiu">
      <div className="box-title">
        <h5>Exercitiu 4</h5>
        <p>Timmer</p>
      </div>
      <div className="box-loading">
        {!loading && <div className="lds-hourglass"></div>}
        {!loading && <p className="loading-start"> Loading, please wait</p>}
        {loading && <p className="loading-end"> Finished loading</p>}
      </div>
    </div>
  );
};
export default Exercitiu4;
